const { printTable } = require('console-table-printer');
const mysql = require('mysql');
const inquirer = require('inquirer');

const connection = mysql.createConnection({
    host: 'localhost',
  
    // Your port, if not 3306
    port: 3306,
  
    // Your username
    user: 'root',
  
    // Be sure to update with your own MySQL password!
    password: 'Gardenia89',
    database: 'companyDB',
  });

  
const viewEmployees = () => {
      console.log("Viewing Employees\n");
      connection.query('SELECT employee.id, employee.first_name, employee.last_name, role.title, dept.dept_name AS dept, role.salary, CONCAT(manager.first_name, " ", manager.last_name) AS manager FROM employee LEFT JOIN role on employee.role_id = role.id LEFT JOIN dept on role.dept_id = dept.id LEFT JOIN employee manager on manager.id = employee.manager_id', (err, results) => {
        if(err)throw err;
        printTable(results);
        startManager();
    })}

const viewRoles = () => {
        console.log("Viewing Roles\n");
        connection.query('SELECT role.id AS role_id, role.title, role.salary, dept.dept_name FROM role RIGHT JOIN dept on dept.id = dept_id', 
        (err, results) => {
            if (err) throw err;
            printTable(results);
            startManager();
          })
    
}

const viewDepartments = () => {
    console.log("Viewing Departments\n");
    connection.query('SELECT dept.id AS dept_id, dept.dept_name FROM dept', 
    (err, results) => {
        if (err) throw err;
        printTable(results);
        //startManager();
      })

}


const addEmployee = () => {
    //connection.query('SELECT employee.id, employee.first_name, employee.last_name, role.title, dept.dept_name AS dept, role.salary, CONCAT(manager.first_name, " ", manager.last_name) AS manager FROM employee LEFT JOIN role on employee.role_id = role.id LEFT JOIN dept on role.dept_id = dept.id LEFT JOIN employee manager on manager.id = employee.manager_id', (err, results) => {
        //if(err)throw err;
        inquirer
            .prompt([
                {
                    name: 'first_name',
                    type: 'input',
                    message: 'What is the first name of your employee?'
                },
                {
                    name: 'last_name',
                    type: 'input',
                    message: 'What is the last name of your employee?'
                },
                {
                    name: 'role_id',
                    type: 'input', // want this to be a list that converts strings to integers;
                    //type: 'list',
                    // choices() { //"How To Get Javascript Unique Array Using Filter() Method": https://appdividend.com/2019/04/11/how-to-get-distinct-values-from-array-in-javascript/
                    //     const unique = (value, index, self) => {
                    //         return self.indexOf(value) === index
                    //       }
                        
                    //     const rolesArray =  results.map(({ role_id, title }) => `${title} (${role_id})`)

                    //     const uniqueRoles = rolesArray.filter(unique)
                    //     return uniqueRoles
                    // },
                    message: 'What is the role ID of your employee?'
                },
                {
                    name: 'manager_id', // want this to be a list that converts strings to integers; i also want this to be null if they dont have a manager
                    type: 'input',
                    message: 'If your employee has a manager, what is the manager id for your employee?'
                },
            ])
            .then((answer) => { 
                connection.query('INSERT INTO employee SET ?',
                {
                    first_name: answer.first_name,
                    last_name: answer.last_name,
                    role_id: answer.role_id,
                    manager_id: answer.manager_id
                },
                (err, res) => {
                    if (err) throw err;
                    console.log(`You have successfully added ${answer.first_name} ${answer.last_name} into the company database.`)
                    startManager();
                }
                )
            })
    //})
    
}
    
const addDepartment = () => {
    inquirer
        .prompt([
            {
                name: 'dept_name',
                type: 'input',
                message: 'What is the first name of the department?'
            },
        ])
        .then((answer) => {
            connection.query('INSERT INTO dept SET ?',
            {
                dept: answer.dept_name,
            },
            (err, res) => {
                if (err) throw err;
                console.log('Department added!')
                //console.table(res);
                startManager();
            }
            )
        })
}

const addRole = () => {
    inquirer   
        .prompt([
            {
                name: 'title',
                type: 'input',
                message: 'What is the title of this role?'
            },
            {
                name: 'salary',
                type: 'input',
                message: 'What is the salary for this role?',
            },
            {
                name: 'dept_id',
                type: 'input',
                message: 'What is the department id for this role?',
            },
        ])
        .then((answer) => {
            connection.query('INSERT INTO role SET ?',
                {
                    title: answer.title,
                    salary: answer.salary,
                    dept_id: answer.dept_id,
                },
                (err, res) => {
                    if (err) throw err;
                    console.log('Role added!')
                    //console.table(res);
                    startManager();
                }
            )
        })
}

const removeEmployee = () => {
    connection.query('SELECT * FROM employee', (err, results) => {
        if (err) throw err;
        inquirer
            .prompt([
                {
                    name: 'choice',
                    type: 'rawlist',
                    choices() {
                      return results.map(({ first_name, last_name }) => `${first_name} ${last_name}`);
                    },
                    message: 'Please select an employee to remove.',
                  },
            ])
            .then((answer) => {
                console.log("Removing Employee\n");
                    connection.query('DELETE FROM employee WHERE ?',
                    {
                        first_name: answer.choice.split(" ")[0]
                    },
                    (err, res) => {
                        if (err) throw err;
                        console.log(`You have removed ${answer.choice} from the company database.`)
                        //console.table(res);
                        startManager();
                    })
            })
    })
    
 }
    
const updateEmployee = () => {
    connection.query('SELECT * FROM employee', (err, results) => {
        if (err) throw err;
        inquirer
            .prompt([
                {
                    name: 'choice',
                    type: 'rawlist',
                    choices() {
                      return results.map(({ first_name, last_name }) => `${first_name} ${last_name}`);
                    },
                    message: 'Please select an employee to update.',
                  },
                  {
                      name: 'update_role',
                      type: 'input', //eventually, i would like this be a list of choices with the roles listed as strings
                      message: 'Please input the updated role ID for this employee.'
                  }
            ])
            .then((answer) => {
                console.log("Updating Employee\n");
                    connection.query('UPDATE employee SET ? WHERE ?',
                    {
                        first_name: answer.choice.split(" ")[0],
                        role_id: answer.update_role,
                    },
                    (err, res) => {
                        if (err) throw err;
                        console.log('Employee updated!')
                        //console.table(res);
                        startManager();
                    })
            })
    })



//     // inquirer
//     //     .prompt([
//     //         {

//     //         }
//     //     ])


//     console.log("Updating Employee\n")
//     connection.query('UPDATE employee SET ? WHERE ?',
//     [
//         {
//             role_id: 6,
//         },
//         {
//             first_name: 'bob',
//         },
//     ],
//     (err, res) => {
//         if (err) throw err;
//         console.log('Employee Updated!')
//         //console.table(res);
//         startManager();
//     }
//     )
}

// const viewEmployeeByManager = () => {
//     connection.query('SELECT employee.last_name, employee.first_name, role.title, employee.manager_id FROM employee INNER JOIN role ON employee.role_id=role.id', (err, results) => {
//         if(err)throw err;
//         console.table(results);
//         // inquirer
//         //     .prompt([
//         //         {
//         //             name: 'manager_choice',
//         //             type: 'list',
//         //             choices:  'choice',
//         //         },
//         //     ])

//     })
// }


const startManager = () => {
    inquirer
        .prompt({
            name: 'managerAction',
            type: 'list',
            message: 'What would you like to do?',
            choices: [
                'View Employees', 
                'View Departments', 
                'View Roles', 
                'Add an Employee', 
                'Add a Department', 
                'Add a Role', 
                'Update Employee Role', 
                'Remove an Employee', 
                /*'View Employees by Manager',*/
                'Exit']
        })
        .then((answer) => {
            //switch case answer.managerAction
            switch (answer.managerAction) {
                case 'View Employees':
                    viewEmployees();
                    break;
                case 'View Departments':
                    viewDepartments();
                    break;
                case 'View Roles':
                    viewRoles();
                    break;
                case 'Add an Employee':
                    addEmployee();
                    break;
                case 'Add a Department':
                    addDepartment();
                    break;
                case 'Add a Role':
                    addRole();
                    break;
                case 'Update Employee Role':
                    updateEmployee();
                    break;
                case 'Remove an Employee':
                    removeEmployee();
                    break;
                //case 'View Employees by Manager':
                //    viewEmployeeByManager();
                //    break;
                default:
                    connection.end();
                    break;
            }
        })
}

connection.connect((err) => {
    if (err) throw err;
    console.log(`connected as id ${connection.threadId}`);
    //startManager();
    addEmployee();
});
