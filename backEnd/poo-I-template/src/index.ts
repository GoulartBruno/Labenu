import express, { Request, Response } from "express";
import cors from "cors";
import { TAccountDB, TAccountDBPost, TUserDB, TUserDBPost } from "./types";
import { db } from "./database/knex";
import { User } from "./database/models/User";

const app = express();

app.use(cors());
app.use(express.json());

app.listen(4000, () => {
  console.log(`Servidor rodando na porta ${4000}`);
});

app.get("/ping", async (req: Request, res: Response) => {
  try {
    res.status(200).send({ message: "Pong!" });
  } catch (error) {
    console.log(error);

    if (req.statusCode === 200) {
      res.status(500);
    }

    if (error instanceof Error) {
      res.send(error.message);
    } else {
      res.send("Erro inesperado");
    }
  }
});

app.get("/users", async (req: Request, res: Response) => {
  try {
    const q = req.query.q;

    let usersDB;

    if (q) {
      const result: TUserDB[] = await db("users").where(
        "name",
        "LIKE",
        `%${q}%`
      );
      usersDB = result;
    } else {
      const result: TUserDB[] = await db("users");
      usersDB = result;
    }
    const users: User[] = usersDB.map(
      (userDB) =>
        new User(
          userDB.id,
          userDB.name,
          userDB.email,
          userDB.password,
          userDB.created_at
        )
    );
    res.status(200).send(usersDB);
  } catch (error) {
    console.log(error);

    if (req.statusCode === 200) {
      res.status(500);
    }

    if (error instanceof Error) {
      res.send(error.message);
    } else {
      res.send("Erro inesperado");
    }
  }
});

app.post("/users", async (req: Request, res: Response) => {
  try {
    const { id, name, email, password } = req.body;

    if (typeof id !== "string") {
      res.status(400);
      throw new Error("'id' deve ser string");
    }

    if (typeof name !== "string") {
      res.status(400);
      throw new Error("'name' deve ser string");
    }

    if (typeof email !== "string") {
      res.status(400);
      throw new Error("'email' deve ser string");
    }

    if (typeof password !== "string") {
      res.status(400);
      throw new Error("'password' deve ser string");
    }

    const [userDBExists]: TUserDB[] | undefined[] = await db("users").where({
      id,
    });

    if (userDBExists) {
      res.status(400);
      throw new Error("'id' já existe");
    }

    // const newUser: TUserDBPost = {
    //   id,
    //   name,
    //   email,
    //   password,
    // };

    const newUser = new User(
      id,
      name,
      email,
      password,
      new Date().toISOString() // retorna data atual
    );

    const newUserDB: TUserDB = {
      id: newUser.getId(),
      name: newUser.getName(),
      email: newUser.getEmail(),
      password: newUser.getPassword(),
      created_at: newUser.getCreatedAt(),
    };
    await db("users").insert(newUserDB);
    const [userDB]: TUserDB[] = await db("users").where({ id });
    res.status(201).send(newUser);
  } catch (error) {
    console.log(error);

    if (req.statusCode === 200) {
      res.status(500);
    }

    if (error instanceof Error) {
      res.send(error.message);
    } else {
      res.send("Erro inesperado");
    }
  }
});

app.get("/accounts", async (req: Request, res: Response) => {
  try {
    const accountsDB: TAccountDB[] = await db("accounts");

    res.status(200).send(accountsDB);
  } catch (error) {
    console.log(error);

    if (req.statusCode === 200) {
      res.status(500);
    }

    if (error instanceof Error) {
      res.send(error.message);
    } else {
      res.send("Erro inesperado");
    }
  }
});

app.get("/accounts/:id/balance", async (req: Request, res: Response) => {
  try {
    const id = req.params.id;

    const [accountDB]: TAccountDB[] | undefined[] = await db("accounts").where({
      id,
    });

    if (!accountDB) {
      res.status(404);
      throw new Error("'id' não encontrado");
    }

    res.status(200).send({ balance: accountDB.balance });
  } catch (error) {
    console.log(error);

    if (req.statusCode === 200) {
      res.status(500);
    }

    if (error instanceof Error) {
      res.send(error.message);
    } else {
      res.send("Erro inesperado");
    }
  }
});

app.post("/accounts", async (req: Request, res: Response) => {
  try {
    const { id, ownerId } = req.body;

    if (typeof id !== "string") {
      res.status(400);
      throw new Error("'id' deve ser string");
    }

    if (typeof ownerId !== "string") {
      res.status(400);
      throw new Error("'ownerId' deve ser string");
    }

    const [accountDBExists]: TAccountDB[] | undefined[] = await db(
      "accounts"
    ).where({ id });

    if (accountDBExists) {
      res.status(400);
      throw new Error("'id' já existe");
    }

    const newAccount: TAccountDBPost = {
      id,
      owner_id: ownerId,
    };

    await db("accounts").insert(newAccount);
    const [accountDB]: TAccountDB[] = await db("accounts").where({ id });

    res.status(201).send(accountDB);
  } catch (error) {
    console.log(error);

    if (req.statusCode === 200) {
      res.status(500);
    }

    if (error instanceof Error) {
      res.send(error.message);
    } else {
      res.send("Erro inesperado");
    }
  }
});

app.put("/accounts/:id/balance", async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const value = req.body.value;

    if (typeof value !== "number") {
      res.status(400);
      throw new Error("'value' deve ser number");
    }

    const [accountDB]: TAccountDB[] | undefined[] = await db("accounts").where({
      id,
    });

    if (!accountDB) {
      res.status(404);
      throw new Error("'id' não encontrado");
    }

    accountDB.balance += value;

    await db("accounts").update({ balance: accountDB.balance }).where({ id });

    res.status(200).send(accountDB);
  } catch (error) {
    console.log(error);

    if (req.statusCode === 200) {
      res.status(500);
    }

    if (error instanceof Error) {
      res.send(error.message);
    } else {
      res.send("Erro inesperado");
    }
  }
});

const usuario1 = new User(
  "001",
  "Mateus",
  "mate@hoamil.com",
  "mate123",
  "17/04/2022"
);

//acessar ID
console.log(usuario1);
console.log("get id: ", usuario1.getId());

//alterar id
usuario1.setId("u001");
