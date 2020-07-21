CREATE DATABASE escola;

USE escola;
CREATE TABLE alunos (
	id int AUTO_INCREMENT,
	nome varchar (50),
    email varchar (50),
    celular varchar (11),
    logradouro varchar (30),
    numero varchar (10),
    bairro varchar (30),
	cidade varchar (30),
	estado varchar (2),
	cep varchar(8),
    PRIMARY KEY (id)
);

INSERT INTO alunos (nome, email, celular, logradouro, numero, bairro, cidade, estado, cep)
	VALUES ('test','test@email.com','12345678','rua a','1','Jd','city','SP','12345678');


INSERT INTO alunos (nome, email, celular, logradouro, numero, bairro, cidade, estado, cep)
	VALUES ('teste','teste@email.com','12345678','rua b','1','Jd','city','GO','12345678');
    
select * from alunos;