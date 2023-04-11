-- Active: 1680698510940@@127.0.0.1@3306


-- Práticas

--Crie o código SQL estruturando as tabelas da prática 1
CREATE TABLE users (
 id TEXT PRIMARY KEY NOT NULL,
 name TEXT NOT NULL,
 email TEXT UNIQUE NOT NULL,
 password TEXT NOT NULL
);

CREATE TABLE phones (
  id TEXT PRIMARY KEY NOT NULL,
  phone_number TEXT UNIQUE NOT NULL,
  user_id TEXT NOT NULL, 
  FOREIGN KEY(user_id) REFERENCES users(id)
);


--Popule a tabela users com 2 itens

INSERT INTO users (id, name, email, password)
VALUES 
("u001", "marcelo", "bruno@gmail.com", "marcelo123"),
("u002", "pedro", "ronaldo@gmail.com", "pedro564;");



--Popule a tabela phones com 3 itens

INSERT INTO phones(id, phone_number, user_id)
VALUES 
("p001", "489988754", "u001" ),
("p002", "489955554", "u002" ),
("p003", "489111111", "u002" );

INSERT INTO phones(id, phone_number, user_id)
VALUES 
("p004", "4899585654", "u003" ),
("p005", "4899577654", "u002" );



SELECT * FROM users;
SELECT * FROM phones;


DROP TABLE users;
DROP TABLE phones;

--Crie a query de consulta com junção das duas tabelas

SELECT * FROM users
INNER JOIN phones
on phones.user_id =users.id;


--pratica 3

CREATE TABLE licences( 
id TEXT PRIMARY KEY NOT NULL,
register_number TEXT UNIQUE NOT NULL,
category TEXT NOT NULL
);

CREATE TABLE drivers(
  id TEXT PRIMARY KEY NOT NULL,
  name TEXT NOT NULL,
  password TEXT NOT NULL,
  license_id TEXT UNIQUE NOT NULL,
  FOREIGN KEY (license_id) REFERENCES licences(id)
);

INSERT INTO licences(id, register_number, category)
VALUES
("l001", "56568874", "A"),
("l002", "54555777", "AB");

INSERT INTO drivers(id, name, password, license_id)
VALUES
("d001", "marcelo", "marcelo123", "l001"),
("d002", "bruno", "bruno", "l002");

SELECT 
license_id,
licences.register_number,
category, 
drivers.id, 
drivers.password,
drivers.license_id
FROM licences
INNER JOIN drivers
ON drivers.license_id = licences.id;



