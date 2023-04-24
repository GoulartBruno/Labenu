export interface UserDB {
    id: string,
    name: string,
    email: string,
    password: string,
    created_at: string
}

// tipagem para criação (POST) sem created_at
export interface UserDBPost {
    id: string,
    name: string,
    email: string,
    password: string
}

export interface AccountDB {
    id: string,
    balance: number,
    owner_id: string,
    created_at: string
}

// tipagem para criação (POST) sem balance e created_at
export interface AccountDBPost {
    id: string,
    owner_id: string
}
