import express from "express";
import { CoursesController } from "../controller/CoursesController";

export const courseRouter = express.Router();

const coursesController = new CoursesController();

courseRouter.get("/", coursesController.getCourses);
courseRouter.post("/", coursesController.insertCourse);
courseRouter.put("/:id", coursesController.updateCourse);
courseRouter.delete("/:id", coursesController.deleteCourse);
