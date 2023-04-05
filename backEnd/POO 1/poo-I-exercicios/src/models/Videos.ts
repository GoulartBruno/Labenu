export class Videos {
  constructor(
    private id: string,
    private titulo: string,
    private duracao: number,
    private createdAt: string
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
  public getDuracao(): number {
    return this.duracao;
  }
  public setEmail(newDuracao: number): void {
    this.duracao = newDuracao;
  }
  public getCreatedAt(): string {
    return this.createdAt;
  }
  public setCreatedAt(newCreatedAt: string): void {
    this.createdAt = newCreatedAt;
  }
}

// instancias usuarios
// const video1 = new Videos("a001", "Viajando", 120, "17/04/2023");

// const video2 = new Videos("002", "Cozinhando", 320, "17/04/2023");
