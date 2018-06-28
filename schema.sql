
-- CREATE DATABASE burgers_db;

USE burgers_db;
DROP TABLE if exists burgers;
CREATE TABLE burgers (
    id INT NOT NULL AUTO_INCREMENT,
    burger_name VARCHAR(255) NOT NULL,
    devour BOOLEAN DEFAULT false,
    PRIMARY KEY (id)

);

INSERT INTO burgers (burger_name, devoured) VALUES ("Burger 1 TEST", false);
INSERT INTO burgers (burger_name, devoured) VALUES ("Burger 2 TEST TEST", false);
INSERT INTO burgers (burger_name, devoured) VALUES ("Burger 3 TEST TEST TEST", false);

SELECT * FROM burgers;