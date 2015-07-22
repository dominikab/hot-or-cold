
var guessCount=0;
var guessHistory=[];
var guess; 
var randomNumber;


$(document).ready(function(){

  $('.new').click(function(){
	newGame();
})


	function newGame(){
	guessCount=0;
	guessHistory=[];
	// set a random number
    $('#feedback').text('Give a number between 0 and 100');
	function random(){
		randomNumber=Math.ceil(Math.random()*100);
		console.log('The secret number is : '+randomNumber);
		return randomNumber;
	}
	random();
	
}

/*--- Display information modal box ---*/
$('.what').click(function(){
	$('.overlay').fadeIn(1000);

});

/*--- Hide information modal box ---*/
$('a.close').click(function(){
	$('.overlay').fadeOut(1000);
});

function checkGuess(guess,guessHistory){
	var feedback='';
  console.log('guess stuff in checkGuess', guess, guessHistory)
	// check if the guess occured before
	if (guessHistory.indexOf(guess)>-1){ 
		  console.log(guess,'guess in if loop');
		 feedback+='You guessed this number before ';
		}
	//check the user's guess
	if (!(Number(guess))){
		alert('you provided a string');
	} else if (guess===randomNumber){ 
		feedback='Good job!! You win!','\n',
		 'Click new game to play again';
	} else if (guess>randomNumber){
		feedback += 'You are hotter, keep guessing!';
	} else if (guess<randomNumber){
		feedback+='You are colder, keep guessing!';
	}
	$('#feedback').text(feedback);
	$('#count').text(guessCount);
}


$('#guessButton').click(function(event){
	event.preventDefault();
	makeGuess();
});

 $('#userGuesss').keypress(function (e) {
        if ((e.which && e.which == 13) || (e.keyCode && e.keyCode == 13)) {
            $('#guessButton').click();
            return false;
        } else {
            return true;
        }
    });

var makeGuess = function (){
  	guess=$('#userGuess').val();
		$('#userGuess').val(' ');
		console.log('passing argument',guess)
		
		if (Number(guess)){
			guess=Number(guess);
			console.log('guess is:', guess)
		  guessHistory.push(guess); 
		  guessCount++;
		  $('#guessList').append('<li>' +guess+ '</li>'); 
		}
		checkGuess(guess,  guessHistory.slice(0,guessHistory.length-1))
		guess='';
  };


console.log('the guessCount is at the end: '+ guessCount);

});


