var express = require("express");
var morgan = require("morgan");
var bodyParser = require("body-parser");

var app = express();

app.use(morgan("dev"));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.get("/webhook", function(req, res, next) {
  console.log("GET webhook incoming");

  return res.status(200).send("nice");
});
app.post("/webhook", function(req, res, next) {
  console.log("POST webhook incoming");

  return res.status(200).send("nice");
});

app.listen(4000, function() {
  console.log("Port: 4000!");
});
