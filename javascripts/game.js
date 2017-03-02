var SLICE_WIDTH = 2;
var WAIT_TIME = 200;
var ANSWER_MAP = [
    [
        "circle,sphere",
        "images/sphere.png"
    ],
    [
        "triangle",
        "images/triangle.png"
    ],
    [
        "a",
        "images/a.png"
    ]
];
var c = document.getElementById('cvs');
var ctx = c.getContext('2d');
var level = 0;
var ivl;

newGame();

// Create a new game with a given answer and image
function newGame() {

    var img = new Image();
    console.log(level + " which is " + ANSWER_MAP[level][1]);
    img.src = ANSWER_MAP[level][1];

    img.onload = function() {
        var i = 0;
         ivl = setInterval(function() {
            if (i <= img.height) {
                ctx.clearRect(0, 0, c.width, c.height);
                ctx.drawImage(img, 0, i, img.width, SLICE_WIDTH, 30, 10, img.width, SLICE_WIDTH);
                i++;
            } else {
                i = -1 * WAIT_TIME;
            }
        }, 0.11);
    }
}

// Handle enter-key hit
function checkAnswer(e) {
    if (e.keyCode == 13) {

        var answer = document.getElementById("answer").value.toLowerCase();
        var answers = ANSWER_MAP[level][0].split(',');
        var hasWon = false;
        for (var i = 0; i < answers.length; i++) {
            if (answer == answers[i]) {
              hasWon = true;
              win();
            }
        }
        if (!hasWon) {
          document.getElementById('status').innerHTML = "Incorrect";
          console.log("Incorrect!");
        }

        document.getElementById("answer").value = "";
        return false;
    }
}

// Round has been won
function win() {
  console.log("Correct!");
  level++;

  document.getElementById('status').innerHTML = "Correct!";
  document.getElementById('level').innerHTML = "Level: " + (level+1);

  if (ANSWER_MAP.length <= level) {
    document.getElementById('status').innerHTML = "You win!";
    document.getElementById('level').innerHTML = "Thanks for playing Transform.";
    clearInterval(ivl);
    ctx.clearRect(0, 0, c.width, c.height);
  } else {
    clearInterval(ivl);
    newGame();
  }
}
