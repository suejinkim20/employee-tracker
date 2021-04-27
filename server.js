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
      connection.query('SELECT * FROM employee', 
      (err, res) => {
          if (err) throw err;
          console.table(res);
          startManager();
        })
}

const viewDepartments = () => {
    console.log("Viewing Departments\n");
    connection.query('SELECT * FROM dept', 
    (err, res) => {
        if (err) throw err;
        console.table(res);
        startManager();
      })

}

const viewRoles = () => {
    console.log("Viewing Roles\n");
    connection.query('SELECT * FROM role', 
    (err, res) => {
        if (err) throw err;
        console.table(res);
        startManager();
      })

}

const addEmployee = () => {
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
                name: 'role_id', // want this to be a list that converts strings to integers
                type: 'input',
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
                console.log('Employee added!')
                //console.table(res);
                startManager();
            }
            )
        })
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

// const removeEmployee = () => {
//     connection.query('SELECT * FROM employee', (err, results) => {
//         if (err) throw err;
//         inquirer
//             .prompt([
//                 {
//                     name: 'choice',
//                     type: 'rawlist',
//                     choices() {
//                       const choiceArray = [];
//                       results.forEach(({ first_name, last_name }) => {
//                         choiceArray.push(first_name, last_name);
//                       });
//                       return choiceArray;
//                     },
//                     message: 'Please select an employee to remove.',
//                   },
//             ])
//             .then((answer) => {
//                 let chosenEmployee;
//                 results.forEach((employee) => {
//                     if (employee.first_name === answer.choice){
//                         chosenEmployee = employee
//                     }
//                     console.log("Removing Employee\n");
//                     connection.query('DELETE FROM employee WHERE ?',
//                     {
//                         first_name: first_name.choice
//                     },
//                     (err, res) => {
//                         if (err) throw err;
//                         console.log('Employee deleted!')
//                         //console.table(res);
//                         startManager();
//                     })
//                 })
//             })
//     })
    
// }
    
const updateEmployee = () => {
    console.log("Updating Employee\n")
    connection.query('UPDATE employee SET ? WHERE ?',
    [
        {
            role_id: 6,
        },
        {
            first_name: 'bob',
        },
    ],
    (err, res) => {
        if (err) throw err;
        console.log('Employee Updated!')
        //console.table(res);
        startManager();
    }
    )
}

const startManager = () => {
    inquirer
        .prompt({
            name: 'managerAction',
            type: 'list',
            message: 'What would you like to do?',
            choices: ['View Employees', 'View Departments', 'View Roles', 'Add an Employee', 'Add a Department', 'Add a Role', 'Update Employee Information', 'Exit']
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
                case 'Update Employee Information':
                    updateEmployee();
                    break;
                // case 'Remove an Employee':
                //     removeEmployee();
                //     break;
                default:
                    connection.end();
                    break;
            }
        })
}

connection.connect((err) => {
    if (err) throw err;
    console.log(`connected as id ${connection.threadId}`);
    startManager();
});
