let numSquares = 9;
let squares = document.querySelectorAll(".square");
let pickedColor;
let score = document.getElementById("scoreNum");

initialize();

function initialize(){
	setup();
	nextStage();
}

function setup(){
	// Random index to place different color
	let diffIndex = diffColorIndex();
	// Returns array with colors of current mode size
	let colors = generateRandomColors(numSquares, diffIndex);
	pickedColor = colors[diffIndex];

	//Applies each square with a color on the array
	for(let i = 0; i < numSquares; i++){
		squares[i].style.backgroundColor = colors[i];
		// Adds functionality to squares when clicked
		squares[i].addEventListener("click", function(){
		  let startTime = new Date();
		  let clickedColor = this.style.backgroundColor;
		  if(clickedColor === pickedColor){
			score.textContent++;
			nextStage();
		  }
		});
	}
}

function nextStage(){
	// Random index to place different color
	diffIndex = diffColorIndex();

	// Returns array with colors of current mode size
	let colors = generateRandomColors(numSquares, diffIndex);
	pickedColor = colors[diffIndex];
	newColors(colors);
}

function diffColorIndex(){
	let index = Math.floor(Math.random() * numSquares);
	return index;
}

function newColors(colors){
	//Applies each square with a color on the array
	for(let i = 0; i < numSquares; i++){
		squares[i].style.backgroundColor = colors[i];
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
