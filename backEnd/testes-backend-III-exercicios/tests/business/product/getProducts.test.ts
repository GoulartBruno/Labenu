import { ProductBusiness } from "../../../src/business/ProductBusiness";
import { GetProductsSchema } from "../../../src/dtos/product/getProducts.dto";
import { IdGeneratorMock } from "../../mocks/IdGeneratorMock";
import { ProductDatabaseMock } from "../../mocks/ProductDatabaseMock";
import { TokenManagerMock } from "../../mocks/TokenManagerMock";
import { NotFoundError } from "../../../src/errors/NotFoundError";
import { BadRequestError } from "../../../src/errors/BadRequestError";

describe("Testando getProducts", () => {
  const productBusiness = new ProductBusiness(
    new ProductDatabaseMock(),
    new IdGeneratorMock(),
    new TokenManagerMock()
  );
  test("manda uma mensagem se o token estiver errado", async () => {
    expect.assertions(2);

    try {
      const input = GetProductsSchema.parse({
        token: "token-mock-astrodev",
      });

      const output = await productBusiness.getProducts(input);
    } catch (error) {
      if (error instanceof BadRequestError) {
        expect(error.statusCode).toBe(400);
        expect(error.message).toBe("token inválido");
      }
    }
  });

  // test("se o token é invalaivo", async () => {
  //   const input = GetProductsSchema.parse({
  //     token: "token-mock-astrodev",
  //   });

  //   const output = await productBusiness.getProducts(input);
  //   expect(output).toHaveLength(2);
  //   expect(output).toContainEqual({
  //     id: "p001",
  //     name: "Mouse",
  //     price: 50,
  //     createdAt: expect.any(String),
  //   });
  // });
});
