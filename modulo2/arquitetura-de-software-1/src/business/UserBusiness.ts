import UserDatabase from "../database/UserDatabase";
import { User, USER_ROLES } from "../model/User";
import { Authenticator, ITokenPayload } from "../services/Authenticator";
import { HashManager } from "../services/HashManager";
import { IdGenerator } from "../services/IdGenerator";

export default class UserBusiness {
  public signup = async (input: any) => {
    const name = input.name;
    const email = input.email;
    const password = input.password;

    if (!name || typeof name !== "string") {
      throw new Error("Parâmetro 'name' inválido");
    }

    if (!email || typeof email !== "string") {
      throw new Error("Parâmetro 'email' inválido");
    }

    if (!email.includes("@")) {
      throw new Error("Email inválido");
    }

    const idGenerator = new IdGenerator();
    const id = idGenerator.generate();

    const hashManager = new HashManager();
    const hashPassword = await hashManager.hash(password);

    const user = new User(id, name, email, hashPassword);

    const userDatabase = new UserDatabase();
    await userDatabase.createUser(user);

    const payload: ITokenPayload = {
      id: user.getId(),
      role: user.getRole(),
    };

    const authenticator = new Authenticator();
    const token = authenticator.generateToken(payload);

    const response = {
      token,
    };

    return response;
  };

  public login = async (inputLogin: any) => {
    const email = inputLogin.email;
    const password = inputLogin.password;

    if (!email || typeof email !== "string") {
      throw new Error("Parâmetro 'name' inválido");
    }

    if (!password || typeof password !== "string") {
      throw new Error("Parâmetro 'email' inválido");
    }

    const userDatabase = new UserDatabase();
    const userDB = await userDatabase.getByEmail(email);
    const user = new User(
      userDB.getId(),
      userDB.getName(),
      userDB.getName(),
      userDB.getPassword()
    );

    const hashManager = new HashManager();
    const hashPassword: boolean = await hashManager.compare(
      password,
      user.getPassword()
    );

    const payload: ITokenPayload = {
      id: user.getId(),
      role: user.getRole(),
    };

    const authenticator = new Authenticator();
    const token = authenticator.generateToken(payload);

    const response = {
      token,
    };

    return response;
  };

  public all = async (token: string) => {
    if (!token) {
      throw new Error("Token não enviado");
    }

    const userDatabase = new UserDatabase();
    const response = await userDatabase.allUser();

    return response;
  };
}
