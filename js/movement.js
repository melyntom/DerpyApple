// Movement loops code
function update() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    derp.draw (ctx);
    derp.x++;
    
    requestAnimationFrame(update);
}

update();
