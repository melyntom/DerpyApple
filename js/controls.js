// Keyboard Input for Game
var canvas = document.querySelector('#canvas');
var context = canvas.getContext('2d');

var x = 0;
var y = 0;

context.rect(x, y, 100, 100);
context.stroke();

function move(e){
  if(e.keyCode == 39) { //right arrow 
    x += 5;
  }
  if(e.keyCode == 37) { //left arrow 
    x -= 5;
  }
  if(e.keyCode == 40) {
     y += 5;
  }
  if(e.keyCode == 38) {
    y -= 5;
  }
  canvas.width=canvas.width;
  context.rect(x,y,100,100);
  context.stroke();
}

document.onkeydown = move;
               
