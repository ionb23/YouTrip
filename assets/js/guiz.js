//this is proposal of possible outcomes, I am not well travelled so feel free to adjust it however u see fit,just think array like this could be useful even for creating the test itself
//there are these types of holidays : adventure(climbing mounting on rafting possibilitties on the spot), cultural (historical-ish places), escape (nature,countryside)
//beach ,citybreak
//I didn managed to actually associate some eco holidays with any of the destination but I think it still would be possible if we want Ecoholidays as posiible outcome

//we can add reagions etc and then from the test choose regien and type of holidays,use apis for suggesting hotels, flights, attractions ( if the place is not attraction
//itself as its the case occasionally egClimb Fuji) ,also I noticed there is visa api in rapid apis which might be useful for some of the destinations









const outcomes = [
    //outcome number one
    {
    budget: 'low',
    name: 'Czech Republic',
    places: {
        cityBreak: 'Prague',
        culturalHolidays: 'Cesky Krumlov',
        escapeHolidays: 'South Moravia',
    }},
    //outcome number two
    {
    budget: 'low',
    name: 'Indonesia',
    places: {
        beachHolidays: 'Yogyakarta',
        adventureHolidays: 'Bali'
    }
    },
    //outcome number three
    {
        budget:'low',
        name:'Croatia',
        places:{
        escapeHolidays: 'Krka National Park';
        beachHolidays: 'Dubrovnik'
        }

    },
    //outcome number 4 
    {
        budget:'medium',
        name:'India',
        places: {
            cityBreak: 'Mumbay',
            culturalHolidyas: 'Amrisatar',
        }
    },
    //outcome nbumber 5
    {
        buget:'high',
        name:'UAE',
        places:{
            cityBreak: 'Abu Dhabi',
            beachHolidays: 'Fujairah'
        }
    },
    //outcome number 6
    {
        budget: 'low',
        name:'Hungary',
        places:{
            culturalHolidays: 'Budapest',
            advetureHolidays: 'The Danube River'

        }
    },
    //outcome 7
    {
        budget:'medium',
        name:'Netherlands',
        places:{
            romantic: 'Ultrecht',
            cityBreak: 'Amsterdam'
        }
    },
    //oucome 8
    {
        budget:'high',
        name: 'South Korea',
        places: {
            cityBreak: 'Seoul',
            escapeHolidays: 'Bukhansen mountains'
        }
    },
    //outcome 9
    {
       budget: 'low',
       name: 'Poland',
       places:{
        culturalHolidays: 'Krakow',
        cityBreak:'Warsaw'
       } 
    },
    //outcome 10
    {
        budget:'high',
        name: 'Saudi Arabia',
        places:{
          cityBreak:'Jeddah',
            culturalHolidays:'Medina'
        }
    },
    //outcome 11
    {
        budget:'high',
        name:'Canada',
        places:{
            cityBreak: 'Toronto',
            adventureHolidays:'Whistler',
        }
    },
    //outcome 12
    {
        budget:'high',
        name :'Japan',
        places: {
            cityBreak: 'Tokyo',
            escapeHolidays: 'Yakushima',
            adventureHolidays:'Climb Fuji'
        }
    },
    //outcome 13
    {
        budget:'medium',
        name:'Greece',
        places: {
            culturalHolidays: 'Athens',
            beachHolidays: 'Crete'
        }
    },
    //outcome 14
    {
        budget:'medium',
        name:'Malaysia',
        places:{
            cityBreak:'Penang',
            beachHolidays:'Perhentian Islands'

        }
    },
    //outcome 15
    {
        budget:'medium',
        name:'Austria',
        places:{
            cityBreak: 'Vieanna',
            culturalHolidays: 'Fortress Hohensalzburg'
        }
,
    },
    //outcome 16
    {
        budget:'medium',
        name:'Turkey',
        places:{
            beachHoliday:'Antalya',
            culturalHolidays: 'Istanbul'
        }
    },
    //outcome 17
    {
        budget:'medium',
        name:'Mexico',
        places:{
            culturalHolidays: 'Mexico City',
            escapeHolidays:'Pico De Orizaba'
        }
    },
    //outcome 18
    {
        budget:'medium',
        name: 'France',
        places: {
            cityBreak: 'Paris',
            adventureHolidays: 'Chamonix',
            escapeHolidays:'Bordeaus'
        }
    },
    //outcome 19
    {   budget: 'low',
        name: 'Spain',
        places:{
            cityBreak: 'Barcelona',
            escapeHolidays:'Extremadura',
            beachHolidays: 'San Sebastian'
        }
    }
]