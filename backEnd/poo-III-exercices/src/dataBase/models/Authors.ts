export class Authors {
  constructor(private id: string, private name: string) {}
  public getId(): string {
    return this.id;
  }
  public setId(newId: string): void {
    this.id = newId;
  }
  public getName(): string {
    return this.name;
  }
  public setName(newName: string): void {
    this.name = newName;
  }
}
