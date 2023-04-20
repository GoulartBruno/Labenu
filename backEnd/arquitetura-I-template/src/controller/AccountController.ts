import { Request, Response } from "express";
import { AccountDatabase } from "../database/AccountDatabase";
import { Account } from "../models/Account";
import { AccountDB } from "../types";
import { AccountBusiness } from "../business/AccountBusiness";

export class AccountController {
  public getAccounts = async (req: Request, res: Response) => {
    try {
      // const accountDatabase = new AccountDatabase()
      // const accountsDB: AccountDB[] = await accountDatabase.findAccounts()

      // const accounts = accountsDB.map((accountDB) => new Account(
      //     accountDB.id,
      //     accountDB.balance,
      //     accountDB.owner_id,
      //     accountDB.created_at
      // ))
      const accountBusiness = new AccountBusiness();
      const output = await accountBusiness.getAccounts();
      res.status(200).send(output);
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
  };

  public getAccountBalance = async (req: Request, res: Response) => {
    try {
      const id = req.params.id;

      //   const accountDatabase = new AccountDatabase();
      //   const accountDB = await accountDatabase.findAccountById(id);

      //   if (!accountDB) {
      //     res.status(404);
      //     throw new Error("'id' não encontrado");
      //   }

      //   const account = new Account(
      //     accountDB.id,
      //     accountDB.balance,
      //     accountDB.owner_id,
      //     accountDB.created_at
      //   );

      //   const balance = account.getBalance();
      const accountBusiness = new AccountBusiness();
      const output = await accountBusiness.getAccountBalance(id);
      res.status(200).send({ balance: output });
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
  };

  public createAccount = async (req: Request, res: Response) => {
    try {
      const input = {
        id: req.body.id,
        ownerId: req.body.ownerId,
      };
      //   const { id, ownerId } = req.body;

      //   if (typeof id !== "string") {
      //     res.status(400);
      //     throw new Error("'id' deve ser string");
      //   }

      //   if (typeof ownerId !== "string") {
      //     res.status(400);
      //     throw new Error("'ownerId' deve ser string");
      //   }

      //   const accountDatabase = new AccountDatabase();
      //   const accountDBExists = await accountDatabase.findAccountById(id);

      //   if (accountDBExists) {
      //     res.status(400);
      //     throw new Error("'id' já existe");
      //   }

      //   const newAccount = new Account(id, 0, ownerId, new Date().toISOString());

      //   const newAccountDB: AccountDB = {
      //     id: newAccount.getId(),
      //     balance: newAccount.getBalance(),
      //     owner_id: newAccount.getOwnerId(),
      //     created_at: newAccount.getCreatedAt(),
      //   };

      //   await accountDatabase.insertAccount(newAccountDB);
      const accountBusiness = new AccountBusiness();
      const output = await accountBusiness.createAccount(input);
      res.status(201).send(output);
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
  };

  public editAccountBalance = async (req: Request, res: Response) => {
    try {
      //   const id = req.params.id;
      //   const value = req.body.value;
      const input = {
        id: req.params.id,
        value: req.body.value,
      };

      //   if (typeof value !== "number") {
      //     res.status(400);
      //     throw new Error("'value' deve ser number");
      //   }

      //   const accountDatabase = new AccountDatabase();
      //   const accountDB = await accountDatabase.findAccountById(id);

      //   if (!accountDB) {
      //     res.status(404);
      //     throw new Error("'id' não encontrado");
      //   }

      //   const account = new Account(
      //     accountDB.id,
      //     accountDB.balance,
      //     accountDB.owner_id,
      //     accountDB.created_at
      //   );

      //   const newBalance = account.getBalance() + value;
      //   account.setBalance(newBalance);

      //   await accountDatabase.updateBalanceById(id, newBalance);
      const accountBusiness = new AccountBusiness();
      const output = await accountBusiness.editAccountBalance(input);

      res.status(200).send(output);
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
  };
}
