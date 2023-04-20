import express, { Request, Response } from "express";
import { BooksDataBase } from "../BooksDataBase";
import { Books } from "../models/Books";
import { TAuthor, TBooks } from "../../types";
import { AuthorsDataBase } from "../AuthorsDataBase";
import { Authors } from "../models/Authors";

export class AuthorsController {
  getAuthor = async (req: Request, res: Response) => {
    try {
      const q = req.query.q as string | undefined;

      // let authors;

      // if (q) {
      //   const result: TAuthor[] = await db("authors").where(
      //     "id",
      //     "LIKE",
      //     `%${q}%`
      //   );
      //   authors = result;
      // } else {
      //   const result: TAuthor[] = await db("authors");
      //   authors = result;
      // }
      const authorsDataBase = new AuthorsDataBase();

      const authors = await authorsDataBase.findAuthors(q);

      const authorsDB: Authors[] = authors.map(
        (author) => new Authors(author.id, author.name)
      );

      res.status(200).send(authors);
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
  createAuthor = async (req: Request, res: Response) => {
    try {
      const { id, name } = req.body;

      if (typeof id !== "string") {
        res.status(400);
        throw new Error("'id' deve ser string");
      }

      if (typeof name !== "string") {
        res.status(400);
        throw new Error("'name' deve ser uma string");
      }

      const authorsDataBase = new AuthorsDataBase();

      // const authors = await authorsDataBase.findAuthors(name);

      const authors = await authorsDataBase.findAuthorById(id);

      // const [authorDBExists]: TAuthor[] | undefined[] = await db("authors").where(
      //   {
      //     id,
      //   }
      // );

      if (authors) {
        res.status(400);
        throw new Error("'id' já existe");
      }

      const newAuthor = new Authors(id, name);

      const newAuthorsDB: TAuthor = {
        id: newAuthor.getId(),
        name: newAuthor.getName(),
      };

      await authorsDataBase.createAuthors(newAuthorsDB);

      res.status(201).send(newAuthor);
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
  editeAuthor = async (req: Request, res: Response) => {
    try {
      const id = req.params.id;
      const newName = req.body.name as string | undefined;

      if (typeof id !== "string") {
        res.status(400);
        throw new Error("'id' deve ser string");
      }
      if (newName !== undefined) {
        if (typeof newName !== "string") {
          res.status(400);
          throw new Error("Email inválido, deve ser do tipo string");
        }
      }

      // const [authorDB]: TAuthor[] | undefined[] = await db("authors").where({
      //   id,
      // });

      const authorsDataBase = new AuthorsDataBase();
      const authors = await authorsDataBase.findAuthorById(id);

      if (!authors) {
        res.status(404);
        throw new Error("'id' não encontrado");
      }

      const name2 = newName || authors.name;

      const updateAuthor = new Authors(id, name2);

      const updateAuthorDB: TAuthor = {
        id: updateAuthor.getId(),
        name: updateAuthor.getName(),
      };

      // await db("authors").update(updateAuthorDB).where({ id });
      await authorsDataBase.editeAuthors(id, updateAuthorDB);

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
  deleteAuthor = async (req: Request, res: Response) => {
    try {
      const id = req.params.id;
      const authorsDataBase = new AuthorsDataBase();

      // const [result]: TAuthor[] = await db("authors").where({ id });
      const result = await authorsDataBase.findAuthorById(id);

      if (result) {
        // await db("authors").del().where({ id });
        await authorsDataBase.deleteAuthors(id);
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
