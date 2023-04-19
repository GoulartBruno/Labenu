import { TAuthor } from "../types";
import { BaseDatabase } from "./BaseDatabase";

export class AuthorsDataBase extends BaseDatabase {
  public static TABLE_AUTHORS = "authors";

  public async findAuthors(q: string | undefined): Promise<TAuthor[]> {
    let books;
    if (q) {
      const result: TAuthor[] = await BaseDatabase.connection(
        AuthorsDataBase.TABLE_AUTHORS
      ).where("id", "LIKE", `%${q}%`);
      books = result;
    } else {
      const result: TAuthor[] = await BaseDatabase.connection(
        AuthorsDataBase.TABLE_AUTHORS
      );
      books = result;
    }
    return books;
  }
  public async findeAuthorsById(id: string): Promise<TAuthor | undefined> {
    const [bookDBExists]: TAuthor[] | undefined[] =
      await BaseDatabase.connection(AuthorsDataBase.TABLE_AUTHORS).where({
        id,
      });
    return authorDBExists;
  }
  public async insertBook(newAuthorsDB: TAuthor) {
    await BaseDatabase.connection(AuthorsDataBase.TABLE_AUTHORS).insert(
      newAuthorsDB
    );
  }
}
