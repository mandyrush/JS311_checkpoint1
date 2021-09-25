-- SQL statement to create table in our database
-- This was run directly in MySQL Workbench

create table recipes (
    id INT NOT NULL AUTO_INCREMENT,
    recipe_name VARCHAR(1000) NOT NULL,
    recipe_rating INT,
    PRIMARY KEY (id)
) ENGINE=InnoDB;