export type TUserDB = {
    id: string,
    name: string,
    email: string,
    password: string,
    created_at: string
}

// tipagem para criação (POST) sem created_at
export type TUserDBPost = {
    id: string,
    name: string,
    email: string,
    password: string
}

export type TAccountDB = {
    id: string,
    balance: number,
    owner_id: string,
    created_at: string
}

// tipagem para criação (POST) sem balance e created_at
export type TAccountDBPost = {
    id: string,
    owner_id: string
}
