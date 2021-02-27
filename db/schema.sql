-- Drops the codeWorms_db if it exists currently --
DROP DATABASE IF EXISTS codeWorms_db;
-- Creates the "codeWorms_db" database --
CREATE DATABASE codeWorms_db;

create TABLE adjectives (
 id INTEGER(200) AUTO_INCREMENT NOT NULL,
adjective VARCHAR (50),
primary key (id)
);

create TABLE nouns (
 id INTEGER(200) AUTO_INCREMENT NOT NULL,
noun VARCHAR (50),
primary key (id)
);
