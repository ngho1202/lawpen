const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const spawn = require('child_process').spawn;
const result = spawn('python', ['print.py']);
const {Client} = require('pg')

const app = express();

var corsOptions = {
  origin: "http://localhost:8888"
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// simple route
app.get("/lawresult", (req, res) => {
  res.json({ message: "Welcome to bezkoder application." });
});

// set port, listen for requests
const PORT = 8888;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});



module.exports = {
  HOST: "localhost",
  USER: "postgres",
  PASSWORD: "123",
  DB: "testdb",
  dialect: "postgres",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};