let numSquares = 4;
let squares = document.querySelectorAll(".square");
let pickedColor;

initialize();

function initialize(){
	setup();
}

//Method to create random color - randomColor
//Method to apply random color to squares - setUp
//Method - generateRandomColors

function setup(){
	// Random index to place different color
	let diffColorIndex = Math.floor(Math.random() * numSquares);

	// Returns array with colors of current mode size
	let colors = generateRandomColors(numSquares, diffColorIndex);

	//Applies each square with a color on the array
	for(let i = 0; i < numSquares; i++){
		squares[i].style.backgroundColor = colors[i];
	  
		// Adds functionality to squares when clicked
		squares[i].addEventListener("click", function(){
		  let clickedColor = this.style.backgroundColor;
		  if(pickedColor === clickedColor){
			alert("Correct");
			initialize();
		  }
		  else{
			alert("Wrong");
		  }
		});
	}
}


function generateRandomColors(numSquares, diffColorIndex){
	// Make an array
	let arr = []
	// Selects color of the incorrect squares
	let squareColor = randomColor();
	pickedColor = squareColor;

	// arr holds the different colors at a corresponding index
	for(let i = 0; i < numSquares; i++){
		if(i === diffColorIndex){
			arr.push(randomColor());
		}
		else{
			arr.push(squareColor);
		}
	}
	return arr;
}

function randomColor(){
	// Pick a "red" from 0 - 255
	var r = Math.floor(Math.random() * 256);
	// Pick a "green" from  0 -255
	var g = Math.floor(Math.random() * 256);
	// Pick a "blue" from  0 -255
	var b = Math.floor(Math.random() * 256);
	return "rgb(" + r + ", " + g + ", " + b + ")";
}
