# employee-tracker

Insert multiple data rows in the same command: https://www.mysqltutorial.org/mysql-insert-multiple-rows/


## Description
This is a command line application that can be used to manage the information for departments, roles, and employees at a company. This application uses InquirerJs npm to run command line prompts and MySQL npm to connect to the user's MySQL database and perform queries.

### Functional Elements:

* When the user runs the application by typing npm start, Inquirer prompts the user to choose an action:
    * View Employees- the user can view a list of all employees, including managers, with the following details:
        * employee id, first name, last name, role/title, department, salary, and manager, if applicable.
    * View Departments- the user can view all departments
    * View Roles-  the user can view all roles with the department names listed
    * Add an Employee- the user can add an employee by inputting the employee's first and last name, role ID and the role ID of their manager
    * Add a Role- the user can add a role by inputting the role's
    * Update Employee Role- the user can update an employee's role by selecting the employee from a list and inputting the new role ID
    * Remove an Employee- the user can remove an employee by selecting the employee from a list
    * Remove a Department - the user can remove a department by selecting it from a list
    * Remove a Role - the user can remove a role by selecting it from a list
    * Exit- ends the connection


## Usage
In order to use this application, you must have Node.js installed, as well as the Inquirer package (see links below in Credits). You must also have MySQL downloaded and have the company_db set up and seeded.

The following videos shows how a user would invoke the application from the command line, how a user would enter responses to all of the prompts in the application, and it allows the user to manage the following functionalities:

View Employees, Departments, and Roles:
![Video1](https://media.giphy.com/media/00aB1XqEdgF6TDjTc4/giphy.gif)

Add, Update, and Remove Employees:
![Video2](https://media.giphy.com/media/TW1cXq7a8z20lF1Gfs/giphy.gif)
![Video3](https://media.giphy.com/media/tBYopzUQUBn6N61e3h/giphy.gif)

Add and Remove Departments:
![Video4](https://media.giphy.com/media/rHOoisC759fc78L8wv/giphy.gif)

Add and Remove Roles:
![Video5](https://media.giphy.com/media/XvtwcZ7lAiZQDHOiEI/giphy.gif)
![Video6](https://media.giphy.com/media/a8FNpUIiI12wTuZoB2/giphy.gif)


## Technologies Used

* Node.js: https://nodejs.org/en/
* Inquirer npm: https://www.npmjs.com/package/inquirer
* MySQL: https://www.mysql.com/
* console-table-printer npm: https://www.npmjs.com/package/console-table-printer

## License

MIT License

Copyright (c) [2021] [Sue Jin Kim]

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.