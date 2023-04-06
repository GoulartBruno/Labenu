import z from "zod"
import { UserModel } from "../../models/User"

export interface GetUserByIdInputDTO {
  id: string,
  token: string
}

export type GetUserByIdOutputDTO = {
  user: UserModel
}

export const GetUserByIdSchema = z.object({
  id: z.string().min(1),
  token: z.string().min(1)
}).transform(data => data as GetUserByIdInputDTO)