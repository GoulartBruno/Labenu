import { BaseDatabase } from "./BaseDatabase";
import { CourseDB } from "../types";

export class CoursesDatabase extends BaseDatabase {
  public static TABLE_COURSES = "courses";

  public async findCourses(q: string | undefined) {
    let coursesDB;

    if (q) {
      const result: CourseDB[] = await BaseDatabase.connection(
        CoursesDatabase.TABLE_COURSES
      ).where("name", "LIKE", `%${q}%`);
      coursesDB = result;
    } else {
      const result: CourseDB[] = await BaseDatabase.connection(
        CoursesDatabase.TABLE_COURSES
      );

      coursesDB = result;
    }
    return coursesDB;
  }
  public async findCourseById(id: string) {
    const [courseDB]: CourseDB[] | undefined = await BaseDatabase.connection(
      CoursesDatabase.TABLE_COURSES
    ).where({ id });
    return courseDB;
  }
  public async insertCourse(newCourse: CourseDB) {
    await BaseDatabase.connection(CoursesDatabase.TABLE_COURSES).insert(
      newCourse
    );
  }
  public async updateCourse(
    updateCourseDB: CourseDB,
    id: string
  ): Promise<void> {
    await BaseDatabase.connection(CoursesDatabase.TABLE_COURSES)
      .update(updateCourseDB)
      .where({ id });
  }
  public async deleteCourse(id: string) {
    await BaseDatabase.connection(CoursesDatabase.TABLE_COURSES)
      .del()
      .where({ id });
  }
}
