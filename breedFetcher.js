const request = require('request');


const fetchBreedDescription = function(breed, callback) {
  callback();
  request(('https://api.thecatapi.com/v1/images/search?breed_ids=' + breed.substring(0, 4)), (error, response, body) => {
    if (error) {
      throw new Error(error);
    }
    const data = JSON.parse(body);
    if (data[0] === undefined) {
      console.log(`Requested breed ${breed} not found`);
    } else {
      console.log(data[0]);
    }
  });
};

module.exports = fetchBreedDescription;