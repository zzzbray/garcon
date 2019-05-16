DROP DATABASE IF EXISTS garcon_db;
DROP DATABASE IF EXISTS garcon_sequelize_db;
CREATE DATABASE garcon_sequelize_db;

CREATE TABLE Users (
 id INTEGER NOT NULL auto_increment,
 email VARCHAR(255) NOT NULL UNIQUE,
 password VARCHAR(255) NOT NULL,
 createdAt DATETIME NOT NULL,
 updatedAt DATETIME NOT NULL,
 PRIMARY KEY (id)
);