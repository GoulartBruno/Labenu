import z from "zod";

export interface CreateCourseInputDTO {
  id: string;
  name: string;
  lessons: number;
}

export interface CreateCourseoutputDTO {
  message: string;
  course: {
    id: string;
    name: string;
    lessons: number;
    createdAt: string;
  };
}

export const createCourseSchema = z
  .object({
    id: z
      .string({ invalid_type_error: "'name deve ser do tipo string'" })
      .min(1),
    name: z.string().min(2),
    lessons: z.number().positive().gt(0),
  })
  .transform((data) => data as CreateCourseInputDTO);
