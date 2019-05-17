USE garcon_sequelize_db;

-- Replace with real inventory data
INSERT INTO inventory (menu_name, menu_category, menu_price, stock) values ("Bruschetta", "Appetizers", 11.99, 50);
INSERT INTO inventory (menu_name, menu_category, menu_price, stock) values ("Salmon", "Entrees", 28.99, 50);
INSERT INTO inventory (menu_name, menu_category, menu_price, stock) values ("Beer", "Beverages", 14.99, 50);
INSERT INTO inventory (menu_name, menu_category, menu_price, stock) values ("Calamari", "Appetizers", 14.99, 50);
INSERT INTO inventory (menu_name, menu_category, menu_price, stock) values ("Grilled Salmon", "Entrees", 27.99, 50);
INSERT INTO inventory (menu_name, menu_category, menu_price, stock) values ("Vegetable Lasagna", "Entrees", 21.99, 50);
INSERT INTO inventory (menu_name, menu_category, menu_price, stock) values ("Chocolate Fondant Cake", "Desserts", 13.99, 50);
INSERT INTO inventory (menu_name, menu_category, menu_price, stock) values ("Baklava", "Desserts", 9.99, 50);
INSERT INTO inventory (menu_name, menu_category, menu_price, stock) values ("Manhattan", "Beverages", 9.99, 50);
INSERT INTO inventory (menu_name, menu_category, menu_price, stock) values ("Martini", "Beverages", 8.99, 50);


-- DUMMY DATA FOR TESTING PURPOSES
-- Customer dummy data
INSERT INTO customers (firstName, lastName, email, password, birthday, anniversary) values ("John", "Doe", "jdwho@gmail.com", "password", "1990-05-04", "2010-07-07");
INSERT INTO customers (firstName, lastName, email, password, birthday) values ("Sherlock", "Holmes", "sherlock@hotmail.co.uk", "sherlocked", "1980-01-01");
INSERT INTO customers (firstName, lastName, email, password, birthday, anniversary) values ("Beyonce", "Knowles", "queenbey@gmail.com", "beyhive", "1981-09-04", "2005-11-17");

-- Reservations dummy data
INSERT INTO reservations (customer_id, reservationDate, reservationTime, partySize) values (1, "2019-06-19", "17:45", 4);
INSERT INTO reservations (customer_id, reservationDate, reservationTime, partySize, notes) values (2, "2019-07-07", "19:00", 2, "It's our anniversary!");
INSERT INTO reservations (customer_id, reservationDate, reservationTime, partySize) values (3, "2019-05-08", "18:30", 10);

-- Orders dummy data
INSERT INTO orders (receipt_id, InventoryMenuId) values (1, 3);
INSERT INTO orders (receipt_id, InventoryMenuId) values (1, 1);
INSERT INTO orders (receipt_id, InventoryMenuId) values (1, 2);
INSERT INTO orders (receipt_id, InventoryMenuId) values (2, 8);
INSERT INTO orders (receipt_id, InventoryMenuId) values (3, 1);
INSERT INTO orders (receipt_id, InventoryMenuId) values (3, 6);

-- UPDATE TESTING
-- UPDATE orders SET isClosedOut = true WHERE receipt_id = 3

INSERT INTO Users (email, password, isManager) values ("server@gmail.com", "garcon");
INSERT INTO Users (email, password, isManager) values ("admin@gmail.com", "garcon", true);
