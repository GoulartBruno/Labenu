import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

// esse enum pode ser alocado para outro arquivo
export enum USER_ROLES {
  NORMAL = "NORMAL",
  ADMIN = "ADMIN",
}

// essa interface também pode ser alocada para outro arquivo
export interface TokenPayload {
  id: string;
  name: string;
  role: USER_ROLES;
}

export class TokenManager {
  // converte o objeto de dados (payload) para um token string
  public createToken = (payload: TokenPayload): string => {
    const token = jwt.sign(payload, process.env.JWT_KEY as string, {
      expiresIn: process.env.JWT_EXPIRES_IN,
    });

    return token;
  };

  // valida e converte o token string para um objeto de dados (payload)
  public getPayload = (token: string): TokenPayload | null => {
    try {
      const payload = jwt.verify(token, process.env.JWT_KEY as string);

      return payload as TokenPayload;

      // se a validação falhar, um erro é disparado pelo jsonwebtoken
      // nós pegamos o erro aqui e retornamos null para a Business saber que falhou
    } catch (error) {
      return null;
    }
  };
}
