import app from "./app";
import editUser from "./endpoints/editUser";
import createUser from "./endpoints/createUser";
import { IdGenerator } from "./services/IdGenerate";
import Authenticator from "./services/Authenticator";
import { authenticatorData } from "./types";

const authenticator = new Authenticator();

const payload: authenticatorData = {
  id: "id-bananinha",
};

console.log(authenticator.generateToken(payload));

app.post("/user/signup", createUser);
app.put("/user/edit/:id", editUser);
