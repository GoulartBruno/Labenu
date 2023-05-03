import express from "express";
import cors from "cors";
import { productRouter } from "./router/productRouter";
import { userRouter } from "./router/userRouter";
import dotenv from "dotenv";
dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.listen(Number(process.env.PORT) || 3003, () => {
  console.log(`Servidor rodando na porta ${3003}`);
});

app.use("/users", userRouter);
app.use("/products", productRouter);
