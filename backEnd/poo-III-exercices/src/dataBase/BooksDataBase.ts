import { TBooks } from "../types";
import { BaseDatabase } from "./BaseDatabase";

export class BooksDataBase extends BaseDatabase {
  public static TABLE_BOOKS = "books";

  public async findBooks(q: string | undefined): Promise<TBooks[]> {
    let books;
    if (q) {
      const result: TBooks[] = await BaseDatabase.connection(
        BooksDataBase.TABLE_BOOKS
      ).where("id", "LIKE", `%${q}%`);
      books = result;
    } else {
      const result: TBooks[] = await BaseDatabase.connection(
        BooksDataBase.TABLE_BOOKS
      );
      books = result;
    }
    return books;
  }
  public async findeBooksById(id: string): Promise<TBooks | undefined> {
    const [bookDBExists]: TBooks[] | undefined[] =
      await BaseDatabase.connection(BooksDataBase.TABLE_BOOKS).where({
        id,
      });
    return bookDBExists;
  }
  public async insertBook(newBooksDB: TBooks) {
    await BaseDatabase.connection(BooksDataBase.TABLE_BOOKS).insert(newBooksDB);
  }
}
