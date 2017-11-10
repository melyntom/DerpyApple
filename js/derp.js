// Object creation

"use strict";

// Get the canvas element from the document
var canvas = document.getElementById("paper");

// Set canvas size
canvas.width = 840;
canvas.height = 560;

// ctx
var ctx = canvas.getContext("2d");

// Function for creating a new player
var Player = function (x, y, image, color, size, score) {
    this.x = x;
    this.y = y;
    this.image = image;
    this.color = color;
    this.size = size;
    this.score = score;
};

// Create new player, Derpy Apple
var derp = new Player(0, 275, null, "#c11313", 10, 10);
console.log(derp);

// Create new player, Happy Potato
var potato = new Player(835, 275, null, "#e2bf93", 10, 10);
console.log(potato);

// Draw players
Player.prototype.draw = function (ctx) {
    ctx.fillStyle = this.color;
    ctx.fillRect(this.x, this.y, this.size, this.size);
};
