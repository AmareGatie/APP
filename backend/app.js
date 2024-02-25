//import the express module
const express =require("express");
const  mysql= require('mysql2');
// set up the port to listen 
const port =4001
// set Up listner
const app = express();
const dbconfig={
// conectionLimit:10,
database:"appdemo",
user:"root",
password:"",
port:3306
}
const connection=mysql.createConnection(dbconfig);
connection.connect(function(err){
  if(err) throw err;
  console.log ("connected");
  });
  // use the express.json() middleware to parse the request body 
  app.use(express.json());
app.get('/', (req, res) => {
    res.send('Hello World!');
  });
  // Post request handler to add a new employee to the database
  app.post('/add-employee', (req, res) => {
    console.log(req.body);
    // Write the sql query to add to the database table named employee_test
    const sql = `INSERT INTO employee_test (first_name, last_name, email, password) VALUES ('${req.body.first_name}', '${req.body.last_name}', '${req.body.email}', '${req.body.password}')`;
    // Execute the query 
    connection.query(sql, function (err, result) {
      if (err) throw err;
      console.log("1 record inserted");
    });
    // Send a response back to the client 
    const response = {
      status: 'success',
      message: 'Employee added succesfully',
    };
    res.status(200).json(response);
  });
  // post request handler to login an employee which comes to this route/login
  app.post('/login', (req, res) => {
    console.log(req.body);
    const sql = `SELECT * FROM employee_test WHERE email = '${req.body.email}' AND password = '${req.body.password}'`;
    connection.query(sql, function (err, result) {
      if (err) throw err;
      if (result.length > 0) {
        const response = {
          status: 'success',
          message: 'Login successful',

        }
        res.status(200).json(response);
      }
      else {
        const response = {
          status: 'failed',
          message: 'Invalid credentials',
        }
        res.status(200).json(response);
      }
      
      
    })
  })

    app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
