const settings = {
	"async": true,
	"crossDomain": true,
	"url": "https://travel-advisor.p.rapidapi.com/attractions/list?location_id=298571&currency=USD&lang=en_US&lunit=km&sort=recommended",
	"method": "GET",
	"headers": {
		"X-RapidAPI-Key": apiKey,
		"X-RapidAPI-Host": "travel-advisor.p.rapidapi.com"
	}
};

$.ajax(settings).done(function (response) {
	console.log(response);
});

const rules = {
	"async": true,
	"crossDomain": true,
	"url": "https://apidojo-booking-v1.p.rapidapi.com/currency/get-exchange-rates?base_currency=USD&languagecode=en-us",
	"method": "GET",
	"headers": {
		"X-RapidAPI-Key": apiKey,
		"X-RapidAPI-Host": "apidojo-booking-v1.p.rapidapi.com"
	}
};

<<<<<<< HEAD
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
=======
$.ajax(rules).done(function (response) {
>>>>>>> ca63844a793244eed2a161c2a0947829a8438f62
	console.log(response);
});