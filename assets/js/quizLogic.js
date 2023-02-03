//declearing variables
const checkboxesButton = $('#checkBtn');
const personalityPage = $('#checkboxes')
let scoreObject = {
    choleric:0,
    melancholic:0,
    phlegmatic:0,
    sanguine:0,
}

checkboxesButton.click(function(event) {
//counting checkbox values
    event.preventDefault();
	let countCholeric = 0;
	$('input[name="choleric"]:checked').each(function() {
			countCholeric++;
		});

    let countMelancholic = 0;
    $('input[name="melancholic"]:checked').each(function() {
             countMelancholic++;
         });
        
            
    let countPhlegmatic = 0;
	$('input[name="phlegmatic"]:checked').each(function() {
        countPhlegmatic++;
		});
        
    let countSanguine = 0;
	$('input[name="sanguine"]:checked').each(function() {
			countSanguine++;
		});

//counting values from the radio buttons

let opennessVal = $("input[name='openness']:checked").val();
let stabilityVal = $("input[name='stability']:checked").val(); 

if(opennessVal == 'introvert' && stabilityVal == 'calm' ){
    countPhlegmatic += 2;
} else if (opennessVal == 'introvert' && stabilityVal == 'stressed'){
    countMelancholic += 2;
} else if (opennessVal == 'extrovert' && stabilityVal == 'stressed'){
    countCholeric +=2;
} else {
    countSanguine +=2;
}
//score object
scoreObject = {
    choleric: countCholeric,
    melancholic: countMelancholic,
    phlegmatic: countPhlegmatic,
    sanguine: countSanguine,
}


//getting result
let numbersArr = Object.values(scoreObject)
let highestResult = Math.max(...numbersArr) 
let personality = getKeyByValue(scoreObject, highestResult)
console.log(personality)

//saving result for the local storage
localStorage.setItem('Personality', personality)


//hiding page with checkboxes
personalityPage.toggleClass('hide')


});



function getKeyByValue(object, value) {
    return Object.keys(object).find(key => object[key] === value);
  }
  //write if else statement to make sure that the submit button function only runse
  //when some checkboxes are ticked (try adding max) and both radios are ticked

  //logic for preferencial part of quiz
  //4 outcomes then matches few countries
  //add list of an world cousins , drop out and pick 
//counte the results of the preferencial quiz and ssign group of countries
//algorythm that will generate country with correct type of holidays and matching with test results randomly from possible all the possible outcomes




