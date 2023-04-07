export class Books {
  constructor(
    private id: string,
    private titulo: string,
    private pages: number,
    private createdAt: string,
    private author_book: string
  ) {}
  // outros métodos
  public getId(): string {
    return this.id;
  }
  public setId(newId: string): void {
    this.id = newId;
  }
  public getTitulo(): string {
    return this.titulo;
  }
  public setTitulo(newTitulo: string): void {
    this.titulo = newTitulo;
  }
  public getPages(): number {
    return this.pages;
  }
  public setPages(newPages: number): void {
    this.pages = newPages;
  }
  public getCreatedAt(): string {
    return this.createdAt;
  }
  public setCreatedAt(newCreatedAt: string): void {
    this.createdAt = newCreatedAt;
  }
  public getAuthor_book(): string {
    return this.author_book;
  }
  public setAuthor_book(newAuthor_book: string): void {
    this.author_book = newAuthor_book;
  }
}
