const https = require('https');

function fetchCoinGeckoData() {
    return new Promise((resolve, reject) => {
      https.get('https://api.coingecko.com/api/v3/coins/list', (response) => {
        let data = '';
  
        response.on('data', (chunk) => {
          data += chunk;
        });
  
        response.on('end', () => {
          resolve(JSON.parse(data));
        });
  
        response.on('error', (error) => {
          reject(error);
        });
      });
    });
  }

module.exports = fetchCoinGeckoData;
