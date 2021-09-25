create table recipes (
    id INT NOT NULL AUTO_INCREMENT,
    recipe_name VARCHAR(1000) NOT NULL,
    recipe_rating INT,
    PRIMARY KEY (id)
) ENGINE=InnoDB;