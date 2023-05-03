import express from "express";
import { ProductBusiness } from "../business/ProductBusiness";
import { ProductController } from "../controller/ProductController";
import { ProductDatabase } from "../database/ProductDatabase";
import { IdGenerator } from "../services/idGeneretor";

export const productRouter = express.Router();

const productController = new ProductController(
  new ProductBusiness(new ProductDatabase(), new IdGenerator())
);

productRouter.get("/", productController.getProducts);
productRouter.post("/", productController.createProduct);
