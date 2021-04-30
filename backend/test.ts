import key from "./key";

const https = require('https');
const base = 'https://cloud.iexapis.com/v1/stock/twtr/quote/latestPrice'
https.get(base + '?token=' + key, (resp) => {
  let data = '';

  // A chunk of data has been received.
  resp.on('data', (chunk) => {
    data += chunk;
  });

  // The whole response has been received. Print out the result.
  resp.on('end', () => {
    console.log(JSON.parse(data));
  });

}).on("error", (err) => {
  console.log("Error: " + err.message);
});