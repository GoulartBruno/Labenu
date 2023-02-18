import { ProductDatabase } from "../database/ProductDatabase";
import {
  CreateProductInputDTO,
  CreateProductOutputDTO,
} from "../dtos/createProduct.dto";
import {
  EditProductInputDTO,
  EditProductOutputDTO,
} from "../dtos/editProduct.dto";
import { BadRequestError } from "../errors/BadRequestError";
import { NotFoundError } from "../errors/NotFoundError";
import { Product, ProductDB } from "../models/Product";

export class ProductBusiness {
  constructor(private productDatabase: ProductDatabase) {}
  public createProduct = async (
    input: CreateProductInputDTO
  ): Promise<CreateProductOutputDTO> => {
    const { id, name, price } = input;

    // if (typeof id !== "string") {
    //   throw new BadRequestError("'id' deve ser string");
    // }

    // if (typeof name !== "string") {
    //   throw new BadRequestError("'name' deve ser string");
    // }

    // if (typeof price !== "number") {
    //   throw new BadRequestError("'price' deve ser number");
    // }

    // if (name.length < 2) {
    //   throw new BadRequestError("'name' deve possuir pelo menos 2 caracteres");
    // }

    // if (price <= 0) {
    //   throw new BadRequestError("'price' não pode ser zero ou negativo");
    // }

    // const productDatabase = new ProductDatabase();
    const productDBExists = await this.productDatabase.findProductById(id);

    if (productDBExists) {
      throw new BadRequestError("'id' já existe");
    }

    const newProduct = new Product(id, name, price, new Date().toISOString());

    const newProductDB: ProductDB = {
      id: newProduct.getId(),
      name: newProduct.getName(),
      price: newProduct.getPrice(),
      created_at: newProduct.getCreatedAt(),
    };

    await this.productDatabase.insertProduct(newProductDB);

    const output = {
      message: "Produto registrado com sucesso",
      product: {
        id: newProduct.getId(),
        name: newProduct.getName(),
        price: newProduct.getPrice(),
        createdAt: newProduct.getCreatedAt(),
      },
    };

    return output;
  };

  public getProducts = async (input: any) => {
    const { q } = input;

    // const productDatabase = new ProductDatabase();
    const productsDB = await this.productDatabase.findProducts(q);

    const products: Product[] = productsDB.map(
      (productDB) =>
        new Product(
          productDB.id,
          productDB.name,
          productDB.price,
          productDB.created_at
        )
    );

    const output = products.map((product) => ({
      id: product.getId(),
      name: product.getName(),
      price: product.getPrice(),
      created_at: product.getCreatedAt(),
    }));

    return output;
  };

  public editProduct = async (
    input: EditProductInputDTO
  ): Promise<EditProductOutputDTO> => {
    const { idToEdit, id, name, price } = input;
    // if são as mesmas verificações ja feitas no zod
    // if (id !== undefined) {
    //   if (typeof id !== "string") {
    //     throw new BadRequestError("'id' deve ser string");
    //   }
    // }

    // if (name !== undefined) {
    //   if (typeof name !== "string") {
    //     throw new BadRequestError("'name' deve ser string");
    //   }

    //   if (name.length < 2) {
    //     throw new BadRequestError(
    //       "'name' deve possuir pelo menos 2 caracteres"
    //     );
    //   }
    // }
    // if (price !== undefined) {
    //   if (typeof price !== "number") {
    //     throw new BadRequestError("'price' deve ser number");
    //   }

    //   if (price <= 0) {
    //     throw new BadRequestError("'price' não pode ser zero ou negativo");
    //   }
    // }

    // const productDatabase = new ProductDatabase();
    const productToEditDB = await this.productDatabase.findProductById(
      idToEdit
    );

    if (!productToEditDB) {
      throw new NotFoundError("'id' para editar não existe");
    }

    const product = new Product(
      productToEditDB.id,
      productToEditDB.name,
      productToEditDB.price,
      productToEditDB.created_at
    );

    id && product.setId(id);
    name && product.setName(name);
    price && product.setPrice(price);

    const updatedProductDB: ProductDB = {
      id: product.getId(),
      name: product.getName(),
      price: product.getPrice(),
      created_at: product.getCreatedAt(),
    };

    await this.productDatabase.updateProduct(idToEdit, updatedProductDB);

    const output: EditProductOutputDTO = {
      message: "Produto editado com sucesso",
      product: {
        id: product.getId(),
        name: product.getName(),
        price: product.getPrice(),
        createdAt: product.getCreatedAt(),
      },
    };

    return output;
  };

  public deleteProduct = async (input: any) => {
    const { idToDelete } = input;

    // const productDatabase = new ProductDatabase();
    const productToDeleteDB = await this.productDatabase.findProductById(
      idToDelete
    );

    if (!productToDeleteDB) {
      throw new NotFoundError("'id' para deletar não existe");
    }

    const product = new Product(
      productToDeleteDB.id,
      productToDeleteDB.name,
      productToDeleteDB.price,
      productToDeleteDB.created_at
    );

    await this.productDatabase.deleteProductById(productToDeleteDB.id);

    const output = {
      message: "Produto deletado com sucesso",
      product: {
        id: product.getId(),
        name: product.getName(),
        price: product.getPrice(),
        createdAt: product.getCreatedAt(),
      },
    };

    return output;
  };
}
