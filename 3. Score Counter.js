// Assigning html to variables
var p1 = document.querySelector("#playerOne");
var p2 = document.querySelector("#playerTwo");
var goalOne = document.querySelector("#playOne");
var goalTwo = document.querySelector("#playTwo");
var input = document.querySelector("input");
var goal = document.querySelector("p span");

// Starting scores
goalOne = 0;
goalTwo = 0;

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
		goalOne.textContent = goalOne;
	}
	if (goalOne === compareOp) {
		goalOne.style.color = "green";
	}
});


// Takes in player two's input and checks if player two wins.
p2.addEventListener("click", function() {
	if (goalTwo < compareOp && goalOne !== compareOp) {
		goalTwo++;
		goalTwo.textContent = goalTwo;
	}
	if (goalTwo === compareOp) {
		goalTwo.style.color = "green";
	}
});

// Reset button. Resets the game back to original condition.
var buttonReset = document.querySelector("#reset");
buttonReset.addEventListener("click", function() {
	goalOne.textContent = 0;
	goalTwo.textContent = 0;
	goalOne.style.color = "black";
	goalTwo.style.color = "black";
});
