-- Active: 1681833013975@@127.0.0.1@3306

CREATE TABLE videos (
    id TEXT PRIMARY KEY UNIQUE NOT NULL,
    titulo TEXT NOT NULL,
    duracao INTEGER NOT NULL,
    created_at TEXT DEFAULT (DATETIME()) NOT NULL
);

INSERT INTO videos (id, titulo, duracao)
VALUES ("v01", "Cozinhando", 320),
("v02", "Viajando", 120);

SELECT  * FROM videos 
WHERE id ="v01";