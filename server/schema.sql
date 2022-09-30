CREATE DATABASE movieList;

use movieList;

CREATE TABLE movies (
  id int(10) AUTO_INCREMENT PRIMARY KEY,
  title varchar(255) NOT NULL,
  watched BOOLEAN DEFAULT false
);