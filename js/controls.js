// Keyboard Input for Game
var model = function (x,y,size,color){
this.x = x;
this.y = y;
this.size = size;
this.color = color;
};
var player;
document.addEventListener('keydown', function(e) {
  //console.log(e.keyCode);
    if(e.keyCode == 37) {
    }
    else if(e.keyCode == 39) {
        //right arrow
    }
    else if(e.keyCode == 38) {
        //up arrow
    }
    else if(e.keyCode == 40) {
       //down arrow
    }
});
var player2;
document.addEventListener('keydown', function(e) {
  if (e.keyCode == 87) {
  //w key
  }
  else if(e.keyCode == 65) {
    //a key
  }
  else if(e.keyCode == 83) {
    //s key
  }
  else if(e.keyCode == 68) {
    //d key
  }
          });
               
