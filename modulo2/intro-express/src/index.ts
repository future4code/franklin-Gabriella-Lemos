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

//Resolucao exercicio 5

const userPosts = {
  userId: 1,
  id: 1,
  title: " ",
  body: "",
};

// Resolucao exercicio 6: para melhor manipulacao, os dados foram criados dentro de um array

const posts: any[] = [
  {
    userId: 1,
    id: 1,
    email: "gabriella@franklin.br",
    title:
      "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
  },
  {
    userId: 1,
    id: 2,
    email: "gabriella@franklin.br",
    title: "qui est esse",
    body: "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla",
  },
  {
    userId: 1,
    id: 3,
    title: "ea molestias quasi exercitationem repellat qui ipsa sit aut",
    body: "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut",
  },
  {
    userId: 1,
    id: 4,
    title: "eum et est occaecati",
    body: "ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit",
  },
  {
    userId: 2,
    id: 5,
    email: "deise.cunha@gmail.com",
    title: "nesciunt quas odio",
    body: "repudiandae veniam quaerat sunt sed\nalias aut fugiat sit autem sed est\nvoluptatem omnis possimus esse voluptatibus quis\nest aut tenetur dolor neque",
  },
  {
    userId: 2,
    id: 6,
    email: "deise.cunha@gmail.com",
    title: "dolorem eum magni eos aperiam quia",
    body: "ut aspernatur corporis harum nihil quis provident sequi\nmollitia nobis aliquid molestiae\nperspiciatis et ea nemo ab reprehenderit accusantium quas\nvoluptate dolores velit et doloremque molestiae",
  },
  {
    userId: 3,
    id: 7,
    email: "murilobenicio@gmail.com",
    title: "magnam facilis autem",
    body: "dolore placeat quibusdam ea quo vitae\nmagni quis enim qui quis quo nemo aut saepe\nquidem repellat excepturi ut quia\nsunt ut sequi eos ea sed quas",
  },
  {
    userId: 3,
    id: 8,
    email: "murilobenicio@gmail.com",
    title: "dolorem dolore est ipsam",
    body: "dignissimos aperiam dolorem qui eum\nfacilis quibusdam animi sint suscipit qui sint possimus cum\nquaerat magni maiores excepturi\nipsam ut commodi dolor voluptatum modi aut vitae",
  },
  {
    userId: 4,
    id: 9,
    email: "jumamarrua@gmail.com",
    title: "nesciunt iure omnis dolorem tempora et accusantium",
    body: "consectetur animi nesciunt iure dolore\nenim quia ad\nveniam autem ut quam aut nobis\net est aut quod aut provident voluptas autem voluptas",
  },
  {
    userId: 4,
    id: 10,
    email: "jumamarrua@gmail.com",
    title: "optio molestias id quia eum",
    body: "quo et expedita modi cum officia vel magni\ndoloribus qui repudiandae\nvero nisi sit\nquos veniam quod sed accusamus veritatis error",
  },
];

//Resolucao exercicio 7

app.get("/list-posts", (request: Request, res: Response) => {
  res.send({ message: posts });
});

//Resolucao exercicio 8

app.get("/id-posts", (request: Request, res: Response) => {
  const listPostUser = posts.filter((dado) => {
    return dado.email === request.body.email;
  });
  res.send({ message: listPostUser });
});

app.listen(3003, () => {
  console.log(`servidor rodando na porta 3003`);
});
