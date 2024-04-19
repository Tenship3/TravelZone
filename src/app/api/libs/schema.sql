CREATE DATABASE travelzone;
USE travelzone;

CREATE TABLE users(
    id INT AUTO_INCREMENT,
    username VARCHAR(20) NOT NULL UNIQUE,
    email VARCHAR(50) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    primary key (id)
)

CREATE TABLE comments(
    id INT AUTO_INCREMENT,
    user VARCHAR(50) NOT NULL,
    name VARCHAR(50) NOT NULL,
    message VARCHAR(255) NOT NULL,
    grade INT NOT NULL,
    date VARCHAR(50) NOT NULL,
    primary key (id)
)