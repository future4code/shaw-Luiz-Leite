### Exercício 1


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





