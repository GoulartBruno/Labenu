-- Active: 1682509724976@@127.0.0.1@3306
CREATE TABLE products (
    id TEXT PRIMARY KEY UNIQUE NOT NULL,
    name TEXT NOT NULL,
    price REAL NOT NULL,
    created_at TEXT DEFAULT (DATETIME()) NOT NULL
);

INSERT INTO products (id, name, price)
VALUES
	('p001', 'Mouse', 50),
	('p002', 'Teclado', 80),
	('p003', 'Monitor', 700);
