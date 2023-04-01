import { CoursesDatabase } from "../database/CoursesDatabase";
import { Course } from "../models/Course";
import { CourseDB } from "../types";
import { BadRequestError } from "../errors/BadRequestError";
import { NotFoundError } from "../errors/NotFoundError";

export class CoursesBusiness {
  public getCourses = async (q: string | undefined) => {
    const coursesDatabase = new CoursesDatabase();
    const coursesDB = await coursesDatabase.findCourses(q);

    const courses: Course[] = coursesDB.map(
      (coursesDB) => new Course(coursesDB.id, coursesDB.name, coursesDB.lessons)
    );
    return courses;
  };
  public insertCourse = async (input: any) => {
    const { id, name, lessons } = input;

    if (typeof id !== "string") {
      throw new BadRequestError("'id' deve ser string ");
    }
    if (typeof name !== "string") {
      throw new BadRequestError("'name' deve ser string ");
    }
    if (typeof lessons !== "number") {
      throw new BadRequestError("'lessons' deve ser string ");
    }

    const coursesDatabase = new CoursesDatabase();
    const courseDBExists = await coursesDatabase.findCourseById(id);
    if (courseDBExists) {
      throw new BadRequestError("'id' já existe ");
    }
    const newCourse = new Course(id, name, lessons);

    const newCourseDB: CourseDB = {
      id: newCourse.getId(),
      name: newCourse.getName(),
      lessons: newCourse.getLessons(),
    };
    await coursesDatabase.insertCourse(newCourseDB);
    const output = {
      message: "conta cadastrada com sucesso",
      course: newCourse,
    };
    return output;
  };
  public updateCourse = async (input: any) => {
    const { id, name, lessons } = input;

    if (typeof id !== "string") {
      throw new BadRequestError("'id' deve ser string ");
    }
    if (typeof name !== "string") {
      throw new BadRequestError("'name' deve ser string ");
    }
    if (typeof lessons !== "number") {
      throw new BadRequestError("'lessons' deve ser number ");
    }

    const courseDatabase = new CoursesDatabase();
    const courseDB = await courseDatabase.findCourseById(id);

    if (!courseDB) {
      throw new NotFoundError("'id' não encontrado");
    }
    const newId = id || courseDB.id;
    const newName = name || courseDB.name;
    const newLessons = lessons || courseDB.lessons;

    const courseUpdate = new Course(newId, newName, newLessons);

    const courseUpdateDB: CourseDB = {
      id: courseUpdate.getId(),
      name: courseUpdate.getName(),
      lessons: courseUpdate.getLessons(),
    };
    await courseDatabase.updateCourse(courseUpdateDB, id);

    const output = {
      message: "Conta editada com sucesso",
      course: courseUpdateDB,
    };

    return output;
  };
  public deleteCourse = async (input: any): Promise<void> => {
    const { id } = input;
    const courseDatabase = new CoursesDatabase();
    const courseDB = await courseDatabase.findCourseById(id);

    if (courseDB) {
      await courseDatabase.deleteCourse(id);
    } else {
      throw new NotFoundError("'id' não encontrado");
    }
  };
}
