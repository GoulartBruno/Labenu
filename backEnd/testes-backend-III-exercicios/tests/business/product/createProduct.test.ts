import { ZodError } from "zod"
import { ProductBusiness } from "../../../src/business/ProductBusiness"
import { CreateProductSchema } from "../../../src/dtos/product/createProduct.dto"
import { IdGeneratorMock } from "../../mocks/IdGeneratorMock"
import { ProductDatabaseMock } from "../../mocks/ProductDatabaseMock"
import { TokenManagerMock } from "../../mocks/TokenManagerMock"
import { BadRequestError } from "../../../src/errors/BadRequestError"


describe("Testando createProduct", () => {
  const productBusiness = new ProductBusiness(
    new ProductDatabaseMock(),
    new IdGeneratorMock(),
    new TokenManagerMock()
  )

  test("deve gerar mensagem e objeto do produto cadastrado", async () => {
    const input = CreateProductSchema.parse({
      name: "Novo Produto",
      price: 170.90,
      token: "token-mock-astrodev"
    })

    const output = await productBusiness.createProduct(input)
    expect(output).toEqual({
      message: 'Producto cadastrado com sucesso',
      product: {
        id: 'id-mock',
        name: 'Novo Produto',
        price: 170.9,
        createdAt: expect.any(String)
      }
    })
  })

  test("Deve disparar erro se o schema do DTO para NAME não for válido", async () => {
    expect.assertions(1)
    try {
      const input = CreateProductSchema.parse({
        name: "",
        price: 170.90,
        token: "token-mock-astrodev"
      })
    } catch (error) {
      if (error instanceof ZodError) {
        expect(error.issues[0].message).toBe("String must contain at least 2 character(s)")
      }
    }
  })

  test("Deve disparar erro se o schema do DTO para PRICE como STRING não for válido", async () => {
    expect.assertions(1)
    try {
      const input = CreateProductSchema.parse({
        name: "Novo Produto",
        price: "string",
        token: "token-mock-astrodev"
      })
    } catch (error) {
      if (error instanceof ZodError) {
        expect(error.issues[0].message).toBe("Expected number, received string")
      }
    }
  })

  //VALIDAÇÃO do DTO para PRICE <= 0
  test("Deve disparar erro se o schema do DTO para PRICE como STRING não for válido", async () => {
    expect.assertions(1)
    try {
      const input = CreateProductSchema.parse({
        name: "Novo Produto",
        price: -1,
        token: "token-mock-astrodev"
      })
    } catch (error) {
      if (error instanceof ZodError) {
        expect(error.issues[0].message).toBe("Number must be greater than 0")
      }
    }
  })

  test("Deve disparar erro se o schema do DTO para TOKEN como STRING não for válido, < 1 char", async () => {
    expect.assertions(1)
    try {
      const input = CreateProductSchema.parse({
        name: "Novo Produto",
        price: 170.90,
        token: ""
      })
    } catch (error) {
      if (error instanceof ZodError) {
        expect(error.issues[0].message).toBe("String must contain at least 1 character(s)")
      }
    }
  })

  test("Deve disparar erro se token for inválido, token não corresponde com usuário cadastrado", async () => {
    expect.assertions(2)
    try {
      const input = CreateProductSchema.parse({
        name: "Novo Produto",
        price: 170.90,
        token:"token-meme"
      })

      const output = await productBusiness.createProduct(input)
    } catch (error) {
      if (error instanceof BadRequestError) {
        expect(error.statusCode).toBe(400)
        expect(error.message).toBe("token inválido")
      }
    }
  })

  test("Deve disparar erro se token !== ADMIN", async () => {
    expect.assertions(2)
    try {
      const input = CreateProductSchema.parse({
        name: "Novo Produto",
        price: 170.90,
        token:"token-mock-fulano"
      })

      const output = await productBusiness.createProduct(input)
    } catch (error) {
      if (error instanceof BadRequestError) {
        expect(error.statusCode).toBe(400)
        expect(error.message).toBe("somente admins podem cadastrar novo produto")
      }
    }
  })

  //TESTE ABAIXO VALIDANDO A REGRA DE NEGÓCIO DE PRICE <= 0
  // test("Deve disparar erro se price <= 0", async () => {
  //   expect.assertions(2)
  //   try {
  //     const input = {
  //       name: "Novo Produto",
  //       price: -1,
  //       token:"token-mock-astrodev"
  //     }

  //     const output = await productBusiness.createProduct(input)
  //   } catch (error) {
  //     if (error instanceof BadRequestError) {
  //       expect(error.statusCode).toBe(400)
  //       expect(error.message).toBe("preço não pode ser 0 ou negativo")
  //     }
  //   }
  // })
})