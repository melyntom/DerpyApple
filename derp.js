// Get the canvas element from the document
var canvas = document.getElementById("paper");

// Function for creating a new player
var Player = function (xStart, yStart, xCurrent, yCurrent, , score) {
    this.xStart = xStart;
    this.yStart = yStart;
    this.xCurrent = xCurrent;
    this.yCurrent = yCurrent;
    this.
    this.score = score;
};

// Create a new player, Derpy Apple
var apple = new Player(null, null, null, null, , null);
console.log(apple);

// Create a new player, Happy Potato
var potato = new Player(null, null, null, null, , null);
console.log(potato);
