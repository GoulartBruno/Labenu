import { TAuthor } from "../types";
import { BaseDatabase } from "./BaseDatabase";

export class AuthorsDataBase extends BaseDatabase {
  public static TABLE_AUTHORS = "authors";

  public async findAuthors(q: string | undefined): Promise<TAuthor[]> {
    let authors;
    if (q) {
      const result: TAuthor[] = await BaseDatabase.connection(
        AuthorsDataBase.TABLE_AUTHORS
      ).where("name", "LIKE", `%${q}%`);
      authors = result;
    } else {
      const result: TAuthor[] = await BaseDatabase.connection(
        AuthorsDataBase.TABLE_AUTHORS
      );
      authors = result;
    }
    return authors;
  }
  public async findAuthorById(
    id: string | undefined
  ): Promise<TAuthor | undefined> {
    const [authorDBExists]: TAuthor[] | undefined[] =
      await BaseDatabase.connection(AuthorsDataBase.TABLE_AUTHORS).where({
        id,
      });
    return authorDBExists;
  }
  public async createAuthors(newAuthorsDB: TAuthor): Promise<void> {
    await BaseDatabase.connection(AuthorsDataBase.TABLE_AUTHORS).insert(
      newAuthorsDB
    );
  }
  public async editeAuthors(
    id: string,
    updateAuthorDB: TAuthor
  ): Promise<void> {
    await BaseDatabase.connection(AuthorsDataBase.TABLE_AUTHORS)
      .update(updateAuthorDB)
      .where({ id });
  }
  public async deleteAuthors(id: string): Promise<void> {
    await BaseDatabase.connection(AuthorsDataBase.TABLE_AUTHORS)
      .del()
      .where({ id });
  }
}
