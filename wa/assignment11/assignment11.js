const axios = require("axios");

const options = {
  method: 'POST',
  url: 'https://andruxnet-random-famous-quotes.p.rapidapi.com/',
  params: {cat: 'movies', count: '10'},
  headers: {
    'X-RapidAPI-Key': 'SIGN-UP-FOR-KEY',
    'X-RapidAPI-Host': 'andruxnet-random-famous-quotes.p.rapidapi.com'
  }
};

axios.request(options).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});
