document.addEventListener("keydown", function (e) {
    console.log(e.key + " " + e.keyCode);
    
    if (e.keyCode === 38 /* to use arrow or WASD: || e.keyCode === 87 */) {
        // Move player one up
        
    } else if (e.keyCode === 40) {
        // Move player down
        
    }
});

document.addEventListener("keyup", function (e) {
    console.log(e.key + " " + e.keyCode);
});