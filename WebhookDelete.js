// ProductPostRequest - Creates a new product

const axios = require("axios");
const util = require("util");

const epages = require("./epages-api");

const data = JSON.stringify({});

// PRODUCT_CREATE;
// PRODUCT_UPDATE;
// PRODUCT_DELETE;
// ORDER_CREATE;
// ORDER_UPDATE;
// ORDER_DELETE;
// CATEGORY_CREATE;
// CATEGORY_UPDATE;
// CATEGORY_DELETE;

epages
  .sendRequest("DELETE", "/webhooks/CAD6E1D2-AC46-4917-95A1-7CB9ECC3F09F", data)
  .then(result => {
    // console.log("Result data: " + JSON.stringify(result));
    console.log(util.inspect(result, { showHidden: false, depth: null }));
  })
  .catch(err => {
    console.log("Error data: " + err);
  });
