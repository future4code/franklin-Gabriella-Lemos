import app from "./app";
import editUser from "./endpoints/editUser";
import createUser from "./endpoints/createUser";
import login from "./endpoints/login";
import getProfile from "./endpoints/getProfile";
import { HashManager } from "./services/HashManager";

app.post("/user/signup", createUser);
app.post("/user/login", login);
app.put("/user/edit", editUser);
app.get("/user/profile", getProfile);

// const hashManager = new HashManager();
// const senha = "123456";
// const senhaTentativa = "12345";

// const teste = async () => {
//   const hash = await hashManager.hash(senha);
//   console.log(hash);
//   const senhaCorreta = await hashManager.compare(senhaTentativa, hash);
//   console.log(senhaCorreta);
// };

// teste();
