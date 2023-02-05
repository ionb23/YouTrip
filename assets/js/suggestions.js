let theChoice = ''
let personality = localStorage.getItem('Personality')




function getCountry (){
    
let placeArray = JSON.parse(localStorage.getItem('Destination'));
if(placeArray.length ==0){
    return
}else{
theChoice = placeArray[Math.floor(Math.random() * placeArray.length)]
}}

let theCountry = '' //this will be randomly chosen out of array of possible countries


function getCountry (){
    
let placeArray = JSON.parse(localStorage.getItem('Destination'));
if(placeArray.length ==0){
    return
}else{
theChoice = placeArray[Math.floor(Math.random() * placeArray.length)]
}};
let city = '';
let type ='';
function findHolidays(){
for(let i =0; i <outcomes.length; i++ ){
    if (outcomes[i].name == theChoice){
        city = outcomes[i].places[personality][0]
        type = outcomes[i].places[personality][1]
        console.log(city)
        console.log(type)
    }
}
}




// {
//     name: 'Czech Republic',
//     places: {
//         choleric: ['Prague','City break'],
//         sanguine: ['Cesky Krumlov','Explore history and culture'],
//         phlegmatic: ['South Moravia','Escape holiday'],
//         melancholic: ['South Moravia','Escape holiday'],
//     }},