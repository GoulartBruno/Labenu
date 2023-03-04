-- Active: 1680526884025@@127.0.0.1@3306


CREATE Table books (
  id TEXT PRIMARY KEY UNIQUE, 
  name TEXT, 
  author TEXT, 
  page_count INTEGER, 
  price REAL);

DROP TABLE books;

SELECT * FROM books;

-- Pratica Guiada 3

INSERT INTO books(
  id, name, author, page_count, price)
   VALUES("10101010", "o Quinze", "Bruno", 252, 29.95);
   
INSERT INTO books(
  id, name, author, page_count, price)
   VALUES("1002545", "o quatro", "pedro", 241, 35.95);

   INSERT INTO books
   VALUES("1125", "o tres", "jose", 154, 49.95);

--atualizar
   UPDATE books
   SET page_count =254
   WHERE id="1125";

   --deletar primera linha

   DELETE FROM books WHERE
   id="1125";




   CREATE Table ronaldo (
  id TEXT PRIMARY KEY UNIQUE, 
  name TEXT, 
  age REAL);


INSERT INTO ronaldo(
  id, name, age)
   VALUES("01", "Bruno", 18);

SELECT * FROM ronaldo;



  DROP TABLE pedro;
