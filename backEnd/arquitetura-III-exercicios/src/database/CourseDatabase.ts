import { CourseDB } from "../models/Course";
import { BaseDatabase } from "./BaseDatabase";

export class CourseDatabase extends BaseDatabase {
  public static TABLE_COURSES = "courses"

  public async findCourses(q: string | undefined) {
    if (q) {
      const result: CourseDB[] = await BaseDatabase
        .connection(CourseDatabase.TABLE_COURSES)
        .where("name", "LIKE", `%${q}%`)

      return result

    } else {
      const result: CourseDB[] = await BaseDatabase
        .connection(CourseDatabase.TABLE_COURSES)

      return result
    }
  }

  public async findCourseById(id: string) {
    const [courseDB]: CourseDB[] | undefined[] = await BaseDatabase
      .connection(CourseDatabase.TABLE_COURSES)
      .where({ id })

    return courseDB
  }

  public async insertCourse(newCourseDB: CourseDB) {
    await BaseDatabase
      .connection(CourseDatabase.TABLE_COURSES)
      .insert(newCourseDB)
  }

  public async updateCourse(idToEdit: string, courseDB: CourseDB) {
    await BaseDatabase
      .connection(CourseDatabase.TABLE_COURSES)
      .update(courseDB)
      .where({ id: idToEdit })
  }

  public async deleteCourseById(id: string) {
    await BaseDatabase
      .connection(CourseDatabase.TABLE_COURSES)
      .delete()
      .where({ id })
  }
}
