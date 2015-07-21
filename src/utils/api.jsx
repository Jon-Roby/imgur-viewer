var Fetch = require('whatwg-fetch');
var rootUrl = 'https://api.imgur.com/3/';
var apiKey = 'c6f42a43e2e51ca';

module.exports = window.api = {
  get: function(url) {
    return fetch(rootUrl + url, {
      headers: {
        'Authorization': 'Client-ID ' + apiKey
      }
    })
    .then(function(response){
      return response.json()
    })
  }
};





/* fetch will make ajax request to whatever url we pass to it
the headers is a configuration option.
the primary method of working with data is through promises.
WHen the request is complete, after it fetches data,
our function that we pass to then, will be called.
It will be called with whatever data got returned
from the server */
