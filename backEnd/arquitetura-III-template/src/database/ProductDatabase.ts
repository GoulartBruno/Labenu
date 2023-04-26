import { ProductDB } from "../models/Product";
import { BaseDatabase } from "./BaseDatabase";

export class ProductDatabase extends BaseDatabase {
  public static TABLE_PRODUCTS = "products"

  public async insertProduct(newProductDB: ProductDB) {
    await BaseDatabase
      .connection(ProductDatabase.TABLE_PRODUCTS)
      .insert(newProductDB)
  }

  public async findProducts(q: string | undefined) {
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

  public async findProductById(id: string) {
    const [productDB]: ProductDB[] | undefined[] = await BaseDatabase
      .connection(ProductDatabase.TABLE_PRODUCTS)
      .where({ id })

    return productDB
  }

  public async updateProduct(idToEdit: string, productDB: ProductDB) {
    await BaseDatabase
      .connection(ProductDatabase.TABLE_PRODUCTS)
      .update(productDB)
      .where({ id: idToEdit })
  }

  public async deleteProductById(idToDelete: string) {
    await BaseDatabase
      .connection(ProductDatabase.TABLE_PRODUCTS)
      .delete()
      .where({ id: idToDelete })
  }
}
