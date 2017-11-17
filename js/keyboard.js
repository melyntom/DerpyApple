// Keyboard Input for Game
/*
//divides canvas by 10
var gridSize = 10;

// game speed in a set interval
var gameSpeed = 100;
let interval;

// creating the derpy apple 'player' 
var derp = {
  init: function(w, h, size){
  this.dir = "d";
  this.size = size;
    
    //center of the screen
    var center = {
      x: (w/ 2 / this.size | 0) *this.size,
      y: (w/ 2/ this.size | 0) * this.size
    };
    
    
  this.body = [];
    for (let i = 0; i < 3; i++) {
      this.body.push({
        x: center.x,
        y: center.y - i * this.size
      });
    }
  },
  
  //in need of a drawing function of the player
  
  //changes the direction of the apple
  changeDir: function (dir) {
    if (dir == "u") {
      this.dir = dir;
    }  
    if (dir == "d") {
      this.dir = dir;
    } 
    if (dir == "r") {
      this.dir = dir;
    } 
    if (dir == "l") {
      this.dir = dir;
    } 
},  
 
  //move function the apple where the apple is pointing towards
  move: function(w, h) { //head of the apple
  var head = {
  x: this.body[0].x,
  y: this.body[0].y
};
    if (this.dir == "u") { // 0 is the head
      this.body[0].y -= this.size;
    }
    else if (this.dir == "d") {
      this.body[0].y += this.size;
    }
    else if (this.dir == "l") {
      this.body[0].x -= this.size;
    }
    else if (this.dir == "r") {
      this.body [0].x += this.size;
    }
    this.body.splice(1, 0, head);
}
  };

//initizilation function to redraw canvas
function init() {
  derp.init(canvas.width, canvas.height, gridSize);
  
    document.addEventListener("keydown", function(e) {
      if (e.keyCode == 37) {
        derp.changeDir("l");
      }
      else if (e.keyCode == 38) {
        derp.changeDir("u");
      }
      else if (e.keyCode == 39) {
        derp.changeDir("r");
      }
      else if (e.keyCode == 40) {
        derp.changeDir("d");
      }
  });
  
  //interval for gamespeed
    clearInterval(interval);
    interval = setInterval(update, gameSpeed);
  }
init();
*/
