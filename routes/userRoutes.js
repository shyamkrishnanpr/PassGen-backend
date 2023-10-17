import express from "express";
import {
  userSignup,
  userLogin,
  savePassword,
  fetchSavedData,
  deletePassword,
} from "../controller/userController.js";
import verifyUser from "../middleware/authorisation.js";

const userRouter = express.Router();

userRouter.post("/signUp", userSignup);

userRouter.post("/login", userLogin);

userRouter.post("/savedPassword", verifyUser, savePassword);

userRouter.get("/fetchSavedData", verifyUser, fetchSavedData);

userRouter.delete("/deletePassword/:id", verifyUser, deletePassword);

export default userRouter;
