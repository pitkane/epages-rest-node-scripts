// ProductPostRequest - Creates a new product

const axios = require('axios');
const concat = require('concat-stream');
const fs = require('fs');
const FormData = require('form-data');
const _ = require('lodash');

const config = require('./config');

const sendRequest = (method, path, data = null, headers) => new Promise((resolve, reject) => {

    const baseURL = config.schema + '://' + config.shop_host + '/rs/shops/' + config.shop_name;

    console.log(data)
    console.log(headers)
    const defaultHeaders = {
        'Accept': 'application/vnd.epages.v1+json',
        'Authorization': 'Bearer ' + config.token,
        'User-Agent': 'request'
    };
    let postHeaders = _.merge(defaultHeaders, headers)

    let contentType = 'application/json';
    if (method === 'PATCH') contentType = 'application/json-patch+json'

    const axiosOptions = {
        method: method,
        url: path,
        baseURL: baseURL,
        data: data,
        headers: postHeaders
    }

    console.log('Sending axios request with following options:', axiosOptions);

    axios(axiosOptions)
        .then((response) => {
          console.log(response)
            resolve(response.data);
        })
        .catch((err) => {
          console.log(err)
            reject(err);
        });

});


const productId = "58ABE1A0-6B43-798C-9914-0AD337157EFC";

const promise = new Promise((resolve) => {
  const fd = new FormData();
  // fd.append("filename", "icon.png");
  fd.append("image", fs.createReadStream('./icon.png'), {filename: 'icon.png'});
  fd.pipe(concat({ encoding: 'buffer' }, data => resolve({ data, headers: fd.getHeaders() })));
});


promise
  .then(({ data, headers }) => {

    sendRequest('POST', '/products/' + productId + '/slideshow', data, headers )
        .then((result) => {
            console.log("Result data: " + JSON.stringify(result));
        })
        .catch((err) => {
            console.log("Error data: " + err)
        });
  });
