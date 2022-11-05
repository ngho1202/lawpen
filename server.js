const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const { PythonShell } = require("python-shell");

const app = express();

let corsOptions = {
	origin: "*",
};

app.use(cors(corsOptions));

app.use(express.json());				// json 형태의 Request Body를 받기 위해 사용
app.use(express.urlencoded({ extended: true }));

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));


// simple route
app.get("/api/lawresult/:lawtitle", function(req, res) {

  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Request-Methods", "GET");
  res.header("Access-Control-Expose-Headers", "Authorization");
  res.header("Access-Control-Allow-Credentials", "true");


  var law_title = req.params["lawtitle"];
  console.log(law_title);

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
    res.send(results);
  });

});

// set port, listen for requests
const PORT = 8888;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
