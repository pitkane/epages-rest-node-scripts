// getProductsRequest.js - fetch all of the products

const axios = require('axios');

const config = require('./config');

const sendRequest = (config, method, path) => new Promise((resolve, reject) => {

    const baseURL = config.schema + '://' + config.shop_host + '/rs/shops/' + config.shop_name;

    const axiosOptions = {
        method: method, // default
        url: path,
        baseURL: baseURL,
        headers: {
            'Accept': 'application/vnd.epages.v1+json',
            'Authorization': 'Bearer ' + config.token,
            'Content-Type': 'application/json',
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



sendRequest(config, 'GET', '/products')
    .then(function(data) {
        console.log("Result data: " + JSON.stringify(data));
    })
    .catch(function(err) {
        console.log("Error data: " + err)
    });
