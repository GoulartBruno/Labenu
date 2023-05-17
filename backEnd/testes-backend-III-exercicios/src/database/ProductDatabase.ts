import { ProductDB } from "../models/Product";
import { BaseDatabase } from "./BaseDatabase";

export class ProductDatabase extends BaseDatabase {
  public static TABLE_PRODUCTS = "products"

  public async findProducts(
    q: string | undefined
  ): Promise<ProductDB[]> {
    if (q) {
      const result: ProductDB[] = await BaseDatabase
        .connection(ProductDatabase.TABLE_PRODUCTS)
        .where("name", "LIKE", `%${q}%`)

      return result

    } else {
      const result: ProductDB[] = await BaseDatabase
        .connection(ProductDatabase.TABLE_PRODUCTS)

      return result
    }
  }

  public async findProductById(
    id: string
  ): Promise<ProductDB | undefined> {
    const [productDB]: ProductDB[] | undefined[] = await BaseDatabase
      .connection(ProductDatabase.TABLE_PRODUCTS)
      .where({ id })

    return productDB
  }

  public async insertProduct(
    newProductDB: ProductDB
  ): Promise<void> {
    await BaseDatabase
      .connection(ProductDatabase.TABLE_PRODUCTS)
      .insert(newProductDB)
  }
}
