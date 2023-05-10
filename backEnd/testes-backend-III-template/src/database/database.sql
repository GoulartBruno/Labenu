-- Active: 1683727944362@@127.0.0.1@3306
CREATE TABLE users (
    id TEXT PRIMARY KEY UNIQUE NOT NULL,
    name TEXT NOT NULL,
    email TEXT UNIQUE NOT NULL,
    password TEXT NOT NULL,
    role TEXT NOT NULL,
    created_at TEXT DEFAULT (DATETIME()) NOT NULL
);

INSERT INTO users (id, name, email, password, role)
VALUES
  -- conta NORMAL e senha = "fulano123"
	('u001', 'Fulano', 'fulano@email.com', '$2a$12$kUtElOebs1Zl6CBAUc6Ndeit6M/heGgohjgYS.g6c72sbT/y.TVYK', 'NORMAL'),
	
  -- conta NORMAL e senha = "beltrana00"
  ('u002', 'Beltrana', 'beltrana@email.com', '$2a$12$gO/aPYDibF3LW/X4cK2vlOHGJi/oAMFvCgU8sRe5W23vZM4oWC.Qy', 'NORMAL'),

  -- conta ADMIN e senha = "astrodev99"
	('u003', 'Astrodev', 'astrodev@email.com', '$2a$12$N86uqg4FewXtEUKNaS.yduFpkL/KS8r1iCq2/heVGOhasXaLWG7ga', 'ADMIN');
