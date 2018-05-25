var numSquares = 6;
var colors = [];
var pickedColor;
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var squares = document.querySelectorAll(".square");
var colorDisplay = document.querySelector("#colorDisplay");
var messageDisplay = document.querySelector("#message");
var modeButtons = document.querySelectorAll(".mode");

//initialize the game
init();

//reset button
resetButton.addEventListener("click", function() {
	reset();
})


function init() {
  setupModeButtons();
  setupSquares();
  reset();
}

function setupSquares() {
  //square event listeners
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

//mode buttons event listeners
function setupModeButtons() {
  for (var i=0; i<modeButtons.length;i++) {
    modeButtons[i].addEventListener("click", function() {
      modeButtons[0].classList.remove("selected");
      modeButtons[1].classList.remove("selected");
      this.classList.add("selected");
      this.textContent === "Easy" ? numSquares = 3: numSquares = 6;   
      reset();
    })
  }
}

//resets the game
function reset() {
  //generate all new colors
  colors = generateRandomColors(numSquares);
  //pick a new random color from array
  pickedColor = pickColor();
    // change colorDisplay to match picked Color
  colorDisplay.textContent = pickedColor;
  // change new game button back to default
  resetButton.textContent = "New colors";
  //reset h1 color back to background
  h1.style.background = "steelblue";
  //reset Reset button back to New colors
  this.textContent = "New colors"
    //reset message display
  messageDisplay.textContent = "";
  //change colors of squares
  for(var i = 0; i < squares.length; i++) {
  	if(colors[i]) {
    	squares[i].style.display = "block";
    	squares[i].style.background = colors[i];
    }
    else {
    	squares[i].style.display = "none";
    }
  }
}

//changes colors
function changeColors(color) {
	// loop through all squares
  for(var i=0; i < squares.length; i++) {
  // change each color to match given color
  	squares[i].style.background = color;
  }
}

//picks random color
function pickColor() {
	var random = Math.floor(Math.random() * colors.length);
  return colors[random];
}

//generates random colors
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

//random rgb generator
function randomColor() {
	//pick a "red" from 0 - 255
  var r = Math.floor(Math.random() * 256);
  //pick a "green" from 0 - 255
  var g = Math.floor(Math.random() * 256);
  //pick a "blue" from 0 - 255
  var b = Math.floor(Math.random() * 256);
  return "rgb(" + r + ", " + g + ", " + b + ")";
}
