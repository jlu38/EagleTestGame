let colors=[
  "rgb(255, 0, 0)",
  "rgb(255, 0, 0)",
  "rgb(255, 0, 0)",
  "rgb(0, 255, 0)"
]
let pickedColor;
let squares = document.querySelectorAll(".square");
let pickedColor = colors[3];

function initialize(){
	setup();
}

//Method to create random color - randomColor
//Method to apply random color to squares - setUp
//Method - generateRandomColors

function setup(){
	// Returns array with colors of current mode size
	let currColors = generateRandomColors(4);

	//Applies each square with a color on the array
	for(let i = 0; i < squares.length; i++){
		squares[i].style.backgroundColor = colors[i];
	  
		// Adds functionality to squares when clicked
		squares[i].addEventListener("click", function(){
		  let clickedColor = this.style.backgroundColor;
		  if(pickedColor === clickedColor){
			alert("Correct");
			reset();
		  }
		  else{
			alert("Wrong");
		  }
		});
	}
}


function generateRandomColors(num){
	//make an array
	let arr = []
	//random index to place different color
	let randIndex = Math.floor(Math.random() * num);
	//selects color of the incorrect squares
	let squareColor = randomColor();
	//repeat num times
	for(let i = 0; i < num; i++){
		if(i === randIndex){
			arr.push(randomColor());
		}
		else{
			arr.push(squareColor);
		}
	}
	//return that array
	return arr;
}

function randomColor(){
	//pick a "red" from 0 - 255
	var r = Math.floor(Math.random() * 256);
	//pick a "green" from  0 -255
	var g = Math.floor(Math.random() * 256);
	//pick a "blue" from  0 -255
	var b = Math.floor(Math.random() * 256);
	return "rgb(" + r + ", " + g + ", " + b + ")";
}
