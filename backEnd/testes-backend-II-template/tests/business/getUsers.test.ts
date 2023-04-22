import { UserBusiness } from "../../src/business/UserBusiness";
import { IdGeneratorMock } from "../mocks/IdGeneratorMock";
import { UserDatabaseMock } from "../mocks/UserDatabaseMock";
import { HashManagerMock } from "../mocks/HashManagerMock";
import { TokenManagerMock } from "../mocks/TokenManagerMock";
import { GetUsersSchema } from "../../src/dtos/user/getUsers.dto";
import { USER_ROLES } from "../../src/models/User";

describe("Testando o metodo getUser", () => {
  const userBusiness = new UserBusiness(
    new UserDatabaseMock(),
    new IdGeneratorMock(),
    new TokenManagerMock(),
    new HashManagerMock()
  );
  test("deve retornar uma lista de users", async () => {
    const input = GetUsersSchema.parse({
      token: "token-mock-astrodev",
    });
    const output = await userBusiness.getUsers(input);

    expect(output).toHaveLength(2);
    expect(output).toContainEqual({
      id: "id-mock-astrodev",
      name: "Astrodev",
      email: "astrodev@email.com",
      createdAt: expect.any(String),
      role: USER_ROLES.ADMIN,
    });
  });
});
