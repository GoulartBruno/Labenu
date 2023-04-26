import z from "zod";

export interface DeleteProductInputDTO {
  idToDelete: string;
}

export interface DeleteProductOutputDTO {
  message: string;
  course: {
    id: string;
    name: string;
    lessons: number;
    createdAt: string;
  };
}

export const DeleteCourseSchema = z.object({
  idToDelete: z.string(),
});
