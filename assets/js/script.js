
// Ready function to check local storage and remove suggestion on page load 

// NEEDS IDS FOR li ALTERING

$(function () {
	var localCheck = localStorage.getItem('Personality');

	if (localCheck === null) {
		$('#suggestions-nav').remove()
	}
})

function getTravelQuote() {


	const settings = {
		"async": true,
		"crossDomain": true,
		"url": "https://quotes-villa.p.rapidapi.com/quotes/travel",
		"method": "GET",
		"headers": {
			"X-RapidAPI-Key": "57819f5f43mshbc3a6f975f0fbeep1fa157jsn0811a1b4ba57",
			"X-RapidAPI-Host": "quotes-villa.p.rapidapi.com"
		}
	};

	$.ajax(settings).done(function (response) {
		console.log(response);
		var quote = $('#quote')
		var author = $('#author')

		var random = Math.floor(Math.random() * 100)
		console.log(random)

		var responseText = (response[random].text)

		if(responseText.length > 50) {
			random = Math.floor(Math.random() * 100)
		}


		quote.text(response[random].text)
		author.text(response[random].author.replace(',', ''))
		
	});


}

getTravelQuote()