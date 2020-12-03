const request = require('request');

const site = 'https://api.thecatapi.com/v1/images/search?breed_ids=';
const breed = process.argv.slice(2)[0];

request((site + breed.substring(0, 4)), (error, response, body) => {
  // console.log('error:', error); // Print the error if one occurred
  // console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  // console.log('body:', body); // Print the HTML for the Google homepage.
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
