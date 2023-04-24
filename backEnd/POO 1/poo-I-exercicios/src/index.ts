import express, { Request, Response } from "express";
import cors from "cors";
import { TVideos } from "./types";
// import { Videos } from "../models/Videos";
import { VideosDatabase } from "./database/VideoDatabase";
import { Videos } from "./models/Videos";

const app = express();

app.use(cors());
app.use(express.json());

app.listen(3003, () => {
  console.log(`Servidor rodando na porta ${3003}`);
});

app.get("/ping", async (req: Request, res: Response) => {
  try {
    res.status(200).send({ message: "Pong!" });
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
});

app.get("/videos", async (req: Request, res: Response) => {
  try {
    const q = req.query.q as string | undefined;

    //sempre repetir essa linha de codigo nos end points
    const videosDatabase = new VideosDatabase();

    const videosDB = await videosDatabase.findVideos(q);

    // if (q) {
    //   const result: TVideos[] = await db("videos").where(
    //     "titulo",
    //     "LIKE",
    //     `%${q}%`
    //   );
    //   videosDB = result;
    // } else {
    //   const result: TVideos[] = await db("videos");
    //   videosDB = result;
    // }

    const users: Videos[] = videosDB.map(
      (videoDB) =>
        new Videos(
          videoDB.id,
          videoDB.titulo,
          videoDB.duracao,
          videoDB.created_at
        )
    );
    res.status(200).send(videosDB);
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
});

app.post("/videos", async (req: Request, res: Response) => {
  try {
    const { id, titulo, duracao } = req.body;

    if (typeof id !== "string") {
      res.status(400);
      throw new Error("'id' deve ser string");
    }

    if (typeof titulo !== "string") {
      res.status(400);
      throw new Error("'titulo' deve ser string");
    }

    if (typeof duracao !== "number") {
      res.status(400);
      throw new Error("'duracao' deve ser number");
    }

    // const [userDBExists]: TVideos[] | undefined[] = await db("videos").where({
    //   id,
    // });

    const videosDatabase = new VideosDatabase();

    const userDBExists = await videosDatabase.findeVideosById(id);

    if (userDBExists) {
      res.status(400);
      throw new Error("'id' já existe");
    }

    const newUser = new Videos(id, titulo, duracao, new Date().toISOString());

    const newUserDB: TVideos = {
      id: newUser.getId(),
      titulo: newUser.getTitulo(),
      duracao: newUser.getDuracao(),
      created_at: newUser.getCreatedAt(),
    };

    // await db("videos").insert(newUserDB);
    await videosDatabase.createVideos(newUserDB);

    res.status(201).send(newUser);
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
});

app.put("/videos/:id", async (req: Request, res: Response) => {
  try {
    const id = req.params.id;

    const newTitulo = req.body.titulo as string | undefined;
    const newDuracao = req.body.duracao as number | undefined;

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
    if (newDuracao !== undefined) {
      if (typeof newDuracao !== "number") {
        res.status(400);
        throw new Error("Senha inválida, deve ser do tipo number");
      }
    }

    // const [videoDB]: TVideos[] | undefined[] = await db("videos").where({
    //   id,
    // });

    const videosDatabase = new VideosDatabase();

    const videoDB = await videosDatabase.findeVideosById(id);

    if (!videoDB) {
      res.status(404);
      throw new Error("'id' não encontrado");
    }

    const titulo2 = newTitulo || videoDB.titulo;
    const duracao2 = newDuracao || videoDB.duracao;
    const date2 = videoDB.created_at;

    const updateVideo = new Videos(
      id,
      titulo2,
      duracao2,
      //   new Date().toISOString()
      date2
    );
    const updateVideoDB: TVideos = {
      id: updateVideo.getId(),
      titulo: updateVideo.getTitulo(),
      duracao: updateVideo.getDuracao(),
      created_at: updateVideo.getCreatedAt(),
    };

    // await db("videos").update(updateVideoDB).where({ id });

    await videosDatabase.editeVideos(id, updateVideoDB);

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
});

app.delete("/videos/:id", async (req: Request, res: Response) => {
  try {
    const id = req.params.id;

    // const [result]: TVideos[] = await db("videos").where({ id: idToDelete });

    const videosDatabase = new VideosDatabase();

    const result = await videosDatabase.findeVideosById(id);

    if (result) {
      // await db("videos").del().where({ id });
      await videosDatabase.deleteVideos(id);
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
});
