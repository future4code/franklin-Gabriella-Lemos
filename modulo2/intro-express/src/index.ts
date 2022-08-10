import express, { Request, Response } from "express";
import cors from "cors";
import { type } from "os";

const app = express();

app.use(express.json());
app.use(cors());

app.get("/", (request: Request, res: Response) => {
  res.send("Hello from Express");
});

app.post("/user", (request: Request, res: Response) => {
  const user = {
    id: "123456",
    name: "Gabriella",
    phone: "123456789",
    email: "gabriella@franklin.br",
    website: "www.gabriella.com.br",
  };

  res.send({ message: user });
});

const usuarios: any[] = [
  {
    userId: 1,
    id: 1,
    nome: "Gabriella Lemos",
    email: "gabriella@franklin.br",
  },
  {
    userId: 1,
    id: 2,
    nome: "Deise Cunha",
    email: "deise.cunha@gmail.com",
  },
  {
    userId: 1,
    id: 3,
    nome: "Murilo Benicio",
    email: "murilobenicio@gmail.com",
  },
  {
    userId: 1,
    id: 4,
    nome: "Juma Marrua",
    email: "jumamarrua@gmail.com",
  },
];

app.get("/user-list", (request: Request, res: Response) => {
  res.send({ message: usuarios });
});

app.listen(3003, () => {
  console.log(`servidor rodando na porta 3003`);
});
