//import the express module
const express =require("express");
// set up the port to listen 
const port =4001
// set Up listner
const app = express();
app.get('/', (req, res) => {
    res.send('Hello World!');
  });
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
app.get('/', (req, res) => {
  res.send('Hello World!');
});
