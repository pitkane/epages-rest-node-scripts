// ProductPostRequest - Creates a new product


const axios = require('axios');

const config = require('./config');

const sendRequest = (config, method, path) => new Promise((resolve, reject) => {

    const baseURL = config.schema + '://' + config.shop_host + '/rs/shops/' + config.shop_name;

    const axiosOptions = {
        method: method, // default
        url: path,
        baseURL: baseURL,
        data: JSON.stringify({
          "productNumber": "TP-2000",
          "name": "Another Brand new product",
          "shortDescription": "Awesome product",
          "description": "This is a brand new product",
          "manufacturer": "Awesome Products Company",
          "price": 5.99,
          "searchKeywords": ["awesome", "product"]
        }),
        headers: {
            'Accept': 'application/vnd.epages.v1+json',
            'Authorization': 'Bearer ' + config.token,
            'Content-Type': 'application/json', // typical request uses: application/json
            'User-Agent': 'request'
        }
    }

    console.log('Sending axios request with following options:', axiosOptions);

    axios(axiosOptions)
        .then((response) => {
            resolve(response.data);
        })
        .catch((err) => {
            reject(err);
        });

});




sendRequest(config, 'POST', '/products/')
    .then(function(data) {
        console.log("Result data: " + JSON.stringify(data));
    })
    .catch(function(err) {
        console.log("Error data: " + err)
    });
