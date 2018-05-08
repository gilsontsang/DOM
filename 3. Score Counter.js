// Assigning html to variables
var p1 = document.querySelector("#playerOne");
var p2 = document.querySelector("#playerTwo");
var goalOne = document.querySelector("#goalOne");
var goalTwo = document.querySelector("#goalTwo");
var input = document.querySelector("input");
var goal = document.querySelector("p span");

// Anytime the value "changes"
// element.value reflects the value in the field. *Note, this returns a string.
// Therefore, change string to number -> Number(value)
input.addEventListener("change", function () { 
	goal.textContent = input.value;
	compareOp = Number(input.value);
});

// Takes in player one's input and checks if player one wins.
p1.addEventListener("click", function() {
	if (goalOne < compareOp && goalTwo !== compareOp) {
		goalOne++;
		playOne.textContent = goalOne;
	}
	if (goalOne === compareOp) {
		playOne.style.color = "green";
	}
});


// Takes in player two's input and checks if player two wins.
p2.addEventListener("click", function() {
	if (goalTwo < compareOp && goalOne !== compareOp) {
		goalTwo++;
		playTwo.textContent = goalTwo;
	}
	if (goalTwo === compareOp) {
		playTwo.style.color = "green";
	}
});

// Reset button. Resets the game back to original condition.
var buttonReset = document.querySelector("#reset");
buttonReset.addEventListener("click", function() {
	playOne.textContent = 0;
	playTwo.textContent = 0;
	playOne.style.color = "black";
	playTwo.style.color = "black";
	goalOne = 0;
	goalTwo = 0;
});