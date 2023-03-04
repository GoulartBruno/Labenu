-- Active: 1680612498454@@127.0.0.1@3306
-- Conecte o arquivo pratica-aprofundamento-sql.db com a extensão MySQL e ative a conexão aqui

-- Deletar tabela

-- Criar tabela
CREATE TABLE pokemons (
    id INTEGER PRIMARY KEY UNIQUE NOT NULL,
    name TEXT UNIQUE NOT NULL,
    type TEXT NOT NULL,
    hp INTEGER NOT NULL,
    attack INTEGER NOT NULL,
    defense INTEGER NOT NULL,
    special_attack INTEGER NOT NULL,
    special_defense INTEGER NOT NULL,
    speed INTEGER NOT NULL
);

-- Popular tabela
INSERT INTO pokemons (
    id,
    name,
    type,
    hp,
    attack,
    defense,
    special_attack,
    special_defense,
    speed
)
VALUES 
    (1, "bulbasaur", "grass", 45, 49, 49, 65, 65, 45),
    (2, "ivysaur", "grass", 60, 62, 63, 80, 80, 60),
    (3, "venusaur", "grass", 80, 82, 83, 100, 100, 80),
    (4, "charmander", "fire", 39, 52, 43, 60, 50, 65),
    (5, "charmeleon", "fire", 58, 64, 58, 80, 65, 80),
    (6, "charizard", "fire", 78, 84, 78, 109, 85, 100),
    (7, "squirtle", "water", 44, 48, 65, 50, 64, 43),
    (8, "wartortle", "water", 59, 63, 80, 65, 80, 58),
    (9, "blastoise", "water", 79, 83, 100, 85, 105, 78);

-- Buscar todos os pokemons
SELECT * FROM pokemons;

-- Práticas



-- buscar pokemos speed > 60

SELECT * FROM pokemons WHERE speed > 60;

-- buscar pokemos ataque e special_attack >= 60
SELECT * FROM pokemons
WHERE attack >= 60 AND special_attack >=60;

-- buscar pokemos que tenham na coluna name o termo "saur" no final do texto


SELECT name FROM pokemons
WHERE name LIKE "%saur";

-- busque na tabela pokemons a media simples na coluna hp

SELECT AVG(hp) 
FROM pokemons;

SELECT COUNT(*) as countRows
FROM pokemons;

-- refatore as queries acima apelidando as colunas com funções para nomes mais semãnticos

--Pratica 6
-- Busque todos os pokemons e ordene-os baseado no coluna defense em ordem decrescente

SELECT * FROM pokemons
ORDER BY defense DESC;

-- busque o numero de pokemons cadastrados, mas agora agrupe o resultado baseado na coluna type
SELECT COUNT(*), type 
FROM pokemons
GROUP BY type;

-- busque por todos os pokemons, limite o resultado a 3 linhas iniciado
SELECT * FROM pokemons LIMIT 3 OFFSET 4;


--busque todos os pokemon s aplicando1)
SELECT * FROM pokemons
WHERE "type" = "fire" OR "type" = "grass"
ORDER BY attack ASC
LIMIT 10 OFFSET 2;