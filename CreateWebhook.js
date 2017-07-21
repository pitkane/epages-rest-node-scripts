// ProductPostRequest - Creates a new product

const axios = require("axios");

const epages = require("./epages-api");

const data = JSON.stringify({
  callbackUrl: "https://env-6410208.paas.datacenter.fi/webhooktest",
  eventType: "ORDERS_UPDATE"
});

epages
  .sendRequest("POST", "/webhooks", data)
  .then(result => {
    console.log("Result data: " + JSON.stringify(result));
  })
  .catch(err => {
    console.log("Error data: " + err);
  });
