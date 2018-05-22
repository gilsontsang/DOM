var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var colors = generateRandomColors(6);
var squares = document.querySelectorAll(".square");
var colorDisplay = document.querySelector("#colorDisplay");
var pickedColor = pickColor();
var messageDisplay = document.querySelector("#message");
var selected = document.querySelector(".selected");

selected.addEventListener("click", function() {
	
});

resetButton.addEventListener("click", function() {
	//generate all new colors
  colors = generateRandomColors(6);
  // change colorDisplay to match picked Color
  colorDisplay.textContent = pickedColor;
  //pick a new random color from array
  pickedColor = pickColor();
  //reset h1 color back to background
  h1.style.background = "#232323";
  //reset Reset button back to New colors
  resetButton.textContent = "New colors"
  //change colors of squares
  mainProcess();
})

//initial colorDisplay
colorDisplay.textContent = pickedColor;

//initial start
mainProcess();

function mainProcess() {
	for (var i=0; i<squares.length; i++) {
	// add initial colors to squares
	squares[i].style.backgroundColor = colors[i];

	// add clicklisteners to squares
	squares[i].addEventListener("click", function() {
  	// compare color to pickedColor
  	var clickedColor = this.style.backgroundColor;
  	// cinoare color to pickedColor
	if(clickedColor === pickedColor) {
		messageDisplay.textContent = "Correct";
    changeColors(clickedColor);
    h1.style.background = clickedColor;
    resetButton.textContent = "Play Again?"
    }
  	else {
    		this.style.backgroundColor = "#232323";
      	messageDisplay.textContent = "Try Again";
    }
  })
	}
}

/*
for (var i=0; i<squares.length; i++) {
	// add initial colors to squares
	squares[i].style.backgroundColor = colors[i];

	// add clicklisteners to squares
	squares[i].addEventListener("click", function() {
  	// compare color to pickedColor
  	var clickedColor = this.style.backgroundColor;
  	// cinoare color to pickedColor
	if(clickedColor === pickedColor) {
		messageDisplay.textContent = "Correct";
    changeColors(clickedColor);
    h1.style.background = clickedColor;
    	}
  	else {
    		this.style.backgroundColor = "#232323";
      		messageDisplay.textContent = "Try Again";
    	}
  })
}
*/


function changeColors(color) {
	// loop through all squares
  for(var i=0; i < squares.length; i++) {
  // change each color to match given color
  	squares[i].style.background = color;
  }
}

function pickColor() {
	var random = Math.floor(Math.random() * colors.length);
  return colors[random];
}

function generateRandomColors(num){
	//make an array
  var arr = [];
  //repeat num times
  for(var i=0; i<num; i++) {
  	//get random color and push into arr
    arr[i] = randomColor();
  }
  //return that array
  return arr;
}

function randomColor() {
	//pick a "red" from 0 - 255
  var r = Math.floor(Math.random() * 256);
  //pick a "green" from 0 - 255
  var g = Math.floor(Math.random() * 256);
  //pick a "blue" from 0 - 255
  var b = Math.floor(Math.random() * 256);
  return "rgb(" + r + ", " + g + ", " + b + ")";
}
