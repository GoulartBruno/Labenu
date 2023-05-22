import { ProductDatabase } from "../database/ProductDatabase"
import { CreateProductInputDTO, CreateProductOutputDTO } from "../dtos/product/createProduct.dto"
import { GetProductsInputDTO, GetProductsOutputDTO } from "../dtos/product/getProducts.dto"
import { BadRequestError } from "../errors/BadRequestError"
import { Product } from "../models/Product"
import { USER_ROLES } from "../models/User"
import { IdGenerator } from "../services/IdGenerator"
import { TokenManager } from "../services/TokenManager"

export class ProductBusiness {
  constructor(
    private productDatabase: ProductDatabase,
    private idGenerator: IdGenerator,
    private tokenManager: TokenManager
  ) { }

  public getProducts = async (
    input: GetProductsInputDTO
  ): Promise<GetProductsOutputDTO> => {
    const { q, token } = input

    const payload = this.tokenManager.getPayload(token)

    if (payload === null) {
        throw new BadRequestError("token inválido")
    } 

    const productsDB = await this.productDatabase.findProducts(q)

    const products = productsDB.map((productDB) => {
      const product = new Product(
        productDB.id,
        productDB.name,
        productDB.price,
        productDB.created_at
      )

      return product.toBusinessModel()
    })

    const output: GetProductsOutputDTO = products

    return output
  }

  public createProduct = async (
    input: CreateProductInputDTO
  ): Promise<CreateProductOutputDTO> => {
    const { name, price, token } = input

    const payload = this.tokenManager.getPayload(token)

    if (payload === null) {
        throw new BadRequestError("token inválido")
    } 

    if (payload.role !== USER_ROLES.ADMIN) {
      throw new BadRequestError("somente admins podem acessar")
    }

    if (price <= 0) {
      throw new BadRequestError("preço não pode ser 0 ou negativo")
    }

    const id = this.idGenerator.generate()

    const newProduct = new Product(
      id,
      name,
      price,
      new Date().toISOString()
    )

    const newProductDB = newProduct.toDBModel()
    await this.productDatabase.insertProduct(newProductDB)

    const output: CreateProductOutputDTO = {
      message: "Producto cadastrado com sucesso",
      product: newProduct.toBusinessModel()
    }

    return output
  }
}