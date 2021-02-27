-- Drops the codeWorms_db if it exists currently --
DROP DATABASE IF EXISTS codeWorms_db;
-- Creates the "codeWorms_db" database --
CREATE DATABASE codeWorms_db;

-- profile pic for users to add --
CREATE TABLE `test`.`pic` (
`idpic` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
`caption` VARCHAR(45) NOT NULL,
`img` LONGBLOB,
PRIMARY KEY(`idpic`)
)
TYPE = InnoDB; 