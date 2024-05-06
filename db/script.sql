-- Criação do banco de dados
CREATE DATABASE limaaulabacktds2;

-- Conecta no banco de dados
\c limaaulabacktds2;

-- Criação da tabela 'usuario'
CREATE TABLE usuario (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL
);

-- inserção de dados na tabela 'usuario'
INSERT INTO usuario (nome, email) VALUES ('Lima', 'lima@gmail.com');