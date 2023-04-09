// every thing about the ball


// Constant Variable
const ballRadias = 8;
let life = 3;

//ball object
const ball = {
    x: canvas.width,
    y: paddle.y + paddleWidth / 2,
    radius: ballRadias,
    speed: 5,
    dx: 5,
    dy: 5,
}

// reset ball if drop ball 
function resetBall() {
    ball.x = canvas.width / 2;
    ball.y = paddle.y - ballRadias;
    ball.dx = ball.speed * (Math.random() * 2 - 1);
    ball.dy = -ball.speed;
    move = false;
    ball.speed = 5;
    paddle.x = window.innerWidth / 2 - paddleWidth / 2;
    paddle.y = window.innerHeight - 30;
    // life-=1;
    console.log(life);
    if (life === 0) {
      alert("Game over!");
      // Stop the game
      cancelAnimationFrame(animationId); //animation
      return;
    }
  }


  //collision detection with the canvas
  function ballWallCollision() {
    if (ball.x + ball.radius > canvas.width || ball.x - ball.radius < 0) {
        ball.dx = -ball.dx
    }
    if (ball.y - ball.radius < 0) {
        ball.dy = -ball.dy
    }
    if (ball.y + ball.radius > canvas.height) {
        life--;
        resetBall();// to return ball up paddle 
    }
}

//
function drawBall() {
    ctx.beginPath();
    ctx.arc(ball.x, ball.y, ball.radius, 0, Math.PI * 2)
    ctx.fillStyle = 'yellow';
    ctx.fill()
    ctx.closePath();
}

function moveBall() {// change ball position
    ball.x += ball.dx
    ball.y += ball.dy
}

//collision detection with the paddle
function ballPaddleCollision() {
    if (ball.y > paddle.y && ball.y < paddle.y + paddle.height
        && ball.x > paddle.x && ball.x < paddle.x + paddle.width
    ) {
        let point = ball.x - (paddle.x + paddle.width / 2);
        point /= (paddle.width / 2);
        let a = point * (Math.PI / 3);
        ball.dx = ball.speed * Math.sin(a)
        console.log(ball.dx)
        ball.dy = - ball.speed * Math.cos(a)
        console.log(ball.dy)

    }
}