// patchRequest - Updates stock level of the given product

const axios = require('axios');

const epages = require('./epages-api');

const data = JSON.stringify([{
              op: 'add',
              path: '/productImage',
              value: 'icon.png'
            }]);

epages.sendRequest('PATCH', '/products/58ABE1A0-6B43-798C-9914-0AD337157EFC', data)
    .then((data) => {
        console.log("Result data: " + JSON.stringify(data));
    })
    .catch((err) => {
        console.log("Error data: " + err)
    });
