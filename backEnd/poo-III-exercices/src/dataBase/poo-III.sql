-- Active: 1681930920563@@127.0.0.1@3306


CREATE TABLE books(
    id TEXT PRIMARY KEY UNIQUE NOT NULL,  
    titulo TEXT NOT NULL,
    pages INTEGER,
    created_at TEXT DEFAULT (DATETIME()) NOT NULL,
    author_book TEXT NOT NULL,
    FOREIGN KEY (author_book) REFERENCES authors(id)
);

INSERT INTO books (id, titulo, pages, author_book )
VALUES
("b001", "O amor é lindo", 234, "a002"),
("b002", "festa na praça", 214, "a001"),
("b003", "quebrou o carro",134, "a003"),
("b004", "quebrou o carro",134, "a003");



CREATE TABLE authors(
    id TEXT PRIMARY KEY UNIQUE NOT NULL,  
    name TEXT NOT NULL
);

INSERT INTO authors (id, name )
VALUES
("a001", "João Carlos Silvera"),
("a002", "Pedro da Silva"),
("a003", "Romeu de Souza");

SELECT * FROM books;

SELECT * FROM authors;

DROP Table books;
DROP Table authors;

DROP TABLE IF EXISTS author