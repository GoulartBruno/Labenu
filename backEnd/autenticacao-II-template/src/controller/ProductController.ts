import { Request, Response } from "express";
import { ProductBusiness } from "../business/ProductBusiness";
import { BaseError } from "../errors/BaseError";
import { GetProductsSchema } from "../dtos/product/getProducts.dto";
import { ZodError } from "zod";
import { CreateProductSchema } from "../dtos/product/createProduct.dto";

export class ProductController {
  constructor(private productBusiness: ProductBusiness) {}

  public getProducts = async (req: Request, res: Response) => {
    try {
      const input = GetProductsSchema.parse({
        q: req.query.q,
        token: req.headers.authorization,
      });

      const output = await this.productBusiness.getProducts(input);

      res.status(200).send(output);
    } catch (error) {
      console.log(error);

      if (error instanceof ZodError) {
        res.status(400).send(error.issues);
      } else if (error instanceof BaseError) {
        res.status(error.statusCode).send(error.message);
      } else {
        res.status(500).send("Erro inesperado");
      }
    }
  };

  public createProduct = async (req: Request, res: Response) => {
    try {
      const input = CreateProductSchema.parse({
        // id: req.body.id,
        name: req.body.name,
        price: req.body.price,
        token: req.headers.authorization,
      });

      const output = await this.productBusiness.createProduct(input);

      res.status(201).send(output);
    } catch (error) {
      console.log(error);

      if (error instanceof ZodError) {
        res.status(400).send(error.issues);
      } else if (error instanceof BaseError) {
        res.status(error.statusCode).send(error.message);
      } else {
        res.status(500).send("Erro inesperado");
      }
    }
  };
}
