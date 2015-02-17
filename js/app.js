
$(document).ready(function(){
	var guess; 
	var randomNumber;
	var guessCount=0;

function newGame(){
	//guessCount=0;
	// set a random number

	function random(){
 		randomNumber=Math.ceil(Math.random()*100);
		return randomNumber;
		}
	random();
	return guessCount;
	}


	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});

function checkGuess(guess){
	//alert("GUess is "+ guess)
	$('#feedback').text("HELLO WORLD");

	}

 $("#userGuess").keyup(function(event) {
        if(event.keyCode == 13){
            $("#guessButton").click();
        }
    });

	
$(".new").click(function(){
	newGame();
})

// receive the input from the textbox
$("#guessButton").click(function(){
 guess=$("#userGuess").val()
 console.log("You typed : " + guess);
 guessCount++;
 console.log(guessCount)
checkGuess(guess)
console.log("the guessCount is now "+ guessCount);
$('#count').first().text(guessCount);
return guessCount;
}) 




console.log("the guessCount is at the end: "+ guessCount)


//document.getElementById('textbox_id').value

	// initialize new game 

// take input from the user into 



});


