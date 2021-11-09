import express from 'express'
import morgan from 'morgan'
import cors from 'cors'
import pkg from '../package.json'

import {createRoles} from './libs/initialSetup'


import reviewsRoutes from './routes/reviews.routes'
import authRoutes from './routes/auth.routes'
import userRoutes from './routes/user.routes'

const app = express()
createRoles();

app.set('pkg', pkg);

app.use(morgan('dev'));
app.use(express.json());

app.use(cors({ origin: '*', optionsSuccessStatus: 200, credentials: true }));

app.get('/', (req, res) =>{
    res.json({
        name: app.get('pkg').name,
        author: app.get('pkg').author,
        description: app.get('pkg').description,
        version: app.get('pkg').version
    })
}
)

app.use('/api/reviews',reviewsRoutes);
app.use('/api/auth',authRoutes);
app.use('/api/users', userRoutes)

export default app;