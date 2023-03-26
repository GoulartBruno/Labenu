export interface CourseDB {
  id: string,
  name: string,
  lessons: number,
  created_at: string
}

export class Course {
  constructor(
    private id: string,
    private name: string,
    private lessons: number,
    private createdAt: string
  ) { }

  public getId(): string {
    return this.id
  }

  public setId(value: string): void {
    this.id = value
  }

  public getName(): string {
    return this.name
  }

  public getCreatedAt(): string {
    return this.createdAt
  }

  public setName(value: string): void {
    this.name = value
  }

  public getLessons(): number {
    return this.lessons
  }

  public setLessons(value: number): void {
    this.lessons = value
  }

  public setCreatedAt(value: string): void {
    this.createdAt = value
  }
}