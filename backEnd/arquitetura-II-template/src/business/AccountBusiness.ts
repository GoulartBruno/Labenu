import { AccountDatabase } from "../database/AccountDatabase";
import { BadRequestError } from "../errors/BadRequestError";
import { NotFoundError } from "../errors/NotFoundError";
import { Account } from "../models/Account";
import { AccountDB } from "../types";

export class AccountBusiness {
  public getAccounts = async () => {
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

    return accounts;
  };

  public getAccountBalance = async (id: string) => {
    const accountDatabase = new AccountDatabase();
    const accountDB = await accountDatabase.findAccountById(id);

    if (!accountDB) {
      throw new Error("'id' não encontrado");
    }

    const account = new Account(
      accountDB.id,
      accountDB.balance,
      accountDB.owner_id,
      accountDB.created_at
    );

    const output = {
      balance: account.getBalance(),
    };

    return output;
  };

  public createAccount = async (input: any) => {
    const { id, ownerId } = input;

    if (typeof id !== "string") {
      throw new BadRequestError("'id' deve ser string");
    }

    if (typeof ownerId !== "string") {
      throw new BadRequestError("'ownerId' deve ser string");
    }

    const accountDatabase = new AccountDatabase();
    const accountDBExists = await accountDatabase.findAccountById(id);

    if (accountDBExists) {
      throw new BadRequestError("'id' já existe");
    }

    const newAccount = new Account(id, 0, ownerId, new Date().toISOString());

    const newAccountDB: AccountDB = {
      id: newAccount.getId(),
      balance: newAccount.getBalance(),
      owner_id: newAccount.getOwnerId(),
      created_at: newAccount.getCreatedAt(),
    };

    await accountDatabase.insertAccount(newAccountDB);

    const output = {
      message: "Conta cadastrada com sucesso",
      account: newAccount,
    };

    return output;
  };

  public editAccountBalance = async (input: any) => {
    const { id, value } = input;

    if (typeof value !== "number") {
      throw new Error("'value' deve ser number");
    }

    const accountDatabase = new AccountDatabase();
    const accountDB = await accountDatabase.findAccountById(id);

    if (!accountDB) {
      throw new NotFoundError("'id' não encontrado");
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

    const output = {
      message: "Saldo atualizado com sucesso",
      balance: account.getBalance(),
    };

    return output;
  };
}
