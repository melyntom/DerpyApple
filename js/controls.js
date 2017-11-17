// Keyboard Input for Game

var keyboard = {
  u: false,
  downArrow: false,
  l: false,
  r: false,
  w: false,
  a: false,
  s: false,
  down: false
};

 document.addEventListener("keydown", function(e) {
      if (e.keyCode == 65) {
          keyboard.a = true,
            apple.changeDir("l");
      }
      else if (e.keyCode == 87) {
          keyboard.w = true,
        apple.changeDir("u");
      }
      else if (e.keyCode == 68) {
          keyboard.d = true,
            apple.changeDir("r");
      }
      else if (e.keyCode == 83) {
          keyboard.s = true,
            apple.changeDir("d");
      }
      else if (e.keyCode == 37) {
          keyboard.l = true,
            derp.changeDir = "l";
      }
      else if (e.keyCode == 38) {
          keyboard.u = true,
            derp.changeDir("u");
      }
      else if (e.keyCode == 39) {
          keyboard.r = true,
            derp.changeDir("r");
      }
      else if (e.keyCode == 40) {
          keyboard.downArrow = true,
            derp.changeDir("d");
      }
  });

 document.addEventListener("keyup", function(e) {
      if (e.keyCode == 65) {
          keyboard.a = false;
      }
      else if (e.keyCode == 87) {
          keyboard.w = false;
      }
      else if (e.keyCode == 68) {
          keyboard.d = false;
      }
      else if (e.keyCode == 83) {
          keyboard.s = false;
      }
      else if (e.keyCode == 37) {
          keyboard.l = false;
      }
      else if (e.keyCode == 38) {
          keyboard.u = false;
      }
      else if (e.keyCode == 39) {
          keyboard.r = false;
      }
      else if (e.keyCode == 40) {
          keyboard.downArrow = false;
      }
  });
