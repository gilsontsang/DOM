var numSquares = 6;
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var colors = generateRandomColors(numSquares);
var squares = document.querySelectorAll(".square");
var colorDisplay = document.querySelector("#colorDisplay");
var pickedColor = pickColor();
var messageDisplay = document.querySelector("#message");
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");

easyBtn.addEventListener("click", function() {
	hardBtn.classList.remove("selected");
	easyBtn.classList.add("selected");
  numSquares = 3;
  colors = generateRandomColors(numSquares);
  pickedColor = pickColor();
  colorDisplay.textContent = pickedColor;
  for (var i = 0; i < squares.length; i++) {
  	if(colors[i]) {
    	squares[i].style.background = colors[i];
    }
    else {
    	squares[i].style.display = "none";
    }
  }
});

hardBtn.addEventListener("click", function() {
	easyBtn.classList.remove("selected");
	hardBtn.classList.add("selected");
  numSquares = 6;
  colors = generateRandomColors(numSquares);
  pickedColor = pickColor();
  colorDisplay.textContent = pickedColor;
  for (var i = 0; i < squares.length; i++) {
  	squares[i].style.background = colors[i];
 		squares[i].style.display = "block";
  }
});

resetButton.addEventListener("click", function() {
	//generate all new colors
  colors = generateRandomColors(numSquares);
  // change colorDisplay to match picked Color
  colorDisplay.textContent = pickedColor;
  //pick a new random color from array
  pickedColor = pickColor();
  //reset h1 color back to background
  h1.style.background = "steelblue";
  //reset Reset button back to New colors
  this.textContent = "New colors"
    //reset message display
  messageDisplay.textContent = "";
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
