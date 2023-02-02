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

$.ajax(rules).done(function (response) {
	console.log(response);
});