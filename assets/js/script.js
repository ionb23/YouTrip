// var userInput = prompt("What would you like to search?")

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

<<<<<<< HEAD
// Here we are building the URL we need to query the database
var queryURL = "https://api.content.tripadvisor.com/api/v1/location/search?key=" + '4c15fbe874mshd0c5c375f480a99p1d20a3jsn6da3ffa07c68' + "&searchQuery=" + userInput + "&language=en"

  /*const settings = {
    "async": true,
    "crossDomain": true,
    "url": "https://tripadvisor16.p.rapidapi.com/api/v1/flights/searchAirport?query=" + userInput,
    "method": "GET",
    "headers": {
      "X-RapidAPI-Key": "f72b817560msh85096028e95a534p1b3f97jsn0259ea03ef55",
      "X-RapidAPI-Host": "tripadvisor16.p.rapidapi.com"
    }
  };
  
  $.ajax(settings).done(function (response) {
    console.log(response);
  });
;*/

const settings = {
	"async": true,
	"crossDomain": true,
	"url": "https://travel-advisor.p.rapidapi.com/attractions/list?location_id=298571&currency=USD&lang=en_US&lunit=km&sort=recommended",
	"method": "GET",
	"headers": {
		"X-RapidAPI-Key": "f72b817560msh85096028e95a534p1b3f97jsn0259ea03ef55",
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
		"X-RapidAPI-Key": "f72b817560msh85096028e95a534p1b3f97jsn0259ea03ef55",
		"X-RapidAPI-Host": "apidojo-booking-v1.p.rapidapi.com"
	}
};

=======
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

>>>>>>> 2449d9ae7eef1865c5f20adacc6255b670ba4d28
$.ajax(rules).done(function (response) {
	console.log(response);
});