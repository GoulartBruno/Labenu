import { ZodError } from "zod";
import { UserBusiness } from "../../src/business/UserBusiness";
import { LoginSchema } from "../../src/dtos/user/login.dto";
import { HashManagerMock } from "../mocks/HashManagerMock";
import { IdGeneratorMock } from "../mocks/IdGeneratorMock";
import { TokenManagerMock } from "../mocks/TokenManagerMock";
import { UserDatabaseMock } from "../mocks/UserDatabaseMock";
import { NotFoundError } from "../../src/errors/NotFoundError";
import { BadRequestError } from "../../src/errors/BadRequestError";

describe("Testando login", () => {
  const userBusiness = new UserBusiness(
    new UserDatabaseMock(),
    new IdGeneratorMock(),
    new TokenManagerMock(),
    new HashManagerMock()
  );

  test("deve gerar um token ao logar", async () => {
    const input = LoginSchema.parse({
      email: "fulano@email.com",
      password: "fulano123",
    });

    const output = await userBusiness.login(input);

    expect(output).toEqual({
      message: "Login realizado com sucesso",
      token: "token-mock-fulano",
    });
  });

  test("deve retornar erro quando email não for encontrado", async () => {
    expect.assertions(2);

    try {
      const input = LoginSchema.parse({
        email: "fulano@email-errado.com",
        password: "fulano123",
      });

      const output = await userBusiness.login(input);
    } catch (error) {
      if (error instanceof NotFoundError) {
        expect(error.message).toBe("'email' não encontrado");

        expect(error.statusCode).toBe(404);
      }
    }
  });

  test("deve retornar erro se email não for string", () => {
    expect.assertions(3);

    try {
      const input = LoginSchema.parse({
        email: 20,
        password: "fulano123",
      });
    } catch (error) {
      if (error instanceof ZodError) {
        console.log(error.issues);
        expect(error.issues[0].message).toBe(
          "Expected string, received number"
        );
        expect(error.issues[0].path[0]).toBe("email");
        expect(error.issues).toEqual([
          {
            code: "invalid_type",
            expected: "string",
            received: "number",
            path: ["email"],
            message: "Expected string, received number",
          },
        ]);
      }
    }
  });

  test("deve retornar erro caso a senha esteja incorreta", async () => {
    expect.assertions(2);
    try {
      const input = LoginSchema.parse({
        email: "fulano@email.com",
        password: "fulano",
      });

      const output = await userBusiness.login(input);
    } catch (error) {
      if (error instanceof BadRequestError) {
        expect(error.statusCode).toBe(400);
        expect(error.message).toBe("'email' ou 'password' incorretos");
      }
    }
  });
});
