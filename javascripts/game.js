var SLICE_WIDTH = 1;
var WAIT_TIME = 200;


var c = document.getElementById('cvs');
var ctx = c.getContext('2d');

var img = new Image();
img.src = "images/sphere.png";

function sleep(delay) {
  var start = new Date().getTime();
  while (new Date().getTime() < start + delay);
}

img.onload = function() {
  var i = 0;
  var ivl = setInterval(function () {
    if (i <= img.height) {
      ctx.clearRect(0,0,c.width,c.height);
      ctx.drawImage(img, 0, i, img.width, SLICE_WIDTH, 10, 10, img.width, SLICE_WIDTH);
      i++;
    } else {
      i = -1 * WAIT_TIME;
    }
  }, 0.11);
}
