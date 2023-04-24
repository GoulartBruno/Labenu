import express, { Request, Response } from "express";
import { BooksDataBase } from "../BooksDataBase";
import { Books } from "../models/Books";
import { TBooks } from "../../types";

export class BooksController {
  getBooks = async (req: Request, res: Response) => {
    try {
      const q = req.query.q as string | undefined;
      // let books;
      // if (q) {
      //   const result: TBooks[] = await db("books").where("id", "LIKE", `%${q}%`);
      //   books = result;
      // } else {
      //   const result: TBooks[] = await db("books");
      //   books = result;
      // }

      const booksDataBase = new BooksDataBase();

      const books = await booksDataBase.findBooks(q);

      const booksDB: Books[] = books.map(
        (book) =>
          new Books(
            book.id,
            book.titulo,
            book.pages,
            book.created_at,
            book.author_book
          )
      );

      res.status(200).send(books);
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
  createBooks = async (req: Request, res: Response) => {
    try {
      const { id, titulo, pages, author_book } = req.body;

      if (typeof id !== "string") {
        res.status(400);
        throw new Error("'id' deve ser string");
      }

      if (typeof titulo !== "string") {
        res.status(400);
        throw new Error("'titulo' deve ser string");
      }

      if (typeof pages !== "number") {
        res.status(400);
        throw new Error("'duracao' deve ser number");
      }

      // const [bookDBExists]: TBooks[] | undefined[] = await db("books").where({
      //   id,
      // });
      const booksDataBase = new BooksDataBase();

      const books = await booksDataBase.findeBooksById(id);

      if (books) {
        res.status(400);
        throw new Error("'id' já existe");
      }

      const newBook = new Books(
        id,
        titulo,
        pages,
        new Date().toISOString(),
        author_book
      );

      const newBooksDB: TBooks = {
        id: newBook.getId(),
        titulo: newBook.getTitulo(),
        pages: newBook.getPages(),
        created_at: newBook.getCreatedAt(),
        author_book: newBook.getAuthor_book(),
      };

      // await db("books").insert(newBooksDB);

      await booksDataBase.insertBook(newBooksDB);

      res.status(201).send(newBook);
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
  editeBooks = async (req: Request, res: Response) => {
    try {
      const id = req.params.id;

      const newTitulo = req.body.titulo as string | undefined;
      const newPages = req.body.pages as number | undefined;
      const newAuthor_book = req.body.author_book as string | undefined;

      if (typeof id !== "string") {
        res.status(400);
        throw new Error("'id' deve ser string");
      }
      if (newTitulo !== undefined) {
        if (typeof newTitulo !== "string") {
          res.status(400);
          throw new Error("Email inválido, deve ser do tipo string");
        }
      }
      if (newPages !== undefined) {
        if (typeof newPages !== "number") {
          res.status(400);
          throw new Error("Senha inválida, deve ser do tipo number");
        }
        if (newAuthor_book !== undefined) {
          if (typeof newPages !== "number") {
            res.status(400);
            throw new Error("Senha inválida, deve ser do tipo number");
          }
        }
      }
      // const [bookDB]: TBooks[] | undefined[] = await db("books").where({
      //   id,
      // });
      const booksDataBase = new BooksDataBase();

      const bookDB = await booksDataBase.findeBooksById(id);

      if (!bookDB) {
        res.status(404);
        throw new Error("'id' não encontrado");
      }

      const titulo2 = newTitulo || bookDB.titulo;
      const pages2 = newPages || bookDB.pages;
      const date2 = bookDB.created_at;
      const author_book2 = bookDB.author_book;

      const updateBook = new Books(id, titulo2, pages2, date2, author_book2);

      const updateBookDB: TBooks = {
        id: updateBook.getId(),
        titulo: updateBook.getTitulo(),
        pages: updateBook.getPages(),
        created_at: updateBook.getCreatedAt(),
        author_book: updateBook.getAuthor_book(),
      };

      // await db("books").update(updateBookDB).where({ id });
      await booksDataBase.editeBooks(id, updateBookDB);

      res.status(200).send("Atualização realizada com sucesso");
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
  deleteBooks = async (req: Request, res: Response) => {
    try {
      const id = req.params.id;

      // const [result]: TBooks[] = await db("books").where({ id });
      const booksDataBase = new BooksDataBase();
      const result = await booksDataBase.findeBooksById(id);

      if (result) {
        // await db("books").del().where({ id });
        await booksDataBase.deleteBooks(id);
      } else {
        res.status(404);
        throw new Error("Video por ID não encontrada. Verifique o ID");
      }
      res.status(200).send("Video apagado com sucesso");
    } catch (error) {
      console.log(error);
      if (res.statusCode === 200) {
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
