const mysql = require('mysql');

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

  connection.connect((err) => {
      if (err) throw err;
      console.log(`connected as id ${connection.threadId}`);
      viewEmpl();
  });

const viewEmpl = () => {
    console.log("Viewing Employees\n");
    connection.query('SELECT * FROM employee', (err, res) => {
        if (err) throw err;
        console.table(res);
    })
}

