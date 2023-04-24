export class Account {
    constructor(
        private id: string,
        private balance: number,
        private ownerId: string,
        private createdAt: string
    ) {}

    public getId(): string {
        return this.id
    }

    public setId(value: string): void {
        this.id = value
    }

    public getBalance(): number {
        return this.balance
    }

    public setBalance(value: number): void {
        this.balance = value
    }

    public getOwnerId(): string {
        return this.ownerId
    }

    public setOwnerId(value: string): void {
        this.ownerId = value
    }

    public getCreatedAt(): string {
        return this.createdAt
    }

    public setCreatedAt(value: string): void {
        this.createdAt = value
    }
}