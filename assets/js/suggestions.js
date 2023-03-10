let theChoice = ''
let personality = localStorage.getItem('Personality')
let city = '';
let type = '';

getCountry();
findHolidays();

function getCountry() {
//after answering questions in the quiz the ruslt is array os possible country choices, this function pics one to display
    let placeArray = JSON.parse(localStorage.getItem('Destination'));
    if (placeArray.length == 0) {
        return
    } else {
        theChoice = placeArray[Math.floor(Math.random() * placeArray.length)]
    }
}

let theCountry = '' //this will be randomly chosen out of array of possible countries


function findHolidays() {
    //this function matches the personality type and holiday and creates text to be added on the website
    for (let i = 0; i < outcomes.length; i++) {
        if (outcomes[i].name == theChoice) {
            city = outcomes[i].places[personality][0]
            type = outcomes[i].places[personality][1]
            console.log(city)
            console.log(type)
        }
    }
    $('#results-title').text(`${type} in ${theChoice}`)
    $("#holiday-description").text(`Great! Based on our personality type assessment you match ${personality} type of
 personality. Therefore ${type} in ${theChoice} seems like the best choice for you! Check out our hotel, restaurant and attraction suggestions below! For this type of holiday we believe ${city} would be the best place to make it happen!`)

}

let geoID;
let hotelID;
let restaurantID;
let attractionID;

const apiKeyTravelAdvisor = '536ff355c8mshd9ba3e88969d743p1bde80jsn7f1737cb1dca'
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
    geoID = cityURL.substring(cityURL.indexOf("-") + 2, cityURL.indexOf("-", cityURL.indexOf("-") + 1));
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

    function fetchHotel() {

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

                function fetchHotelDetails() {
                    fetch('https://travel-advisor.p.rapidapi.com/hotels/v2/get-details?currency=USD&units=km&lang=en_US', hotelDetails)
                        .then(response3 => response3.json())
                        .then(response3 => {

                            console.log("This is the output of hotels/v2/get-details:");
                            console.log(response3);
                            var hotelName = response3.data.AppPresentation_queryAppDetailV2[0].container.navTitle;
                            console.log(hotelName);
                            var hotelURL = response3.data.AppPresentation_queryAppDetailV2[0].container.shareInfo.webUrl;
                            console.log(hotelURL);
                            var hotelAbout;


                            for (i = 0; i < response3.data.AppPresentation_queryAppDetailV2[0].sections.length; i++) {
                                if ('about' in response3.data.AppPresentation_queryAppDetailV2[0].sections[i]) {
                                    if (response3.data.AppPresentation_queryAppDetailV2[0].sections[i].about == null || response3.data.AppPresentation_queryAppDetailV2[0].sections[i].about == undefined) {
                                        hotelAbout = (`You can enjoy a nice stay at this hotel in ${city}!`)
                                    } else hotelAbout = response3.data.AppPresentation_queryAppDetailV2[0].sections[i].about;
                                }
                            }

                            if (hotelAbout === undefined || hotelAbout === null) {
                                hotelAbout = (`You can enjoy a nice stay at this hotel in ${city}!`)
                            }


                            console.log(hotelAbout);
                            var hotelImg = response3.data.AppPresentation_queryAppDetailV2[0].sections[0].albumPhotos[0].data.photoSizeDynamic.urlTemplate;
                            var hotelImgFinal = hotelImg.replace("{width}", 1000)
                            console.log(hotelImgFinal);

                            $("#hotel-btn").attr("href", hotelURL);
                            $("#hotel-title").text(hotelName);
                            $("#hotel-about").text(hotelAbout);
                            $("#hotel-img").attr("src", hotelImgFinal);
                        })
                        .catch(err => console.error(err));
                }

                if (geoID.length > 0 && hotelID > 0) {
                    setTimeout(fetchHotelDetails, 1000);
                } else setTimeout(fetchHotelDetails, 3000);

            })
            .catch(err => console.error(err));
    }
    if (geoID.length > 0 && hotelID > 0) {
        setTimeout(fetchHotel, 1000);
    } else setTimeout(fetchHotel, 3000);



    // defines filters to use for the restaurant list
    function fetchRestaurant() {

        const restaurantList = {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                'X-RapidAPI-Key': apiKeyTravelAdvisor,
                'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
            },
            body: `{"geoId":${geoID},"partySize":2,"reservationTime":"2023-03-07T20:00","sort":"POPULARITY","sortOrder":"desc","filters":[{"id":"establishment","value":["10591"]}],"updateToken":""}`
        };

        // fetches restaurant list based on filters above and gives us the first restaurant id
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

                function fetchRestaurantDetails() {
                    fetch('https://travel-advisor.p.rapidapi.com/restaurants/v2/get-details?currency=USD&units=km&lang=en_US', restaurantDetails)
                        .then(response3 => response3.json())
                        .then(response3 => {

                            console.log("This is the output of restaurants/v2/get-details:");
                            console.log(response3);
                            var restaurantName = response3.data.AppPresentation_queryAppDetailV2[0].container.navTitle;
                            console.log(restaurantName);
                            var restaurantURL = response3.data.AppPresentation_queryAppDetailV2[0].container.shareInfo.webUrl;
                            console.log(restaurantURL);
                            var restaurantAbout;

                            for (i = 0; i < response3.data.AppPresentation_queryAppDetailV2[0].sections.length; i++) {
                                if ('about' in response3.data.AppPresentation_queryAppDetailV2[0].sections[i]) {
                                    if (response3.data.AppPresentation_queryAppDetailV2[0].sections[i].about == null || response3.data.AppPresentation_queryAppDetailV2[0].sections[i].about == undefined) {
                                        restaurantAbout = (`Try this amazing restaurant in ${city} for a great gastronomic experience!`)
                                    } else restaurantAbout = response3.data.AppPresentation_queryAppDetailV2[0].sections[i].about;
                                }
                            }

                            console.log(restaurantAbout);

                            if (restaurantAbout === undefined || restaurantAbout === null) {
                                restaurantAbout = (`Try this amazing restaurant in ${city} for a great gastronomic experience!`)
                            }

                            var restaurantImg;


                            if ('albumPhotos' in response3.data.AppPresentation_queryAppDetailV2[0].sections[0]) {
                                restaurantImg = response3.data.AppPresentation_queryAppDetailV2[0].sections[0].albumPhotos[0].data.photoSizeDynamic.urlTemplate;
                                var restaurantImgFinal = restaurantImg.replace("{width}", 1000);
                                $("#restaurant-img").attr("src", restaurantImgFinal);
                            }


                            console.log(restaurantImgFinal);


                            $("#restaurant-btn").attr("href", restaurantURL);
                            $("#restaurant-title").text(restaurantName);
                            $("#restaurant-about").text(restaurantAbout);
                            // $("#restaurant-img").attr("src", restaurantImgFinal);

                        })
                        .catch(err => console.error(err));
                }
                if (geoID.length > 0 && restaurantID > 0) {
                    setTimeout(fetchRestaurantDetails, 2000);
                } else setTimeout(fetchRestaurantDetails, 2000);
            })
            .catch(err => console.error(err));

    }

    if (geoID.length > 0 && restaurantID > 0) {
        setTimeout(fetchRestaurant, 2000);
    } else setTimeout(fetchRestaurant, 2000);

    // defines filters to use for the attraction list
    function fetchAttraction() {
        const attractionList = {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                'X-RapidAPI-Key': apiKeyTravelAdvisor,
                'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
            },
            body: `{"geoId":${geoID},"startDate":"2023-03-10","endDate":"2023-03-15","pax":[{"ageBand":"ADULT","count":2}],"sort":"TRAVELER_FAVORITE_V2","sortOrder":"asc","filters":[{"id":"category","value":["47"]},{"id":"rating","value":["40"]},{"id":"navbar","value":["ATTRACTIONOVERVIEW:-true"]}],"updateToken":""}`
        };

        // fetches attraction list based on filters above and gives us the first hotel id
        fetch('https://travel-advisor.p.rapidapi.com/attractions/v2/list?currency=USD&units=km&lang=en_US', attractionList)
            .then(response2 => response2.json())
            .then(response2 => {
                console.log("This is the output of attractions/v2/list:");
                console.log(response2);
                attractionID = response2.data.AppPresentation_queryAppListV2[0].sections[1].singleCardContent.saveId.id;
                console.log(attractionID);
            })

            .then(details => {

                // another nested API call. uses the attraction id retrieved above to obtain attraction details
                const attractionDetails = {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json',
                        'X-RapidAPI-Key': apiKeyTravelAdvisor,
                        'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
                    },
                    body: `{"contentId":"${attractionID}","startDate":"2023-06-30","endDate":"2023-07-01","pax":[{"ageBand":"ADULT","count":2}]}`
                };

                function fetchAttractionDetails() {
                    fetch('https://travel-advisor.p.rapidapi.com/attractions/v2/get-details?currency=USD&units=km&lang=en_US', attractionDetails)
                        .then(response3 => response3.json())
                        .then(response3 => {

                            console.log("This is the output of attractions/v2/get-details:");
                            console.log(response3);
                            var attractionName = response3.data.AppPresentation_queryAppDetailV2[0].container.navTitle;
                            console.log(attractionName);
                            var attractionURL = response3.data.AppPresentation_queryAppDetailV2[0].container.shareInfo.webUrl;
                            console.log(attractionURL);
                            var attractionAbout;

                            // for (i = 0; i < response3.data.AppPresentation_queryAppDetailV2[0].sections.length; i++) {
                            //     if (response3.data.AppPresentation_queryAppDetailV2[0].sections[i].__typename = "AppPresentation_PoiAbout") {
                            //         if (response3.data.AppPresentation_queryAppDetailV2[0].sections[i].about == null || response3.data.AppPresentation_queryAppDetailV2[0].sections[i].about == undefined) {
                            //             attractionAbout = (`You should definitely see this picturesque location in ${city}!`)
                            //         } else attractionAbout = response3.data.AppPresentation_queryAppDetailV2[0].sections[i].about;
                            //     } else attractionAbout = (`You should definitely see this picturesque location in ${city}!`)
                            // }


                            for (i = 0; i < response3.data.AppPresentation_queryAppDetailV2[0].sections.length; i++) {
                                if ('about' in response3.data.AppPresentation_queryAppDetailV2[0].sections[i]) {
                                    if (response3.data.AppPresentation_queryAppDetailV2[0].sections[i].about == null || response3.data.AppPresentation_queryAppDetailV2[0].sections[i].about == undefined) {
                                        attractionAbout = (`You should definitely see this picturesque location in ${city}!`)
                                    } else attractionAbout = response3.data.AppPresentation_queryAppDetailV2[0].sections[i].about;
                                }
                            }

                            if (attractionAbout === undefined || attractionAbout === null) {
                                attractionAbout = (`You should definitely see this picturesque location in ${city}!`)
                            }

                            console.log(attractionAbout);
                            var attractionImg = response3.data.AppPresentation_queryAppDetailV2[0].sections[0].albumPhotos[0].data.photoSizeDynamic.urlTemplate;
                            var attractionImgFinal = attractionImg.replace("{width}", 1000)
                            console.log(attractionImgFinal);

                            $("#attraction-btn").attr("href", attractionURL);
                            $("#attraction-title").text(attractionName);
                            $("#attraction-about").text(attractionAbout);
                            $("#attraction-img").attr("src", attractionImgFinal);
                        })
                        .catch(err => console.error(err));
                }
                if (geoID.length > 0 && attractionID > 0) {
                    setTimeout(fetchAttractionDetails, 1000);
                } else setTimeout(fetchAttractionDetails, 3000);
            })
            .catch(err => console.error(err));

    }

    if (geoID.length > 0 && attractionID > 0) {
        setTimeout(fetchAttraction, 1000);
    } else setTimeout(fetchAttraction, 3000);

});
