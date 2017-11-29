// Movement loops code

function update() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    derp.draw (ctx);
    potato.draw (ctx);
    derp.move();
    potato.move();
    
    requestAnimationFrame(update);
}

update();
