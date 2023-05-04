import { knex } from "knex";
import dotenv from "dotenv";

dotenv.config(); //implementando

export abstract class BaseDatabase {
  protected static connection = knex({
    client: "sqlite3",
    connection: {
      filename: process.env.DB_FILE_PATH as string,
      // filename: "./src/database/autenticacao.db",
    },
    useNullAsDefault: true,
    pool: {
      min: 0,
      max: 1,
      afterCreate: (conn: any, cb: any) => {
        conn.run("PRAGMA foreign_keys = ON", cb);
      },
    },
  });
}
