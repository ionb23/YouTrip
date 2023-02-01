var userInput = prompt("What would you like to search?")

// const options = {method: 'GET', headers: {accept: 'application/json'}};

// fetch('https://api.content.tripadvisor.com/api/v1/location/search?key=D542C01E25364D34A32E03BF959D82C3&searchQuery=London&language=en', options)
//   .then(response => response.json())
//   .then(response => console.log(response))
//   .catch(err => console.error(err));

// Here we are building the URL we need to query the database
var queryURL = "https://api.content.tripadvisor.com/api/v1/location/search?key=" + apiKeyTripadvisor + "&searchQuery=" + userInput + "&language=en"

// We then created an AJAX call
$.ajax({
  url: queryURL,
  method: "GET"
}).then(function(response) {

  console.log(queryURL);
  console.log(response);
});