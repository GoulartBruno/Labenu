import { ProductDB } from "../../src/models/Product";
import { BaseDatabase } from "../../src/database/BaseDatabase";

const productsMock: ProductDB[] = [
  {
    id: 'p001',
    name: 'Mouse',
    price: 50,
    created_at: new Date().toISOString()
  },
  {
    id: 'p002',
    name: 'Teclado',
    price: 80,
    created_at: new Date().toISOString()
  }
]

export class ProductDatabaseMock extends BaseDatabase {
  public static TABLE_PRODUCTS = "products"

  public async findProducts(
    q: string | undefined
  ): Promise<ProductDB[]> {
    if (q) {
      return productsMock
        .filter((product) => product.name.toLocaleLowerCase()
          .includes(q.toLocaleLowerCase()))

    } else {
      return productsMock
    }
  }

  public async findProductById(
    id: string
  ): Promise<ProductDB | undefined> {
    return productsMock.filter(product => product.id === id)[0]
  }

  public async insertProduct(
    newProductDB: ProductDB
  ): Promise<void> {

  }
}
