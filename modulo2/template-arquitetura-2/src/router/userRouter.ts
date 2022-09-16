import { Router } from "express";
import { UserBusiness } from "../business/UserBusiness";
import { UserController } from "../controller/UserController";
import { UserDatabase } from "../database/UserDatabase";
import { Authenticator } from "../services/Authenticator";
import { HashManager } from "../services/HashManager";
import { IdGenerator } from "../services/IdGenerator";

export const useRouter = Router();

const userController = new UserController(
  new UserBusiness(
    new UserDatabase(),
    new Authenticator(),
    new IdGenerator(),
    new HashManager()
  )
);

useRouter.post("/signup", userController.signup);
useRouter.post("/login", userController.login);
useRouter.get("/", userController.getUsers);
useRouter.delete("/:id", userController.deleteUser);
useRouter.put("/:id", userController.editUser);
