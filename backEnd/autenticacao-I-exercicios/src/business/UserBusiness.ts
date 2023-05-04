import { UserDatabase } from "../database/UserDatabase";
import { GetUsersInputDTO, GetUsersOutputDTO } from "../dtos/getUsers.dto";
import { LoginInputDTO, LoginOutputDTO } from "../dtos/login.dto";
import { SignupInputDTO, SignupOutputDTO } from "../dtos/signup.dto";
import { BadRequestError } from "../errors/BadRequestError";
import { NotFoundError } from "../errors/NotFoundError";
import { USER_ROLES, User } from "../models/User";
import { TokenManager, TokenPayload } from "../services/TokenManager";
import { IdGenerator } from "../services/idGeneretor";

export class UserBusiness {
  constructor(
    private userDatabase: UserDatabase,
    private idGeneretor: IdGenerator,
    private tokenManager: TokenManager
  ) {}

  public getUsers = async (
    input: GetUsersInputDTO
  ): Promise<GetUsersOutputDTO> => {
    const { q } = input;

    const usersDB = await this.userDatabase.findUsers(q);

    const users = usersDB.map((userDB) => {
      const user = new User(
        userDB.id,
        userDB.name,
        userDB.email,
        userDB.password,
        userDB.role,
        userDB.created_at
      );

      return user.toBusinessModel();
    });

    const output: GetUsersOutputDTO = users;

    return output;
  };

  public signup = async (input: SignupInputDTO): Promise<SignupOutputDTO> => {
    const { name, email, password } = input;

    const id = this.idGeneretor.generate();

    const userDBExists = await this.userDatabase.findUserById(id);

    if (userDBExists) {
      throw new BadRequestError("'id' já existe");
    }

    const newUser = new User(
      id,
      name,
      email,
      password,
      USER_ROLES.NORMAL, // só é possível criar users com contas normais
      new Date().toISOString()
    );

    const newUserDB = newUser.toDBModel();
    await this.userDatabase.insertUser(newUserDB);

    const tokenPayload: TokenPayload = {
      id: newUser.getId(),
      name: newUser.getName(),
      role: newUser.getRole(),
    };

    const token = this.tokenManager.createToken(tokenPayload);

    const output: SignupOutputDTO = {
      message: "Cadastro realizado com sucesso",
      token: token,
    };

    return output;
  };

  public login = async (input: LoginInputDTO): Promise<LoginOutputDTO> => {
    const { email, password } = input;

    const userDB = await this.userDatabase.findUserByEmail(email);

    if (!userDB) {
      throw new NotFoundError("'email' não encontrado");
    }

    if (password !== userDB.password) {
      throw new BadRequestError("'email' ou 'password' incorretos");
    }

    const token = this.tokenManager.createToken(userDB);

    const output: LoginOutputDTO = {
      message: "Login realizado com sucesso",
      token: token,
    };

    return output;
  };
}
