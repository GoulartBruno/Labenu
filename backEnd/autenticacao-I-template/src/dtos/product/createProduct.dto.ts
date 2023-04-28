import z from "zod";
import { ProductModel } from "../../models/Product";

export interface CreateProductInputDTO {
  // id: string,
  name: string;
  price: number;
}

export interface CreateProductOutputDTO {
  message: string;
  product: ProductModel;
}

export const CreateProductSchema = z
  .object({
    // id: z.string().min(1),
    name: z.string().min(2),
    price: z.number().gt(0),
  })
  .transform((data) => data as CreateProductInputDTO);
