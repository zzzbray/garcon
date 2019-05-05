USE garcon_db;

-- Replace with real inventory daata
INSERT INTO inventory (menu_name, menu_category, menu_price, stock) values ("Bruschetta", "Appetizers", 11.99, 50);
INSERT INTO inventory (menu_name, menu_category, menu_price, stock) values ("Calamari", "Appetizers", 14.99, 50);
INSERT INTO inventory (menu_name, menu_category, menu_price, stock) values ("Grilled Salmon", "Entrees", 27.99, 50);
INSERT INTO inventory (menu_name, menu_category, menu_price, stock) values ("Vegetable Lasagna", "Entrees", 21.99, 50);
INSERT INTO inventory (menu_name, menu_category, menu_price, stock) values ("Chocolate Fondant Cake", "Desserts", 13.99, 50);
INSERT INTO inventory (menu_name, menu_category, menu_price, stock) values ("Baklava", "Desserts", 9.99, 50);
INSERT INTO inventory (menu_name, menu_category, menu_price, stock) values ("Manhattan", "Cocktails", 9.99, 50);
INSERT INTO inventory (menu_name, menu_category, menu_price, stock) values ("Martini", "Cocktails", 8.99, 50);

-- DUMMY DATA FOR TESTING PURPOSES

-- Customer dummy data
INSERT INTO customers (firstName, lastName, email, password, birthday, anniversary) values ("John", "Doe", "jdwho@gmail.com", "password", "1990-05-04", "2010-07-07");
INSERT INTO customers (firstName, lastName, email, password, birthday) values ("Sherlock", "Holmes", "sherlock@hotmail.co.uk", "sherlocked", "1980-01-01");
INSERT INTO customers (firstName, lastName, email, password, birthday, anniversary) values ("Beyonce", "Knowles", "queenbey@gmail.com", "beyhive", "1981-09-04", "2005-11-17");

-- Reservations dummy data
INSERT INTO reservations (customer_id, reservationDate, reservationTime, partySize) values (1, "2019-06-19", "17:45", 4);
INSERT INTO reservations (customer_id, reservationDate, reservationTime, partySize) values (2, "2019-07-07", "19:00", 2);
INSERT INTO reservations (customer_id, reservationDate, reservationTime, partySize) values (3, "2019-05-08", "18:30", 10);

-- Orders dummy data
INSERT INTO orders (receipt_id, customer_id, table_num, menu_id, menu_name, isClosedOut) values (1, 2, 4, 3, "Grilled Salmon", 0);
INSERT INTO orders (receipt_id, customer_id, table_num, menu_id, menu_name, isClosedOut) values (2, 3, 1, 1, "Bruschetta", 0);
INSERT INTO orders (receipt_id, customer_id, table_num, menu_id, menu_name, isClosedOut) values (3, 3, 2, 2, "Calamari", 0);