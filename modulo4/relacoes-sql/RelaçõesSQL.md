CREATE TABLE Rating (
		id VARCHAR(255) PRIMARY KEY,
    comment TEXT NOT NULL,
		rate FLOAT NOT NULL,
    movie_id VARCHAR(255),
    FOREIGN KEY (movie_id) REFERENCES Movie(id)
);


select * from Rating;
DESCRIBE Rating;

-- *a) Explique o que é uma chave estrangeira*

-- ● Para criamos relações, precisaremos dar um jeito de relacionar 
-- (ou referenciar) uma tabela com outra, certo?
-- ● Para isso, usamos a FOREIGN KEY, que indica que a 
-- propriedade em questão é uma chave estrangeira
-- ● FOREIGN KEY deve sempre se referenciar a uma PRIMARY 
-- KEY da outra tabela



-- *b) Crie a tabela e, ao menos, uma avaliação para cada um dos filmes*
INSERT INTO Rating (id, comment, rate, movie_id) 
VALUES (
		"001",
    "Muito bom!",
    7,
		"001"
);

INSERT INTO Rating (id, comment, rate, movie_id) 
VALUES (
		"002",
    "execelente!",
    7,
		"002"
);
INSERT INTO Rating (id, comment, rate, movie_id) 
VALUES (
		"003",
    "Muito bom!",
    7,
		"003"
);
INSERT INTO Rating (id, comment, rate, movie_id) 
VALUES (
		"004",
    "otimo!",
    7,
		"004"
);

-- *c) Tente criar uma avaliação para um filme que não existe (ou seja, um id inválido). Anote e explique o resultado da query.*







-- d) *Altere a tabela de filmes para que ela não tenha mais uma coluna chamada rating.*









-- *e) Tente apagar um filme que possua avaliações. Anote e explique o resultado da query.*