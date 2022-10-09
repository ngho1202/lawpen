const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const spawn = require('child_process').spawn;
const { PythonShell } = require("python-shell");

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
app.get("/lawresult/:lawtitle", function(req, res) {
  var law_title = req.params["lawtitle"];

  var python_options = { 
    mode: 'text',
    encoding: "utf-8",
    pythonPath: '',
    pythonOptions: ['-u'],
    scriptPath: '',
    args: [law_title],
  };

  PythonShell.run('model.py', python_options, function (err, results) {
    if (err) throw err;
    // results is an array consisting of messages collected during execution
    console.log(results);
    res.send(results);
  });
  // var model_result = spawn('python', ['./model.py', law_title]);

});

// set port, listen for requests
const PORT = 8888;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});