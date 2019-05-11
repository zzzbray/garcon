DROP DATABASE IF EXISTS garcon_db;
CREATE DATABASE garcon_db;
USE garcon_db;

CREATE TABLE customers(
  customer_id INTEGER AUTO_INCREMENT NOT NULL,
  firstName VARCHAR(100) NOT NULL,
  lastName VARCHAR(100) NOT NULL,
  email VARCHAR(100) NOT NULL,
  password VARCHAR(100) NOT NULL,
  birthday DATE,
  anniversary DATE,
  PRIMARY KEY (customer_id)
);

CREATE TABLE reservations(
  reservation_id INTEGER AUTO_INCREMENT NOT NULL,
  customer_id INTEGER(11) NOT NULL,
  reservationDate DATE NOT NULL,
  reservationTime TIME NOT NULL,
  partySize INTEGER(11) NOT NULL,
  notes VARCHAR(300),
  timeAdded TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (reservation_id)
);

CREATE TABLE inventory(
  menu_id INTEGER AUTO_INCREMENT NOT NULL,
  menu_name VARCHAR(300),
  menu_category VARCHAR(300),
  menu_price DECIMAL(5,2),
  stock INTEGER(11),
  PRIMARY KEY (menu_id)
);

CREATE TABLE orders(
  entry_id INTEGER AUTO_INCREMENT NOT NULL,
  receipt_id INTEGER(11) NOT NULL,
  customer_id INTEGER(11),
  table_num INTEGER(11) NOT NULL,
  menu_id INTEGER(11) NOT NULL,
  menu_name VARCHAR(300) NOT NULL,
  menu_price DECIMAL(5,2),
  isClosedOut BOOLEAN NOT NULL DEFAULT 0,
  time_added TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (entry_id)
);