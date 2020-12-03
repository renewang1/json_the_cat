const request = require('request');


const fetchBreedDescription = function(breed, callback) {
  request(('https://api.thecatapi.com/v1/images/search?breed_ids=' + breed.substring(0, 4)), (error, response, body) => {
    if (error) {
      callback(error, null);
    }
    const data = JSON.parse(body);
    if (data[0] === undefined) {
      console.log(`Requested breed ${breed} not found`);
    } else {
      callback(null, data[0]);
    }
  });
};

module.exports = fetchBreedDescription;