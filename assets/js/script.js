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
}).then(function (response) {

  console.log(queryURL);
  console.log(response);
});


//  FIND COORDINATES OF LOCATION AJAX CALL 

// Pull this from found location 
var cityName

var geoQuery = "https://api.openweathermap.org/geo/1.0/direct?q=" + cityName + "&limit=5&appid=" + openWeatherAPIKey;


// Variables to store longitude and latitude of city 
var long
var lat

// AJAX call to convert city name to coordinates 
$.ajax({
  url: geoQuery,
  method: 'get'

  // When request gets reponse...
}).then(function (response) {


  // Console log response 
  console.log(response)

  lat = response[0].lat
  long = response[0].lon

})



$.ajax({
  url: "https://google-maps-geocoding.p.rapidapi.com/geocode/json?latlng=40.714224%2C-73.96145&language=en",
  method: 'GET'
}).then(function (response) {
	console.log(response);
});