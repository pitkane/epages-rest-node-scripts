// ProductPostRequest - Creates a new product

const axios = require("axios");
const util = require("util");

const epages = require("./epages-api");

const data = JSON.stringify({});

epages
  .sendRequest("GET", "/webhooks/", data)
  .then(result => {
    // console.log("Result data: " + JSON.stringify(result));
    console.log(util.inspect(result, { showHidden: false, depth: null }));
  })
  .catch(err => {
    console.log("Error data: " + err);
  });
