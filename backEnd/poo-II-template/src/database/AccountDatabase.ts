import { BaseDatabase } from "./BaseDatabase";
import { TAccountDB } from "../types";
import { StringifyOptions } from "querystring";

export class AccountDatabase extends BaseDatabase {
  public static TABLE_ACCOUNTS = "accounts";

  public async findeAccount(): Promise<TAccountDB[]> {
    const accountsDB: TAccountDB[] = await BaseDatabase.connection(
      AccountDatabase.TABLE_ACCOUNTS
    );
    return accountsDB;
  }
  public async findBallanceByAccountId(
    id: string
  ): Promise<TAccountDB | undefined> {
    const [accountDB]: TAccountDB[] | undefined[] =
      await BaseDatabase.connection(AccountDatabase.TABLE_ACCOUNTS).where({
        id,
      });
    return accountDB;
  }
  public async findAccountById(id: string): Promise<TAccountDB | undefined> {
    const [accountDBExists]: TAccountDB[] | undefined[] =
      await BaseDatabase.connection(AccountDatabase.TABLE_ACCOUNTS).where({
        id,
      });

    return accountDBExists;
  }
  public async insertAccount(newAccountDB: TAccountDB): Promise<void> {
    await BaseDatabase.connection(AccountDatabase.TABLE_ACCOUNTS).insert(
      newAccountDB
    );
  }
  public async updateBalanceByAccountId(
    id: string,
    newBalance: number
  ): Promise<void> {
    await BaseDatabase.connection(AccountDatabase.TABLE_ACCOUNTS)
      .update({ balance: newBalance })
      .where({ id });
  }
}
