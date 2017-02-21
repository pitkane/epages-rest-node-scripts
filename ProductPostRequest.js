// ProductPostRequest - Creates a new product

const axios = require('axios');

const epages = require('./epages-api');

const data =  JSON.stringify({
                "productNumber": "Tuote-0004",
                "name": "Tuote-0004",
                "shortDescription": "Awesome product",
                "description": "This is a brand new product",
                "manufacturer": "Awesome Products Company",
                "price": 159.00,
                "searchKeywords": ["awesome", "product"],
                "visible": true
              });


epages.sendRequest('POST', '/products/', data)
    .then((result) => {
        console.log("Result data: " + JSON.stringify(result));
    })
    .catch((err) => {
        console.log("Error data: " + err)
    });
