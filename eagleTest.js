var colors=[
  "rgb(255, 0, 0)",
  "rgb(255, 0, 0)",
  "rgb(255, 0, 0)",
  "rgb(0, 255, 0)"
]

var squares = document.querySelectorAll(".square");
var pickedColor = colors[3];

for(var i = 0; i < squares.length; i++){
  squares[i].style.backgroundColor = colors[i];

  squares[i].addEventListener("click", function(){
    var clickedColor = this.style.backgroundColor;
    if(pickedColor === clickedColor){
      alert("Correct");
    }
    else{
      alert("Wrong");
    }
  });
}
