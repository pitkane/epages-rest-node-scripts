// getProductsRequest.js - fetch all of the products

const axios = require('axios');

var epages = require('./epages-api');

epages.sendRequest('GET', '/products')
    .then((data) => {
        console.log("Result data: " + JSON.stringify(data));
    })
    .catch((err) => {
        console.log("Error data: " + err)
    });
