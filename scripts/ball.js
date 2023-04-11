// every thing about the ball

// Constant Variable
const ballRadias = 8;
let life = 3;
let animationId = 0;

//ball object
const ball = {
  x: canvas.width / 2,
  y: paddle.y - ballRadias,
  radius: ballRadias,
  speed: 0,
  dx: 5,
  dy: 5,
};

// reset ball if drop ball
function resetBall() {
  ball.x = canvas.width / 2;
  ball.y = paddle.y - ballRadias;
  ball.dx = ball.speed * (Math.random() * 2 - 1);
  ball.dy = -ball.speed;
  move = false;
  paddle.x = canvas.width / 2 - paddleWidth / 2;
  paddle.y = canvas.height - 30;

  // life-=1;

  if (life === 0) {
  //   alert("Game over!");
    life = 3;
      initBricks(canvas, levelIndex)
      score=0
      document.location.href = `/?level=${0}`
    // reset code here
    // Stop the game
    return;
  }
}

//collision detection with the canvas
function ballWallCollision() {
  if (ball.x + ball.radius > canvas.width || ball.x - ball.radius < 0) {
    ball.dx = -ball.dx;
  }
  if (ball.y - ball.radius < 0) {
    ball.dy = -ball.dy;
  }
  if (ball.y + ball.radius > canvas.height) {
    life--;
        // if(life===0) function to reset game , else 
    resetBall(); // to return ball up paddle
  }
}

//
function drawBall() {
  ctx.beginPath();
  ctx.arc(ball.x, ball.y, ball.radius, 0, Math.PI * 2);
  ctx.fillStyle = "yellow";
  ctx.fill();
  ctx.closePath();
}

function moveBall() {
  // change ball position
  ball.x += ball.dx;
  ball.y += ball.dy;
}

//collision detection with the paddle
function ballPaddleCollision() {
  if (
    ball.y > paddle.y &&
    ball.y < paddle.y + paddle.height &&
    ball.x > paddle.x &&
    ball.x < paddle.x + paddle.width
  ) {
    let point = ball.x - (paddle.x + paddle.width / 2);
    point /= paddle.width / 2;
    let a = point * (Math.PI / 3);
    ball.dx = ball.speed * Math.sin(a);
    ball.dy = -ball.speed * Math.cos(a);
    sounds.paddle.play();//add paddle sound
  }
}
