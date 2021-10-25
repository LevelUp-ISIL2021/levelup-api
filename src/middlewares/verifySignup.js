import {ROLES} from '../models/Role'
import User from '../models/User'

export const checkDuplicateDniOrEmail = async (req, res, next) =>{
    const dni = await User.findOne({dni: req.body.dni})

    if (dni) return res.status(400).json({message: 'The number dni already exists'})

    const email = await User.findOne({email: req.body.email})

    if (email) return res.status(400).json({message: 'The email already exists'})

    next();

}

export const checkRolesExisted = (req, res, next) => {
    if(req.body.roles){
        for (let i= 0; i< req.body.roles.length; i++) {
            if(!ROLES.includes(req.body.roles[i])){
                return res.status(400).json({
                    message: `Role ${req.body.roles[i]} does not exists`
                    //preguntar si estan bien las comillas del mensaje a fabian
                })
            }
        }
    }

    next();
}