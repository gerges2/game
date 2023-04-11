// every thing about the paddel

// Gloval Variables
const paddleHeight = 10;
const paddleWidth = 100;
let leftArrow = false; // for arror button
let rightArrow = false; //for arror button
let move = false;

// Paddle Object

const paddle = {
  x: canvas.width / 2 - paddleWidth / 2,
  y: canvas.height - 30,
  width: paddleWidth,
  height: paddleHeight,
  color: "blue",
  score: 0,
  dx: 5,
};

function drawPaddle(x, y, w, h, color) {
  ctx.beginPath();
  ctx.fillStyle = color;
  ctx.fillRect(x, y, w, h);
  ctx.closePath();
}

document.addEventListener("keydown", function (e) {
  if (e.keyCode == 37) {
    leftArrow = true;
  } else if (e.keyCode == 39) {
    rightArrow = true;
  }
});

document.addEventListener("keyup", function (e) {
  if (e.keyCode == 37) {
    leftArrow = false;
    console.log("left");
  } else if (e.keyCode == 39) {
    rightArrow = false;
    console.log("right");
  }
});

function movePaddle2() {
  //for paddle move with arrows
  if (rightArrow && paddle.x + paddle.width < canvas.width) {
    paddle.x += paddle.dx;
  } else if (leftArrow && paddle.x > 0) {
    paddle.x -= paddle.dx;
  }
}

function movePaddle() {
  //for paddle move with mouse
  canvas.addEventListener("mousemove", function (e) {
    let rect = canvas.getBoundingClientRect();

    if (e.clientX - rect.left < 97 && move == true) {
    } else {
      if (move == true) {
        paddle.x = e.clientX - rect.left - paddle.width;
      }
    }
  }); //height of paddle is 100
}
