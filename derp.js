// Get the canvas element from the document
var canvas = document.getElementById("paper");

var ctx = canvas.getContext("2d");

// Function for creating a new player
var Player = function (x, y, image, size, score) {
    this.x = x;
    this.y = y;
    this.image = image;
    this.size = size;
    this.score = score;
};

// Create a new player, Derpy Apple
var derp = new Player(0, 0, 10, 10, 10);
console.log(derp);

// Create a new player, Happy Potato
var potato = new Player(null, null, null, null);
console.log(potato);

Player.prototype.draw = function (ctx) {
    ctx.fillStyle = "blueviolet";
    ctx.fillRect (this.x, this.y, this.size, this.size);
}

function update() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    derp.draw (ctx);
    derp.x++;
    
    requestAnimationFrame(update);
}

update();
