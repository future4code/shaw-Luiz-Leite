CREATE TABLE Actor (
id varchar (255) primary key,
name varchar (255) not null,
salary float not null,
birth_date date not null,
gender varchar(6) not null

);

select * from Actor;
DESCRIBE Actor;

insert into Actor (id, name, salary, birth_date, gender)
VALUES ("001", "Tony Ramos",400000,"1948-08-25", "male"); 
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES ("002", "Gloria Pires",1200000,"1963-08-23","female");
INSERT INTO Actor (id, name, salary,birth_date, gender)
VALUES ("003", "Fernanda Montenegro",300000,"1929-10-19", "female");
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES("005", "Juliana Paes",719333.33,"1979-03-26", "female");
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES("004", "Antônio Fagundes",400000,"1949-04-18", "male");

-- Exercício 1

-- a)
-- ALTER TABLE Actor DROP COLUMN salary; 
-- **neste caso o comando pede para remover a coluna salario;

-- b)
-- ALTER TABLE Actor CHANGE gender sex VARCHAR(6);
-- ** Podemos redeclarar colunas por completo: nesse caso o maximo de caracteres é seis para definir um genero;
-- c)

-- ALTER TABLE Actor CHANGE gender gender VARCHAR(255);
-- ** Podemos redeclarar colunas por completo: nesse caso o maximo de caracteres é 255 para definir um genero;

-- d)

ALTER TABLE Actor CHANGE gender gender VARCHAR(100);


-- Exercício 2
-- a) *Escreva uma query que atualize o nome e a data de nascimento do ator com o id `003`*
UPDATE Actor
 SET 
 name = "Moacyr Franco",
 birth_date = "1956-04-21"  
 WHERE id = "003";


-- b) *Escreva uma query que atualize o nome da atriz `Juliana Paes` para `JULIANA PAES`. Então, escreva outra query para voltar ao nome anterior.*

SELECT UPPER(name) FROM Actor
WHERE name = "JULIANA PAES";

SELECT UPPER(name) FROM Actor
WHERE name = "juliana Paes";



--  c) *Escreva uma query que atualize todas as informações do ator com o id `005`*

UPDATE Actor 
SET 
name = "vera fisher",
salary = 400000,
birth_date = "1969-04-21" ,
gender = "famale"
WHERE id = "005";



-- d) *Escreva uma query em que você tente atualizar um dado da tabela que não existe (com um id inválido, por exemplo). Teste, anote e explique o resultado.*

UPDATE Actor
SET 
name = "Moacyr Franco",
birth_date = "2020-02-10"
WHERE id = "017";


SET SQL_SAFE_UPDATES = 0;
-- Exercício 3


-- a) *Escreva uma query que apague a atriz com o nome `Fernanda Montenegro`*
DELETE FROM Actor WHERE name = "Moacyr Franco";


-- b) *Escreva uma query que apague todos os atores (do gênero `male`) com o salário maior do que R$1.000.000,00*

DELETE FROM Actor
WHERE
gender = "male" AND
salary > 1000000;


-- Exercício 4

-- a) *Escreva uma query que pegue o maior salário de todos os atores e atrizes*

SELECT MAX(salary) FROM Actor;

-- b) *Escreva uma query que pegue o menor salário das atrizes*
SELECT MIN(salary) FROM Actor WHERE gender = "female";

-- c) *Escreva uma query que pegue a quantidade de atrizes*

SELECT COUNT(*) FROM Actor WHERE gender = "female";

-- d) *Escreva uma query que pegue a soma de todos os salários*

SELECT SUM(salary) FROM Actor


-- Exercício 5

-- a) *Releia a última query. Teste-a. Explique o resultado com as suas palavras*

-- b) *Faça uma query que retorne somente o id e o nome dos atores em ordem decrescente alfabética*

-- c) *Faça uma query que retorne todos os atores ordenados pelo salário*

-- d) *Faça uma query que retorne os atores com os três maiores salarios*

-- e) *Faça uma query que retorne a média de salário por gênero*