import { AccountDB } from "../types";
import { BaseDatabase } from "./BaseDatabase";

export class AccountDatabase extends BaseDatabase {
    public static TABLE_ACCOUNTS = "accounts"

    public async findAccounts() {
        const accountsDB: AccountDB[] = await BaseDatabase
            .connection(AccountDatabase.TABLE_ACCOUNTS)

        return accountsDB
    }

    public async findAccountById(id: string) {
        const [ accountDB ]: AccountDB[] | undefined[] = await BaseDatabase
            .connection(AccountDatabase.TABLE_ACCOUNTS)
            .where({ id })

        return accountDB
    }

    public async insertAccount(newAccountDB: AccountDB) {
        await BaseDatabase
            .connection(AccountDatabase.TABLE_ACCOUNTS)
            .insert(newAccountDB)
    }

    public async updateBalanceById(id: string, newBalance: number) {
        await BaseDatabase
            .connection(AccountDatabase.TABLE_ACCOUNTS)
            .update({ balance: newBalance })
            .where({ id })
    }
}
