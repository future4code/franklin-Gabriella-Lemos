import { Router } from "express";
import { UserController } from "../controller/UserController";

export const userRouter = Router();
const userController = new UserController();

userRouter.post("/users/signup", userController.signup);
userRouter.post("/users/login", userController.login);
userRouter.get("/users/", userController.getUsers);
userRouter.delete("/users/:id", userController.deleteUser);
userRouter.put("/users/:id", userController.editUser);
