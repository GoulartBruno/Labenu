import { TUserDB } from "../types";
import { BaseDatabase } from "./BaseDatabase";

export class UserDatabase extends BaseDatabase {
  public static TABLE_USER = "users"; // maiusculo e com _ pq é uma constante, igual enum

  public async findUsers(q: string | undefined): Promise<TUserDB[]> {
    let usersDB;

    if (q) {
      const result: TUserDB[] = await BaseDatabase.connection(
        UserDatabase.TABLE_USER
      ).where("name", "LIKE", `%${q}%`);
      usersDB = result;
    } else {
      const result: TUserDB[] = await BaseDatabase.connection(
        UserDatabase.TABLE_USER
      );
      usersDB = result;
    }
    return usersDB;
  }

  public async findUserById(id: string): Promise<TUserDB | undefined> {
    const [userDB]: TUserDB[] | undefined[] = await BaseDatabase.connection(
      UserDatabase.TABLE_USER
    ).where({
      id,
    });
    return userDB;
  }
  public async insertUser(newUserDB: TUserDB): Promise<void> {
    await BaseDatabase.connection(UserDatabase.TABLE_USER).insert(newUserDB);
  }
}
