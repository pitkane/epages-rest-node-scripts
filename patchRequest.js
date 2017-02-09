// readme


const axios = require('axios');

const config = require('./config');

const sendRequest = (config, method, path) => new Promise((resolve, reject) => {

    const baseURL = config.schema + '://' + config.shop_host + '/rs/shops/' + config.shop_name;

    const axiosOptions = {
        method: method, // default
        url: path,
        baseURL: baseURL,
        data: JSON.stringify([{
            op: 'add',
            path: '/stocklevel',
            value: 2
        }]),
        headers: {
            'Accept': 'application/vnd.epages.v1+json',
            'Authorization': 'Bearer ' + config.token,
            'Content-Type': 'application/json-patch+json', // typical request uses: application/json
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




sendRequest(config, 'PATCH', '/products/57EEF0FC-C64B-2D14-2083-0A2810103414')
    .then(function(data) {
        console.log("Result data: " + JSON.stringify(data));
    })
    .catch(function(err) {
        console.log("Error data: " + err)
    });














    // console.log(epages)

    // epages.shop.get()
    //     .then( function(data) {
    //         console.log("Response: " + data);
    //     })
    //     .catch(function(err) {
    //         console.log(err);
    //     });
    //
    // epages.orders.get()
    //     .then( function(data) {
    //         console.log("Response: " + data);
    //     })
    //     .catch(function(err) {
    //         console.log(err);
    //     });
