DROP DATABASE IF EXISTS bamazon;

CREATE DATABASE bamazon;

USE bamazon;

CREATE TABLE products (
id INT NOT NULL AUTO_INCREMENT,
  name VARCHAR(45) NOT NULL,
  department VARCHAR(45) NOT NULL,
  price INT NOT NULL,
  quantity INT NULL,
  PRIMARY KEY (id)
);

INSERT INTO products (name, department, price, quantity)
VALUES ("Prophet 08", "Synthesizers", 50, 5), 
("Omnichord OM-300", "Synthesizers", 23, 3), 
("AKAI MPC-2000XL", "Samplers", 44, 6), 
("SP-505", "Samplers", 31, 9),
("Fostex E-16", "Tape Machines", 53, 2), 
("Tascam 38", "Tape Machines", 45, 8), 
("Moog Drive", "Pedals", 12, 12), 
("Ghost Echo", "Pedals", 11, 2), 
("Univox SR-55", "Drum Machines", 32, 6), 
("Tascam 32", "Tape Machines", 22, 4);

