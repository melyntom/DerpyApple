// Object creation
const gridSize = 10;
// Function for creating a new player
var Player = function (x, y, image, color, size, score, dir, speed) {
    this.x = x;
    this.y = y;
    this.image = image;
    this.color = color;
    this.size = size;
    this.score = score;
    this.dir = dir;
    this.speed = speed;
    this.body = [{ "x": x, "y": y}];
};

// Create new player, Derpy Apple
var derp = new Player(15, 275, null, "#c11313", 20, 10, "r", 2);
console.log(derp);

// Create new player, Happy Potato
var potato = new Player(815, 275, null, "#e2bf93", 20, 10, "l", 2);
console.log(potato);

// Draw players
Player.prototype.draw = function (ctx) {
    ctx.fillStyle = this.color;
};


Player.prototype.move = function () {
    if (this.dir === "u") {
      this.y -= this.speed;
    }
    else if (this.dir === "d") {
      this.y += this.speed;
    }
    else if (this.dir === "l") {
     this.x -= this.speed;
    }
    else if (this.dir === "r") {
     this.x += this.speed;
    }
    
    this.body.unshift({
        x: this.body[0].x + this.x,
        y: this.body[0].y + this.y
    });
};

Player.prototype.changeDir = function (dir) {
    if (dir === "u" && this.dir !== "d" ||
      dir === "d" && this.dir !== "u" ||
      dir === "l" && this.dir !== "r" ||
      dir === "r" && this.dir !== "l") {
    this.dir = dir;
}
};
