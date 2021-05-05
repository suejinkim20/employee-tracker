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
    * Exit- ends the connection


## Usage


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