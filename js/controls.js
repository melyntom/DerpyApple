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
        apple.changeDir("l"),
          keyboard.a = true;
      }
      else if (e.keyCode == 87) {
        apple.changeDir("u"),
          keyboard.w = true;
      }
      else if (e.keyCode == 68) {
        apple.changeDir("r"),
          keyboard.d = true;
      }
      else if (e.keyCode == 83) {
        apple.changeDir("d"),
          keyboard.s = true;
      }
  });
    document.addEventListener("keydown", function(e) {
      if (e.keyCode == 37) {
        derp.changeDir("l"),
          keyboard.l = true;
      }
      else if (e.keyCode == 38) {
        derp.changeDir("u"),
          keyboard.u = true;
      }
      else if (e.keyCode == 39) {
        derp.changeDir("r"),
          keyboard.r = true;
      }
      else if (e.keyCode == 40) {
        derp.changeDir("d"),
          keyboard.downArrow = true;
      }
  });
