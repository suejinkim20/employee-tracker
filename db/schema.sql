DROP DATABASE IF EXISTS companyDB;
CREATE DATABASE companyDB;
USE companyDB;

CREATE TABLE dept (
    id INTEGER AUTO_INCREMENT,
    dept_name VARCHAR(30),
    PRIMARY KEY (id)
);


CREATE TABLE role (
    id INTEGER AUTO_INCREMENT,
    title VARCHAR(30),
    salary DECIMAL,
    dept_id INTEGER,
    PRIMARY KEY(id),
    FOREIGN KEY (dept_id) REFERENCES dept(id)
);

CREATE TABLE employee (
    id INTEGER AUTO_INCREMENT NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    first_name VARCHAR(30) NOT NULL,
    role_id INTEGER,
    manager_id INTEGER,
    PRIMARY KEY (id),
    FOREIGN KEY (role_id) REFERENCES role(id),
    FOREIGN KEY (manager_id) REFERENCES employee(id)
);
