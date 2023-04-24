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
  public async findeBooksById(
    id: string | undefined
  ): Promise<TBooks | undefined> {
    const [bookDBExists]: TBooks[] | undefined[] =
      await BaseDatabase.connection(BooksDataBase.TABLE_BOOKS).where({
        id,
      });
    return bookDBExists;
  }
  public async insertBook(newBooksDB: TBooks) {
    await BaseDatabase.connection(BooksDataBase.TABLE_BOOKS).insert(newBooksDB);
  }

  public async editeBooks(id: string, updateBookDB: TBooks): Promise<void> {
    await BaseDatabase.connection(BooksDataBase.TABLE_BOOKS)
      .update(updateBookDB)
      .where({ id });
  }
  public async deleteBooks(id: string): Promise<void> {
    await BaseDatabase.connection(BooksDataBase.TABLE_BOOKS)
      .del()
      .where({ id });
  }
}
