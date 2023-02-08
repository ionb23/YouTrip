//this is proposal of possible outcomes, I am not well travelled so feel free to adjust it however u see fit,just think array like this could be 
//useful even for creating the test itself
//there are these types of holidays : adventure(climbing mounting on rafting possibilitties on the spot), cultural (historical-ish places), 
//escape (nature,countryside)
//beach ,citybreak
//I didn managed to actually associate some eco holidays with any of the destination but I think it still would be possible if we 
//want Ecoholidays as posiible outcome

//we can add reagions etc and then from the test choose regien and type of holidays,use apis for suggesting hotels, flights, 
//attractions ( if the place is not attraction
//itself as its the case occasionally egClimb Fuji) ,also I noticed there is visa api in rapid apis which might be useful for some of the destinations
// const europeanFood = []

// const southAsian = []
// //season = [any, hot, cold]
// const southAmerican = []

// const middleEastern = []
const outcomes = [
    //outcome number one
    {
        name: 'Czech Republic',
        places: {
            'choleric': ['Prague', 'City break'],
            'sanguine': ['Cesky Krumlov', 'Explore history and culture'],
            'phlegmatic': ['Brno', 'Escape holiday'],
            'melancholic': ['Brno', 'Escape holiday'],
        }
    },
    //outcome number two
    {
        name: 'Indonesia',
        places: {
            'choleric': ['Bali', 'City break'],
            'sanguine': ['Raja Ampat', 'Adveturous holidays'],
            'phlegmatic': ['Yogyakarta', 'Beach holidays'],
            'melancholic': ['Yogyakarta', 'Beach holidays'],
        }
    },
    //outcome number three
    {
        budget: 'low',
        name: 'Croatia',
        places: {
            'choleric': ['Split', 'City break'],
            'sanguine': ['Split', 'City break'],
            'phlegmatic': ['Skradin', 'Escape holidays'],
            'melancholic': ['Dubrovnik', 'Beach holidays'],
        }

    },
    //outcome number 4 
    {

        name: 'India',
        places: {
            'choleric': ['Mumbay', 'Ctiy break'],
            'sanguine': ['Amritsar', 'Explore history and culture'],
            'melancholic': ['Ranthambore', 'Escape holidays'],
            'phlegmatic': ['Goa', 'Beach Holidays']
        }
    },
    //outcome nbumber 5
    {
        name: 'UAE',
        places: {
            'choleric': ['Abu Dhabi', 'Ctiy break'],
            'sanguine': ['Dubai', 'City break'],
            'melancholic': ['Fujairah', 'Beach holidays'],
            'phlegmatic': ['Fujairaha', 'Beach Holidays']
        }
    },
    //outcome number 6
    {
        name: 'Hungary',
        places: {
            'melancholic': ['Budapest', 'Romantic holidays'],
            'sanguine': ['Baja', 'Adventurous holidays'],
            'choleric': ['Budapest', 'City Break'],
            'phlegmatic': ['Egerszalók', 'Escape holidays']

        }
    },
    //outcome 7
    {
        name: 'Netherlands',
        places: {
            'choleric': ['Amsterdam', 'City break'],
            'sanguine': ['Amsterdam', 'Escape holidays'],
            'melancholic': ['Amsterdam', 'Romantic holidays'],
            'phlegmatic': ['Kinderdijk', 'Escape holidays']
        }
    },
    //oucome 8
    {

        name: 'South Korea',
        places: {
            'choleric': ['Seoul', 'City Break'],
            'sanguine': ['Seoul', 'City Break'],
            'phlegmatic': ['Uijeongbu', 'Escape holidays'],
            'melancholic': ['Uijeongbu', 'Escape holidays'],
        }
    },
    //outcome 9
    {
        name: 'Poland',
        places: {
            'sanguine': ['Krakow', 'Explore history and culture'],
            'choleric': ['Krakow', 'Explore history and culture'],
            'melancholic': ['Krakow', 'Romantic holidays'],
            'phlegmatic': ['Gdańsk', 'Escape holidays']
        }
    },
    //outcome 10
    {
        name: 'Saudi Arabia',
        places: {
            'choleric': ['Jeddah', 'City Break'],
            'sanguine': ['Medina', 'Adventurous holidays'],
            'phlegmatic': ['Medina', 'Escape holidays'],
            'melancholic': ['Dammam', 'Escape holidays']
        }
    },
    //outcome 11
    {
        //budget:'high',
        name: 'Canada',
        places: {
            'choleric': ['Toronto', 'City Break'],
            'sanguine': ['Whistler', 'Adventurous holidays'],
            'melancholic': ['Yellowknife', 'Escape holidays'],
            'phlegmatic': ['Halifax', 'Escape Holidays']
        }
    },
    //outcome 12
    {
        //budget:'high',
        name: 'Japan',
        places: {
            'choleric': ['Tokyo', 'City break'],
            'phlegmatic': ['Yakushima', 'Escape holidays'],
            'melancholic': ['Yakushima', 'Escape holidays'],
            'sanguine': ['Fujiyoshida', 'Adventurous holidays']
        }
    },
    //outcome 13
    {
        name: 'Greece',
        places: {
            'choleric': ['Athens', 'Explore history and culture'],
            'sanguine': ['Athens', 'Explore history and culture'],
            'melancholic': ['Crete', 'Beach holidays'],
            'phlegmatic': ['Crete', 'Beach holidays'],
        }
    },
    //outcome 14
    {
        name: 'Malaysia',
        places: {
            'choleric': ['Penang', 'City break'],
            'sanguins': ['Penang', 'City break'],
            'phlegmatic': ['Kelantan', 'BeachHolidays'],
            'melancholic': ['Kelantan', 'BeachHolidays'],

        }
    },
    //outcome 15
    {
        name: 'Austria',
        places: {
            'choleric': ['Vienna', 'Explore history and culture'],
            'melancholic': ['Vienna', 'Romantic holidays'],
            'sanguine': ['Vienna', 'City break'],
            'phlegmatic': ['Vienna', 'Romantic Holidays']
        }
        ,
    },
    //outcome 16
    {
        name: 'Turkey',
        places: {
            'melancholic': ['Antalya', 'Beach holiday'],
            'phlegmatic': ['Antalya', 'Beach holiday'],
            'choleric': ['Istanbul', 'Explore history and culture'],
            'sanguine': ['Istanbul', 'Explore history and culture'],
        }
    },
    //outcome 17
    {
        name: 'Mexico',
        places: {
            'sanguine': ['Mexico City', 'Explore history and culture'],
            'choleric': ['Mexico City', 'Explore history and culture'],
            'melancholic': ['Tlachichuca', 'Escape holidays'],
            'phlegmatic': ['Tlachichuca', 'Escape holidays'],
        }
    },
    //outcome 18
    {
        name: 'France',

        places: {
            'choleric': ['Paris', 'City break'],
            'sanguine': ['Chamonix', 'Adventurous holidays'],
            'phlegmatic': ['Bordeaux', 'Escape holidays'],
            'melancholic': ['Bordeaux', 'Escape holidays'],
        }
    },
    //outcome 19
    {
        name: 'Spain',
        places: {
            'choleric': ['Barcelona', 'City break'],
            'phlegmatic': ['Extremadura', 'Escape holidays'],
            'melancholic': ['San Sebastian', 'Beach Holidays'],
            'sanguine': ['Barcelona', 'City Break']
        }
    }
]