DROP DATABASE IF EXISTS garconDB;
CREATE DATABASE garconDB;
USE garconDB;

;
CREATE TABLE Users (
  id INTEGER NOT NULL auto_increment,
  email VARCHAR(255) NOT NULL UNIQUE,
  password VARCHAR(255) NOT NULL,
  isManager BOOLEAN NOT NULL DEFAULT false,
  isServer BOOLEAN NOT NULL DEFAULT false,
  createdAt DATETIME NOT NULL,
  updatedAt DATETIME NOT NULL,
  PRIMARY KEY (id)
);


SELECT * FROM menuItems;

INSERT INTO  Users(email, PASSWORD) VALUES ("manager@manager.com,", "manager");
INSERT INTO  Users(email, PASSWORD) VALUES ("server@server.com,", "server");