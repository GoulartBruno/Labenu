import { AccountDatabase } from "../database/AccountDatabase";
import { Account } from "../models/Account";
import express, { Request, Response } from "express";
import { AccountDB } from "../types";

export class AccountController {
  getAccount = async (req: Request, res: Response) => {
    try {
      const accountDatabase = new AccountDatabase();
      const accountsDB: AccountDB[] = await accountDatabase.findAccounts();

      const accounts = accountsDB.map(
        (accountDB) =>
          new Account(
            accountDB.id,
            accountDB.balance,
            accountDB.owner_id,
            accountDB.created_at
          )
      );

      res.status(200).send(accounts);
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
  getBalance = async (req: Request, res: Response) => {
    try {
      const id = req.params.id;

      const accountDatabase = new AccountDatabase();
      const accountDB = await accountDatabase.findAccountById(id);

      if (!accountDB) {
        res.status(404);
        throw new Error("'id' não encontrado");
      }

      const account = new Account(
        accountDB.id,
        accountDB.balance,
        accountDB.owner_id,
        accountDB.created_at
      );

      const balance = account.getBalance();

      res.status(200).send({ balance });
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
  createAccount = async (req: Request, res: Response) => {
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

      const accountDatabase = new AccountDatabase();
      const accountDBExists = await accountDatabase.findAccountById(id);

      if (accountDBExists) {
        res.status(400);
        throw new Error("'id' já existe");
      }

      const newAccount = new Account(id, 0, ownerId, new Date().toISOString());

      const newAccountDB: AccountDB = {
        id: newAccount.getId(),
        balance: newAccount.getBalance(),
        owner_id: newAccount.getOwnerId(),
        created_at: newAccount.getCreatedAt(),
      };

      await accountDatabase.insertAccount(newAccountDB);

      res.status(201).send(newAccount);
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
  editeBalance = async (req: Request, res: Response) => {
    try {
      const id = req.params.id;
      const value = req.body.value;

      if (typeof value !== "number") {
        res.status(400);
        throw new Error("'value' deve ser number");
      }

      const accountDatabase = new AccountDatabase();
      const accountDB = await accountDatabase.findAccountById(id);

      if (!accountDB) {
        res.status(404);
        throw new Error("'id' não encontrado");
      }

      const account = new Account(
        accountDB.id,
        accountDB.balance,
        accountDB.owner_id,
        accountDB.created_at
      );

      const newBalance = account.getBalance() + value;
      account.setBalance(newBalance);

      await accountDatabase.updateBalanceById(id, newBalance);

      res.status(200).send(account);
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
