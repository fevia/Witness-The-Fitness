### Schema
CREATE DATABASE fitness_db;
USE fitness_db;

CREATE TABLE fitness
(
	id int NOT NULL AUTO_INCREMENT,
	weight INT NOT NULL,
    exercise varchar(255) NOT NULL,
	calories DECIMAL(4,3) NOT NULL,
	PRIMARY KEY (id)
);