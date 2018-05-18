// Query Selectors
var playerOneScore = document.querySelector("#playerOneScore");
var playerTwoScore = document.querySelector("#playerTwoScore");
var playUpTo = document.querySelector("p span");
var input = document.querySelector("input");
var playerOneButton = document.querySelector("#playerOneButton");
var playerTwoButton = document.querySelector("#playerTwoButton");
var reset = document.querySelector("#reset");

// Starting counters
var playerOneCounter = 0; 
var playerTwoCounter = 0; 
var compareNumbers = 5;

// Sets how many points the game goes up to.
input.addEventListener("change", function() {
	playUpTo.textContent = input.value;
	compareNumbers = Number(input.value);
});

// For each click... the numbers go up for player one. Wow!
playerOneButton.addEventListener("click", function() {
	if (playerOneCounter < compareNumbers && playerTwoCounter !== compareNumbers) {
  		playerOneCounter++;
  		playerOneScore.textContent = playerOneCounter;
  	}	
  	if (playerOneCounter === compareNumbers) {
  		playerOneScore.style.color = "green";
  	}
});

// For each click... the numbers go up for player two. Wow!
playerTwoButton.addEventListener("click", function() {
	if (playerTwoCounter < compareNumbers && playerOneCounter !== compareNumbers) {
		playerTwoCounter++;
  		playerTwoScore.textContent = playerTwoCounter;
  	}
	if (playerTwoCounter === compareNumbers) {
  		playerTwoScore.style.color = "green";
  	}
});

// Resets game
reset.addEventListener("click", function() {
	playerOneScore.textContent = 0;
	playerTwoScore.textContent = 0;
	playerOneCounter = 0;
	playerTwoCounter = 0;
	playerOneScore.style.color = "black";
	playerTwoScore.style.color = "black";
});
