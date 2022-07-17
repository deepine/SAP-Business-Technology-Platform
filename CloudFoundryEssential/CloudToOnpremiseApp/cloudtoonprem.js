const axios = require("axios");
const express = require("express");

const app = express();

const VCAP_SERVICES = JSON.parse(process.env.VCAP_SERVICES); 

const destinationService = VCAP_SERVICES.destination[0].credentials;
const connectivityService = VCAP_SERVICES.connectivity[0].credentials;

const fnGetJwtToken = async function (oauthUrl, oauthClient, oauthSecret) {
  const jwtToken = new Promise(function (resolve, reject) {
    const tokenUrl = oauthUrl + "/oauth/token?grant_type=client_credentials&response_type=token";
    const config = {
      headers: {
        Authorization: "Basic " + Buffer.from(oauthClient + ":" + oauthSecret).toString("base64"),
      },
    };
    axios
      .get(tokenUrl, config)
      .then((response) => {
        resolve(response.data.access_token);
      })
      .catch((error) => {
        reject(error);
      });
  });

  return jwtToken;
};

const fnGetDestinationConfig = async function (destinationName, destUri, jwtToken) {
  const destinationConfig = new Promise(function (resolve, reject) {
    const destSrvUrl = destUri + "/destination-configuration/v1/destinations/" + destinationName;
    const config = {
      headers: {
        Authorization: "Bearer " + jwtToken,
      },
    };
    axios
      .get(destSrvUrl, config)
      .then(function (response) {
        resolve(response.data.destinationConfiguration);
      })
      .catch((error) => {
        reject(error);
      });
  });

  return destinationConfig;
};

const fnGetDataFromSCC = async function (connProxyHost, connProxyPort, connectivityJwtToken, destinationConfig) {
  const dataFromSCC = new Promise(function (resolve, reject) {
    const targetUrl = destinationConfig.URL + "/A_SalesOrderItems";

    const encodedUser = Buffer.from(destinationConfig.User + ":" + destinationConfig.Password).toString("base64");

    const config = {
      headers: {
        Authorization: "Basic " + encodedUser,
        "Proxy-Authorization": "Bearer " + connectivityJwtToken,
        "SAP-Connectivity-SCC-Location_ID": destinationConfig.CloudConnectorLocationId,
      },
      proxy: {
        host: connProxyHost,
        port: connProxyPort,
      },
    };
    axios
      .get(targetUrl, config)
      .then((response) => {
        resolve(response.data);
      })
      .catch((error) => {
        reject(error);
      });
  });

  return dataFromSCC;
};


app.get("/", async function (req, res) {

  const connectivityJwtToken = await fnGetJwtToken(
    connectivityService.token_service_url,
    connectivityService.clientid, 
    connectivityService.clientsecret 
  );
  
  const destinationJwtToken = await fnGetJwtToken(
    destinationService.url, 
    destinationService.clientid, 
    destinationService.clientsecret 
  );
  
  const destinationConfig = await fnGetDestinationConfig(
    "destination_cloudtoonprem", 
    destinationService.uri, 
    destinationJwtToken 
  );
  
  const result = await fnGetDataFromSCC(
    connectivityService.onpremise_proxy_host, 
    connectivityService.onpremise_proxy_http_port, 
    connectivityJwtToken, 
    destinationConfig 
  );

  res.json(result);
});


app.listen(process.env.PORT, function () {

});
