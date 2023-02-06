let theChoice = ''
let personality = localStorage.getItem('Personality')
let city = '';
let type ='';

getCountry();
findHolidays();

function getCountry (){
    
let placeArray = JSON.parse(localStorage.getItem('Destination'));
if(placeArray.length ==0){
    return
}else{
theChoice = placeArray[Math.floor(Math.random() * placeArray.length)]
}}

let theCountry = '' //this will be randomly chosen out of array of possible countries


function findHolidays(){
for(let i =0; i <outcomes.length; i++ ){
    if (outcomes[i].name == theChoice){
        city = outcomes[i].places[personality][0]
        type = outcomes[i].places[personality][1]
        console.log(city)
        console.log(type)
    }
}
$('#results-title').text(`${type} in ${theChoice}`)
$("#holiday-description").text(`For your ${personality} personality ${type} in ${theChoice} seems like the best choice! Check out how to make it happend`)

}

let geoID = 0;
let hotelID = "0";
let restaurantID = "0";
// let geoIDToSearch = 0;
// let geoIDToSearch = 187497;

// code below retrieves the geoID of the searched city then plugs it into the hotel list URL
// to give us a list of hotels at the searched city
const autoComplete = {
    "async": true,
    "crossDomain": true,
    "url": "https://travel-advisor.p.rapidapi.com/locations/v2/auto-complete?query=" + city + "&lang=en_US&units=km",
    "method": "GET",
    "headers": {
        "X-RapidAPI-Key": apiKeyTravelAdvisor,
        "X-RapidAPI-Host": "travel-advisor.p.rapidapi.com"
    }
};

// this ajax call nests a few API calls, because we need the result from the first API as an input into the second API call
// e.g. search for Barcelona -> get city geoID -> plug city geoID into hotel list API call ->
// -> get hotel id -> plug hotel id into hotel details API call to get all details about this hotel
$.ajax(autoComplete).done(function (response1) {
    console.log("This is the output of locations/v2/auto-complete:");
    console.log(response1);
    let cityURL = response1.data.Typeahead_autocomplete.results[0].route.url;
    let position = cityURL.search("-g") + 2;
    geoID = cityURL.substring(position, position + 6);
    console.log(geoID);

    // defines filters to use for the hotel list
    const hotelList = {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
            'X-RapidAPI-Key': apiKeyTravelAdvisor,
            'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
        },
        body: `{"geoId":${geoID},"checkIn":"2023-03-10","checkOut":"2023-03-15","sort":"POPULARITY","sortOrder":"asc","filters":[{"id":"price","value":["1","500"]},{"id":"type","value":["9189","9190","21971","21372"]}],"rooms":[{"adults":2,"childrenAges":[2]}],"updateToken":""}`
    };

    // fetches hotel list based on filters above and gives us the first hotel id
    fetch('https://travel-advisor.p.rapidapi.com/hotels/v2/list?currency=USD&units=km&lang=en_US', hotelList)
        .then(response2 => response2.json())
        .then(response2 => {
            console.log("This is the output of hotels/v2/list:");
            console.log(response2);
            hotelID = response2.data.AppPresentation_queryAppListV2[0].sections[3].singleCardContent.saveId.id;
            console.log(hotelID);
        })

        .then(details => {

            // another nested API call. uses the hotel id retrieved above to obtain hotel details
            const hotelDetails = {
                method: 'POST',
                headers: {
                    'content-type': 'application/json',
                    'X-RapidAPI-Key': apiKeyTravelAdvisor,
                    'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
                },
                body: `{"contentId":"${hotelID}","checkIn":"2022-03-03","checkOut":"2022-03-05","rooms":[{"adults":2,"childrenAges":[2]},{"adults":2,"childrenAges":[3]}]}`
            };

            fetch('https://travel-advisor.p.rapidapi.com/hotels/v2/get-details?currency=USD&units=km&lang=en_US', hotelDetails)
                .then(response3 => response3.json())
                .then(response3 => {

                    console.log("This is the output of hotels/v2/get-details:");
                    console.log(response3);
                    var hotelName = response3.data.AppPresentation_queryAppDetailV2[0].container.navTitle;
                    console.log(hotelName);
                    var hotelURL = response3.data.AppPresentation_queryAppDetailV2[0].container.shareInfo.webUrl;
                    console.log(hotelURL);
                    var hotelAbout = response3.data.AppPresentation_queryAppDetailV2[0].sections[6].about;
                    console.log(hotelAbout);
                    var hotelImg = response3.data.AppPresentation_queryAppDetailV2[0].sections[0].albumPhotos[0].data.photoSizeDynamic.urlTemplate;
                    var hotelImgFinal = hotelImg.replace("{width}", 1000)
                    console.log(hotelImgFinal);

                    $(".hotel-btn").attr("href", hotelURL);
                    $(".hotel-title").text(hotelName);
                    $(".hotel-about").text(hotelAbout);
                    $(".hotel-img").attr("src", hotelImgFinal);
                })
                .catch(err => console.error(err));
        })
        .catch(err => console.error(err));
});



// same as above but for restaurants

$.ajax(autoComplete).done(function (response1) {
    console.log("This is the output of locations/v2/auto-complete:");
    console.log(response1);
    let cityURL = response1.data.Typeahead_autocomplete.results[0].route.url;
    let position = cityURL.search("-g") + 2;
    geoID = cityURL.substring(position, position + 6);
    console.log(geoID);

    // defines filters to use for the restaurant list
    const restaurantList = {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
            'X-RapidAPI-Key': apiKeyTravelAdvisor,
            'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
        },
        body: `{"geoId":${geoID},"partySize":2,"reservationTime":"2023-03-07T20:00","sort":"POPULARITY","sortOrder":"desc","filters":[{"id":"establishment","value":["10591"]}],"updateToken":""}`
    };

    // fetches hotel list based on filters above and gives us the first hotel id
    fetch('https://travel-advisor.p.rapidapi.com/restaurants/v2/list?currency=USD&units=km&lang=en_US', restaurantList)
        .then(response2 => response2.json())
        .then(response2 => {
            console.log("This is the output of restaurants/v2/list:");
            console.log(response2);
            restaurantID = response2.data.AppPresentation_queryAppListV2[0].sections[3].singleCardContent.saveId.id;
            console.log(restaurantID);
        })

        .then(details => {

            // another nested API call. uses the restaurant id retrieved above to obtain restaurant details
            const restaurantDetails = {
                method: 'POST',
                headers: {
                    'content-type': 'application/json',
                    'X-RapidAPI-Key': apiKeyTravelAdvisor,
                    'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
                },
                body: `{"contentId":"${restaurantID}","reservationTime":"2023-03-07T20:00","partySize":2}`
            };

            fetch('https://travel-advisor.p.rapidapi.com/restaurants/v2/get-details?currency=USD&units=km&lang=en_US', restaurantDetails)
                .then(response3 => response3.json())
                .then(response3 => {

                    console.log("This is the output of restaurants/v2/get-details:");
                    console.log(response3);
                    var restaurantName = response3.data.AppPresentation_queryAppDetailV2[0].container.navTitle;
                    console.log(restaurantName);
                    var restaurantURL = response3.data.AppPresentation_queryAppDetailV2[0].container.shareInfo.webUrl;
                    console.log(restaurantURL);
                    var restaurantAbout = response3.data.AppPresentation_queryAppDetailV2[0].sections[8].about;
                    console.log(restaurantAbout);
                    var restaurantImg = response3.data.AppPresentation_queryAppDetailV2[0].sections[0].albumPhotos[0].data.photoSizeDynamic.urlTemplate;
                    var restaurantImgFinal = restaurantImg.replace("{width}", 1000)
                    console.log(restaurantImgFinal);

                    $(".restaurant-btn").attr("href", restaurantURL);
                    $(".restaurant-title").text(restaurantName);
                    $(".restaurant-about").text(restaurantAbout);
                    $(".restaurant-img").attr("src", restaurantImgFinal);
                })
                .catch(err => console.error(err));
        })
        .catch(err => console.error(err));
});