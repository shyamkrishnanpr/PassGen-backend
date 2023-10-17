import express from 'express';
import { userSignup,userLogin,savePassword } from '../controller/userController.js';
import verifyUser from '../middleware/authorisation.js';


const userRouter = express.Router();


 

userRouter.post('/signUp', userSignup);

userRouter.post('/login',userLogin)

userRouter.post('/savedPassword',verifyUser,savePassword)



export default userRouter;