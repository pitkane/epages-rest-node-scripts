const axios = require("axios");

const config = require("./config");

const sendRequest = (method, path, data = null) =>
  new Promise((resolve, reject) => {
    const baseURL =
      config.schema +
      "://" +
      config.shop_host +
      "/rs/shops/" +
      config.shop_name;

    let contentType = "application/json";
    if (method === "PATCH") contentType = "application/json-patch+json";

    const axiosOptions = {
      method: method, // default
      url: path,
      baseURL: baseURL,
      data: data,
      headers: {
        Accept: "application/vnd.epages.v1+json",
        Authorization: "Bearer " + config.token,
        "Content-Type": contentType, // typical request uses: application/json
        "User-Agent": "request"
      }
    };

    console.log("Sending axios request with following options:", axiosOptions);

    axios(axiosOptions)
      .then(response => {
        // console.log(response);
        resolve(response.data);
      })
      .catch(err => {
        console.log(err);
        reject(err);
      });
  });

module.exports = {
  sendRequest: sendRequest
};
