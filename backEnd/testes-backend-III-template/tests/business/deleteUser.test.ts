import { ZodError } from "zod";
import { UserBusiness } from "../../src/business/UserBusiness";
import { DeleteUserSchema } from "../../src/dtos/user/deleteUser.dto";
import { HashManagerMock } from "../mocks/HashManagerMock";
import { IdGeneratorMock } from "../mocks/IdGeneratorMock";
import { TokenManagerMock } from "../mocks/TokenManagerMock";
import { UserDatabaseMock } from "../mocks/UserDatabaseMock";
import { BadRequestError } from "../../src/errors/BadRequestError";

describe("Testando deleteUser", () => {
  const userBusiness = new UserBusiness(
    new UserDatabaseMock(),
    new IdGeneratorMock(),
    new TokenManagerMock(),
    new HashManagerMock()
  );

  test("deve deletar user", async () => {
    const input = DeleteUserSchema.parse({
      idToDelete: "id-mock-fulano",
      token: "token-mock-fulano",
    });

    const output = await userBusiness.deleteUser(input);

    expect(output).toEqual({
      message: "Deleção realizada com sucesso",
    });
  });
  test("deve retornar um erro caso eu não passe o token", () => {
    expect.assertions(3);
    try {
      const input = DeleteUserSchema.parse({
        idToDelete: "id-mock.fulano",
        token: undefined,
      });
    } catch (error) {
      if (error instanceof ZodError) {
        expect(error.issues[0].message).toBe("Required");
        expect(error.issues[0].path[0]).toBe("token");
        expect(error.issues).toEqual([
          {
            code: "invalid_type",
            expected: "string",
            received: "undefined",
            path: ["token"],
            message: "Required",
          },
        ]);
      }
    }
  });
  test("deve retornar erro caso id seja de outro usuario", async () => {
    expect.assertions(2);
    try {
      const input = DeleteUserSchema.parse({
        idToDelete: "id-mock-astrodev",
        token: "token-mock-fulano",
      });
      const output = await userBusiness.deleteUser(input);
    } catch (error) {
      if (error instanceof BadRequestError) {
        expect(error.statusCode).toBe(400);
        expect(error.message).toBe("somente quem criou a conta pode deletá-la");
      }
    }
  });
});
