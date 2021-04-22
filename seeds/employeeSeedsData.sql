-- Department Data --
INSERT INTO dept (dept_name)
VALUES ("Sales"), ("Engineering"), ("Finance"), ("Legal")

-- Roles Data --
INSERT INTO role (title, salary, dept_id)
VALUES
("Sales Lead", 100000, 1),
("Sales Associate", 80000, 1),
("Lead Engineer", 150000, 2),
("Engineer", 120000, 2),
("Accounting Manager", 125000, 3),
("Accountant", 120000, 3),
("Legal Team Lead", 250000, 4),
("Lawyer", 190000, 4)

-- Employee Data --
-- Managers --
INSERT INTO employee(first_name, last_name, role_id)
VALUES
("Nielson", "Anita", 1), --manager id should be null
("Lovelace", "Ada", 3),
("Hood", "Amy", 5),
("Bader Ginsburg", "Ruth", 7)

-- Associates --

INSERT INTO employee(first_name, last_name, role_id, manager_id)
VALUES
('Stradling', 'Bobinette', 2, 1),
('Gregolin', 'Consuela', 2, 1),
('Hallin', 'Selinda', 4, 2),
('Minette', 'Janene', 4, 2),
('Klassman', 'Sheree', 6, 3),
('Stiven', 'Patience', 6, 3),
('Yushkin', 'Kaela', 8, 4),
('Espada', 'Lindsey', 8, 4);