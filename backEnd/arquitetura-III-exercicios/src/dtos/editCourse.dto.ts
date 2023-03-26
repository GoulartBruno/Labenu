import z from "zod";

export interface EditeCourseInputDTO {
  idToEdit: string;
  id: string;
  name: string;
  lessons: number;
}

export interface EditCourseOutputDTO {
  message: string;
  course: {
    id: string;
    name: string;
    lessons: number;
    createdAt: string;
  };
}

export const EditCourseSchema = z
  .object({
    idToEdit: z.string(),
    id: z
      .string({ invalid_type_error: "'name deve ser do tipo string'" })
      .min(1)
      .optional(),
    name: z.string().min(2).optional(),
    lessons: z.number().positive().optional(),
  })
  .transform((data) => data as EditeCourseInputDTO);
