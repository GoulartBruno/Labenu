export const pratica2 = (n: number): boolean | null => {
    if (typeof n !== "number") {
        return null
    }

    if (!Number.isInteger(n)) {
        return null
    }

    return n % 2 == 0
}