import { UserBusiness } from "../../src/business/UserBusiness"
import { GetUserByIdSchema } from "../../src/dtos/user/getUserById.dto"
import { USER_ROLES } from "../../src/models/User"
import { HashManagerMock } from "../mocks/HashManagerMock"
import { IdGeneratorMock } from "../mocks/IdGeneratorMock"
import { TokenManagerMock } from "../mocks/TokenManagerMock"
import { UserDatabaseMock } from "../mocks/UserDatabaseMock"

describe("Testando getUserById", () => {
  const userBusiness = new UserBusiness(
    new UserDatabaseMock(),
    new IdGeneratorMock(),
    new TokenManagerMock(),
    new HashManagerMock()
  )

  test("deve buscar user", async () => {
    const input = GetUserByIdSchema.parse({
      id: "id-mock-fulano",
      token: "token-mock-fulano"
    })

    const output = await userBusiness.getUserById(input)

    expect(output).toEqual({
      user: {
        id: "id-mock-fulano",
        name: "Fulano",
        email: "fulano@email.com",
        createdAt: expect.any(String),
        role: USER_ROLES.NORMAL
      },
    })
  })
})