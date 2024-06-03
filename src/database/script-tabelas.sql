CREATE DATABASE resignific;

USE resignific;

CREATE TABLE usuario (
	id INT PRIMARY KEY AUTO_INCREMENT,
	nome VARCHAR(50),
	email VARCHAR(50),
	senha VARCHAR(50)
);

CREATE TABLE quiz(
idResposta int primary key auto_increment,
FkUsuario int,
foreign key (FkUsuario) references usuario (id),
resposta1 char(3), constraint chkTexto check ( resposta1 in ('sim', 'não')),
resposta2 char (3) constraint check (resposta2 in ('Sim', 'Não')),
resposta3 varchar(30) constraint check (resposta3 in ('Doar', 'Jogar no lixo', 'Vender')),
resposta4 varchar (45)
);

insert into usuario values
(default, 'Carolina', 'carol@gmail.com', '123456');

insert into quiz values
(default, 1, 'Não', 'Não', 'Doar', '1 vez no mes');

WITH CTE_resposta1 AS (
    SELECT 'questao1' AS questao, resposta1 AS resposta_valor, COUNT(*) AS qnt
    FROM quiz
    GROUP BY resposta1
),
CTE_resposta2 AS (
    SELECT 'questao2' AS questao, resposta2 AS resposta_valor, COUNT(*) AS qnt
    FROM quiz
    GROUP BY resposta2
),
CTE_resposta3 AS (
    SELECT 'questao3' AS questao, resposta3 AS resposta_valor, COUNT(*) AS qnt
    FROM quiz
    GROUP BY resposta3
),
CTE_resposta4 AS (
    SELECT 'questao4' AS questao, resposta4 AS resposta_valor, COUNT(*) AS qnt
    FROM quiz
    GROUP BY resposta4
)
SELECT * FROM CTE_resposta1
UNION ALL
SELECT * FROM CTE_resposta2
UNION ALL
SELECT * FROM CTE_resposta3
UNION ALL
SELECT * FROM CTE_resposta4;

select * from usuario;

select * from quiz;