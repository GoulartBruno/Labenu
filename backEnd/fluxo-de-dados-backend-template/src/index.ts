import express, { Request, Response } from "express";
import cors from "cors";
import { accounts } from "./database";
import { ACCOUNT_TYPE } from "./types";

const app = express();

app.use(express.json());
app.use(cors());

app.listen(3003, () => {
  console.log("Servidor rodando na porta 3003");
});

app.get("/ping", (req: Request, res: Response) => {
  res.send("Pong!");
});

app.get("/accounts", (req: Request, res: Response) => {
  res.send(accounts);
});

//Get accounts By Id

// app.get("/accounts/:id", (req: Request, res: Response) => {
//     const id = req.params.id

//     const result = accounts.find((account) => account.id === id)

//     res.status(200).send(result)
// })

//

//usando TRY CAT

app.get("/accounts/:id", (req: Request, res: Response) => {
  try {
    const id = req.params.id;

    const result = accounts.find((account) => account.id === id);

    if (!result) {
      res.status(404);
      //muda o status do erro
      throw new Error("Conta não encontrada. Verifique a 'id'");
    }

    res.status(200).send(result);
  } catch (error) {
    console.log(error);

    if (res.statusCode === 200) {
      res.status(500);
    }
    if (error instanceof Error) {
      res.send(error.message);
    } else {
      res.send("Erro inesperado");
    }
  }
});

// app.delete("/accounts/:id", (req: Request, res: Response) => {
//   const id = req.params.id;

//   const accountIndex = accounts.findIndex((account) => account.id === id);

//   if (accountIndex >= 0) {
//     accounts.splice(accountIndex, 1);
//   }

//   res.status(200).send("Item deletado com sucesso");
// });

//refatorar para um try cat
app.delete("/accounts/:id", (req: Request, res: Response) => {
  try {
    const id = req.params.id;

    if (id[0] !== "a") {
      res.status(400);
      throw new Error("'id' inválido. Deve iniciar com a letra 'a'");
    }

    const accountIndex = accounts.findIndex((account) => account.id === id);

    if (accountIndex >= 0) {
      accounts.splice(accountIndex, 1);
    }

    res.status(200).send("Item deletado com sucesso");
  } catch (error) {
    console.log(error);

    if (res.statusCode === 200) {
      res.status(500);
    }
    if (error instanceof Error) {
      res.send(error.message);
    } else {
      res.send("Erro inesperado");
    }
  }
});

app.put("/accounts/:id", (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const newId = req.body.id as string | undefined;
    const newOwnerName = req.body.ownerName as string | undefined;
    const newBalance = req.body.balance as number | undefined;
    const newType = req.body.type as ACCOUNT_TYPE | undefined;

    if (newBalance !== undefined) {
      if (typeof newBalance !== "number") {
        res.status(400);
        throw new Error("'balance' deve ser do tipo number");
      }
      if (newBalance < 0) {
        res.status(400);
        throw new Error("'balance' deve ser maior ou igual a zero");
      }
    }
    if (newId[0] !== "a") {
      res.status(400);
      throw new Error("'id' inválido. Deve iniciar com a letra 'a'");
    }
    if (newOwnerName.length < 3) {
      res.status(400);
      throw new Error("'Name' inválido. Nome deve ter no mínimo 2 caracteres");
    }

    if (newType !== undefined) {
      if (
        newType !== ACCOUNT_TYPE.GOLD &&
        newType !== ACCOUNT_TYPE.PLATINUM &&
        newType !== ACCOUNT_TYPE.BLACK
      ) {
        res.status(400);
        throw new Error("'type' deve ser um dos tipos válidos");
      }
    }
    const account = accounts.find((account) => account.id === id);

    if (account) {
      account.id = newId || account.id;
      account.ownerName = newOwnerName || account.ownerName;
      account.type = newType || account.type;

      account.balance = isNaN(newBalance) ? account.balance : newBalance;
    }

    res.status(200).send("Atualização realizada com sucesso");
  } catch (error) {
    console.log(error);

    if (res.statusCode === 200) {
      res.status(500);
    }
    if (error instanceof Error) {
      res.send(error.message);
    } else {
      res.send("Erro inesperado");
    }
  }
});
