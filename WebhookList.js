// ProductPostRequest - Creates a new product

const axios = require("axios");
const util = require("util");

const epages = require("./epages-api");

const data = JSON.stringify({});

epages
  .sendRequest("GET", "/webhooks/DE44C8C2-9A16-40B3-AE5A-1FDB1602C99A", data)
  .then(result => {
    // console.log("Result data: " + JSON.stringify(result));
    console.log(util.inspect(result, { showHidden: false, depth: null }));
  })
  .catch(err => {
    console.log("Error data: " + err);
  });
