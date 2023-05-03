export interface ProductDB {
  id: string,
  name: string,
  price: number,
  created_at: string
}

// é o modelo de Product que o front receberá (createdAt camelCase)
export interface ProductModel {
  id: string,
  name: string,
  price: number,
  createdAt: string
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

    // para facilitar nossa vida, temos o método que gera um ProductDB
    public toDBModel(): ProductDB {
        return {
            id: this.id,
            name: this.name,
            price: this.price,
            created_at: this.createdAt
        }
    }

    // para facilitar nossa vida, temos o método que gera um ProductModel
    public toBusinessModel(): ProductModel {
        return {
            id: this.id,
            name: this.name,
            price: this.price,
            createdAt: this.createdAt
        }
    }
}