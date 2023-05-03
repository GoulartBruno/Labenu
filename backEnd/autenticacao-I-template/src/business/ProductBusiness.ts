import { ProductDatabase } from "../database/ProductDatabase";
import {
  CreateProductInputDTO,
  CreateProductOutputDTO,
} from "../dtos/product/createProduct.dto";
import {
  GetProductsInputDTO,
  GetProductsOutputDTO,
} from "../dtos/product/getProducts.dto";
import { BadRequestError } from "../errors/BadRequestError";
import { Product } from "../models/Product";
import { TokenManager } from "../services/TokenManager";
import { IdGenerator } from "../services/idGeneretor";

export class ProductBusiness {
  constructor(
    private productDatabase: ProductDatabase,
    private idGeneretor: IdGenerator
  ) {}

  public getProducts = async (
    input: GetProductsInputDTO
  ): Promise<GetProductsOutputDTO> => {
    const { q } = input;

    const productsDB = await this.productDatabase.findProducts(q);

    const products = productsDB.map((productDB) => {
      const product = new Product(
        productDB.id,
        productDB.name,
        productDB.price,
        productDB.created_at
      );

      return product.toBusinessModel();
    });

    const output: GetProductsOutputDTO = products;

    return output;
  };

  public createProduct = async (
    input: CreateProductInputDTO
  ): Promise<CreateProductOutputDTO> => {
    const { name, price } = input;

    const id = this.idGeneretor.generate();

    const productDBExists = await this.productDatabase.findProductById(id);

    if (productDBExists) {
      throw new BadRequestError("'id' já existe");
    }

    const newProduct = new Product(id, name, price, new Date().toISOString());

    const newProductDB = newProduct.toDBModel();
    await this.productDatabase.insertProduct(newProductDB);

    const output: CreateProductOutputDTO = {
      message: "Producto cadastrado com sucesso",
      product: newProduct.toBusinessModel(),
    };

    return output;
  };
}
