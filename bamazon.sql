DROP DATABASE IF EXISTS bamazone_db;

CREATE DATABASE bamazone_db;

USE bamazone_db;

CREATE TABLE products (
item_id INT NOT NULL AUTO_INCREMENT,
product_name VARCHAR(150),
department_name VARCHAR(50),
price DECIMAL (10,2) NULL,
stock_quantity INT NULL,
PRIMARY KEY (item_id)
);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ('Ladderball', 'outdoor games', 33.99, 25);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ('Cornhole set', 'outdoor games', 57.19, 6);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ('Bluetooth Speaker', 'Electronic', 35.97, 15);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ('Record Player', 'Electronic', 49.99, 10);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ('Mens watch', 'Assessories', 13.20, 8);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ('Heart Necklace', 'Assessories', 21.47, 13);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ('Echo Dot', 'Electronic', 48.95, 11);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ('Drum Set', 'music', 169.95, 2);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ('Electric Guitar', 'music', 94.99, 4);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ('Washer Game', 'outdoor games', 178.00, 1);