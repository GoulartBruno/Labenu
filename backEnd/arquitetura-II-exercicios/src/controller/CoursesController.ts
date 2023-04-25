import { Request, Response } from "express";
import { CoursesBusiness } from "../business/CoursesBusiness";
import { BaseError } from "../errors/BaseError";

export class CoursesController {
  public getCourses = async (req: Request, res: Response) => {
    try {
      const q = req.query.q as string | undefined;
      const coursesBusiness = new CoursesBusiness();
      const output = await coursesBusiness.getCourses(q);
      res.status(200).send(output);
    } catch (error) {
      console.log(error);

      if (res.statusCode === 200) {
        res.status(500);
      }

      if (error instanceof BaseError) {
        res.send(error.message);
      } else {
        res.send("Erro inesperado");
      }
    }
  };
  public insertCourse = async (req: Request, res: Response) => {
    try {
      const input = {
        id: req.body.id,
        name: req.body.name,
        lessons: req.body.lessons,
      };
      const coursesBusiness = new CoursesBusiness();
      const output = await coursesBusiness.insertCourse(input);

      res.status(201).send(output);
    } catch (error) {
      console.log(error);

      if (res.statusCode === 200) {
        res.status(500);
      }

      if (error instanceof BaseError) {
        res.send(error.message);
      } else {
        res.send("Erro inesperado");
      }
    }
  };
  public updateCourse = async (req: Request, res: Response) => {
    try {
      const input = {
        id: req.params.id,
        name: req.body.name,
        lessons: req.body.lessons,
      };
      const coursesBusiness = new CoursesBusiness();
      const output = await coursesBusiness.updateCourse(input);
      res.status(200).send(output);
    } catch (error) {
      console.log(error);

      if (res.statusCode === 200) {
        res.status(500);
      }

      if (error instanceof BaseError) {
        res.send(error.message);
      } else {
        res.send("Erro inesperado");
      }
    }
  };
  public deleteCourse = async (req: Request, res: Response) => {
    try {
      const input = {
        id: req.params.id,
      };
      const coursesBusiness = new CoursesBusiness();
      const output = await coursesBusiness.deleteCourse(input);

      res.status(200).send("Curso deletado com sucesso");
    } catch (error) {
      console.log(error);

      if (res.statusCode === 200) {
        res.status(500);
      }

      if (error instanceof BaseError) {
        res.send(error.message);
      } else {
        res.send("Erro inesperado");
      }
    }
  };
}
