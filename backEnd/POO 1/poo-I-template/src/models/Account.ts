export class Accounts {
  constructor(
    private id: string,
    private balance: number,
    private owner_id: string,
    private createdAt: string
  ) {}
  // outros métodos
  public getId(): string {
    return this.id;
  }
  public setId(newId: string): void {
    this.id = newId;
  }
  public getBalance(): number {
    return this.balance;
  }
  public setBalance(newBalance: number): void {
    this.balance = newBalance;
  }
  public getOwner_id(): string {
    return this.owner_id;
  }
  public setEmail(newOwner_id: string): void {
    this.owner_id = newOwner_id;
  }
  public getCreatedAt(): string {
    return this.createdAt;
  }
  public setCreatedAt(newCreatedAt: string): void {
    this.createdAt = newCreatedAt;
  }
}

// instancias usuarios
const account1 = new Accounts("a001", 1000, "001", "17/04/2023");

const account2 = new Accounts("002", 2000, "002", "17/04/2023");
