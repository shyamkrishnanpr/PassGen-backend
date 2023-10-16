import express from 'express';
import { userSignup,userLogin } from '../controller/userController.js';


const userRouter = express.Router();




userRouter.post('/signUp', userSignup);
userRouter.post('/login',userLogin)

export default userRouter;