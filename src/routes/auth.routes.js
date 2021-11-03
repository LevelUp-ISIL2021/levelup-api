import {Router} from 'express'
const router = Router()
import { verifyToken } from '../middlewares/authJwt'

import * as authCtrl from '../controllers/auth.controller'
import {verifySignup} from '../middlewares'

router.post('/signup', [verifySignup.checkDuplicateDniOrEmail, verifySignup.checkRolesExisted], authCtrl.signUp)

router.post('/signin', authCtrl.signIn)

router.get("/", verifyToken, (req, res) => {
    res.status(200).json(req.user);
  });

export default router;