import z from "zod";
// export interface EditProductInputDTO {
//   idToEdit: string;
//   id: string | undefined;
//   name: string | undefined;
//   price: number | undefined;
// }
// as duas formas funcionam, com o ? funciona igual como undefined

//pegamos o esqueleto no controller
export interface EditProductInputDTO {
  idToEdit: string;
  id?: string;
  name?: string;
  price?: number;
}

//pegamos o esqueleto no business
export interface EditProductOutputDTO {
  message: string;
  product: {
    id: string;
    name: string;
    price: number;
    createdAt: string;
  };
}
//validar o input usando o zod
export const EditProductSchema = z
  .object({
    idToEdit: z.string(),
    id: z
      .string({ invalid_type_error: "'name deve ser do tipo string'" })
      .min(1)
      .optional(), //minimo um caractere e pode ser opcional
    name: z.string().min(2).optional(), // pode ser opicional e no minimo 2 caracteres
    price: z.number().positive().gt(0).optional(), // e tem que ser um numero positivo e maior que zero posso receber ou nao opcional
  })
  .transform((data) => data as EditProductInputDTO);
