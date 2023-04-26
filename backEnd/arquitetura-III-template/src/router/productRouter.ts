import express from "express";
import { ProductController } from "../controller/ProductController";
import { ProductBusiness } from "../business/ProductBusiness";
import { ProductDatabase } from "../database/ProductDatabase";

export const productRouter = express.Router();

const productController = new ProductController(
  new ProductBusiness(new ProductDatabase())
);

productRouter.get("/", productController.getProducts);
productRouter.post("/", productController.createProduct);
productRouter.put("/:id", productController.editProduct);
productRouter.delete("/:id", productController.deleteProduct);
