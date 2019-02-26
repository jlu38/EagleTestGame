var colors=[
  "https://i.makeagif.com/media/9-27-2015/NnMrSO.gif",
  "https://thumbs.gfycat.com/IcyJubilantCuscus-max-1mb.gif",
  "https://thumbs.gfycat.com/IcyJubilantCuscus-max-1mb.gif",
  "https://thumbs.gfycat.com/InnocentCheeryKitfox-small.gif"
]

var squares = document.querySelectorAll(".square");
var pickedColor = colors[3];

for(var i = 0; i < squares.length; i++){
  squares[i].style.backgroundImage = `url('${colors[i]}')`;

  squares[i].addEventListener("click", function(){
    var clickedColor = this.style.backgroundColor;
    if(pickedColor === clickedColor){
      alert("Correct");
    }
    else{
      alert("Smoke weed everyday");
    }
  });
}
