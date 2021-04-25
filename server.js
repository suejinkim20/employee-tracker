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

  
const viewEmployee = () => {
      console.log("Viewing Employees\n");
      connection.query('SELECT * FROM employee', 
      (err, res) => {
          if (err) throw err;
          console.table(res);
          startManager();
        })
}
    
const addEmployee = () => {
    console.log("Adding Employee\n");
    connection.query('INSERT INTO employee SET ?',
    {
        first_name: 'bob',
        last_name: 'smith',
        role_id: 6,
        manager_id: 5
    },
    (err, res) => {
        if (err) throw err;
        console.log('Employee added!')
        console.table(res);
        startManager();
    }
    )
}
    
const removeEmployee = () => {
    console.log("Removing Employee\n");
    connection.query('DELETE FROM employee WHERE ?',
    {
        first_name: 'bob'
    },
    (err, res) => {
        if (err) throw err;
        console.log('Employee deleted!')
        console.table(res);
        startManager();
    }
    )
}
    
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
        console.table(res);
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
            choices: ['View Employees', 'Add an Employee', 'Update Employee Information', 'Remove an Employee', 'Exit']
        })
        .then((answer) => {
            //switch case answer.managerAction
            switch (answer.managerAction) {
                case 'View Employees':
                    viewEmployee();
                    break;
                case 'Add an Employee':
                    addEmployee();
                    break;
                case 'Update Employee Information':
                    updateEmployee();
                    break;
                case 'Remove an Employee':
                    removeEmployee();
                    break;
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
