// Movement loops code

function update() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    derp.draw (ctx);
    potato.draw (ctx);
    derp.x++;
    potato.x--;
    
    requestAnimationFrame(update);
}

update();
