export interface ProductDB {
  id: string,
  name: string,
  price: number,
  created_at: string
}

export class Product {    
    constructor(
        private id: string,
        private name: string,
        private price: number,
        private createdAt: string
    ) {}

    public getId(): string {
        return this.id
    }
    
    public setId(value: string): void {
        this.id = value
    }

    public getName(): string {
        return this.name
    }

    public setName(value: string): void {
        this.name = value
    }

    public getPrice(): number {
        return this.price
    }

    public setPrice(value: number): void {
        this.price = value
    }

    public getCreatedAt(): string {
        return this.createdAt
    }

    public setCreatedAt(value: string): void {
        this.createdAt = value
    }
}