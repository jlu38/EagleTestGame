let numSquares = 9,
	pickedColor,
	colors,
	diffIndex,
	squares = document.querySelectorAll(".square"),
	score = document.getElementById("scoreNum"),
	remainingTime = document.getElementById("remainTime"),
	timer, 
	timeLimitInSeconds,
	countdownEnd,
	diffColor,
	resetButton = document.getElementById("reset");

initialize();

function initialize(){
	setup();
	nextStage();
}

// Sets up score, remaining time, and the squares with colors
function setup(){
	//Setup score and time
	score.textContent = 0;
	timeLimitInSeconds = 60;
	remainingTime.textContent = timeLimitInSeconds;
	squareClicked = false;
	countdownEnd = false;
	hasTimerStarted = false;

	// Determines random index to place different color
	diffIndex = diffColorIndex();

	// Returns array with colors of current mode size
	colors = generateRandomColors(numSquares, diffIndex);
	pickedColor = colors[diffIndex];
	
	//Applies each square with a color on the array
	for(let i = 0; i < numSquares; i++){
		squares[i].style.backgroundColor = colors[i];

		// Adds functionality to squares when clicked
		squares[i].addEventListener("click", function(){
		  	let countdown = setInterval(function(){
				countdownEnd = true;
			  }, timeLimitInSeconds*1000);
			
			// Score will be incremented if color is chosen correctly and countdown will decrement each second
			let clickedColor = this.style.backgroundColor;
			// console.log("pickedColor: " + pickedColor);

			// console.log("clickedcolor: " + clickedColor);			
			if(clickedColor === pickedColor && !countdownEnd){
				if(!hasTimerStarted){
					updateTimer();
					hasTimerStarted = true;
				}
				score.textContent++;
				nextStage();
			}
		});

	}
}

// Resets game when reset button is clicked
resetButton.addEventListener("click", function(){
	clearTimeout(timer);
	setup();
})

// Updates the remaining time each second once a square is cilcked
function updateTimer(){
	timeLimitInSeconds--;
	remainingTime.textContent = timeLimitInSeconds;
	if(timeLimitInSeconds < 1){
		clearTimeout(timer);
		remainingTime.textContent = 0;
	}
	timer = setTimeout('updateTimer()', 1000);
}

// Applies new colors to the squares after the first square is correctly quessed
function nextStage(){
	// Random index to place different color
	diffIndex = diffColorIndex();

	// Returns array with colors of current mode size
	let colors = generateRandomColors(numSquares, diffIndex);
	pickedColor = colors[diffIndex];
	newColors(colors);
}

// Selects the index for the square with the different color
function diffColorIndex(){
	let index = Math.floor(Math.random() * numSquares);
	return index;
}

// Applies each square with a color on the array
function newColors(colors){
	for(let i = 0; i < numSquares; i++){
		console.log(colors[i]);								//REMOVE LATER
		squares[i].style.backgroundColor = colors[i];
	}
}

// Stores the colors onto an array and returns it
function generateRandomColors(numSquares, diffColorIndex){
	let arr = [];
	// Selects color of the incorrect squares
	let squareColor = randomColor();
	pickedColor = squareColor;

	// arr holds the different colors at a corresponding index
	for(let i = 0; i < numSquares; i++){
		if(i === diffColorIndex){
			arr.push(/*diffColor*/randomColor());
		}
		else{
			arr.push(squareColor);
		}
	}
	return arr;
}

// Generates a random color
function randomColor(){
	// Pick a "red" from 0 - 255
	let r = Math.floor(Math.random() * 256),
	// Pick a "green" from  0 -255
		g = Math.floor(Math.random() * 256),
	// Pick a "blue" from  0 -255
		b = Math.floor(Math.random() * 256);
	// diffColor = selectDiffColor(r, g, b);
	return "rgb(" + r + ", " + g + ", " + b + ")";
}

// function selectDiffColor(r, g, b){
// 	r += 30;
// 	g += 30;
// 	b += 30;
// 	return "rgb(" + r + ", " + g + ", " + b + ")";
// }