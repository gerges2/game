// Define Bricks Variables
let brickRowCount = 3;
let brickColumnCount = 6;
let brickWidth, brickHeight, brickPadding, bricksArea, brickOffsetLeft;
let height, width, area, padding, offset, offsetLeft;
let bricks = []; //bricks object --> ( x, y, status, color )
let score = 0;

const BRICK_LIFE = 2;

// add levels array still need some modifications
window.levels = [
  {
    rowCount: 3,
    columnCount: 5,
    ballSpeed: 2,
    paddleWidth: 120,
  },
  {
    rowCount: 4,
    columnCount: 7,
    ballSpeed: 3,
    paddleWidth: 100,
  },
  {
    rowCount: 5,
    columnCount: 10,
    ballSpeed: 4,
    paddleWidth: 80,
  },
];

//Initialize bricks in the canvas
function initBricks(canvas, levelIndex) {
  levelIndex==0?oldScore=0:levelIndex==1?oldScore=15:oldScore=43
  const level = window.levels[levelIndex];
  brickRowCount = level.rowCount;
  brickColumnCount = level.columnCount;
  ball.speed = level.ballSpeed;
  paddle.width = level.paddleWidth;

  offset = 10;
  padding = ball.radius * 4;
  area = {
    width: canvas.width - 10,
    height: canvas.height / 2,
  };
  width = area.width / level.columnCount - offset - padding;
  height = area.height / level.rowCount - offset - padding;
  offsetLeft =
    (area.width - (brickRowCount + 1) * (width + offset + padding)) /
    brickColumnCount;

  if (MODE_DEV) {
    for (let i = 0; i < brickRowCount; i++) {
      bricks[i] = [];
      for (let j = 0; j < brickColumnCount; j++) {
        bricks[i][j] = { x: 0, y: 0, status: 0, color: "#f44336" };
      }
    }

    bricks[0][0] = { x: 0, y: 0, status: BRICK_LIFE, color: "#f44336" };
    score = brickColumnCount * brickRowCount - 1;
  } else {
    for (let i = 0; i < brickRowCount; i++) {
      bricks[i] = [];
      for (let j = 0; j < brickColumnCount; j++) {
        bricks[i][j] = { x: 0, y: 0, status: BRICK_LIFE, color: "#f44336" };
      }
    }
  }
}

function drawBricks(ctx) {
  for (let i = 0; i < brickRowCount; i++) {
    //iterate on all bricks and get x,y,status,color
    for (let j = 0; j < brickColumnCount; j++) {
      let brick = bricks[i][j];
      if (brick.status > 0) {
        brick.x = j * (width + offset + padding) + offsetLeft; //get brick X, j --> index
        brick.y = i * (height + offset + padding) + offsetLeft + 80; //get brick Y, i --> index

        let ballBrickCollision = checkCollision(ball, brick); // check collision

        if (ballBrickCollision) {
          //if true
          ball.dy = -ball.dy; // change dy of the ball
          brick.status -= 1; // decrement 1 from status
          score += 1 / BRICK_LIFE; //increase score
          brick.color = "#ff9800";
          sounds.brick.play();//add brick sound
          if (score === brickRowCount * brickColumnCount) {
            sounds.music.pause();
            sounds.levelCompleted.play();//add winning sound
            alert("Congratulations! You win!");
            document.location.href = `/?level=${levelIndex + 1}` ;
            sounds.levelCompleted.play();//add winning sound
            sounds.music.pause();

          }
        }
        ctx.beginPath();
        ctx.rect(brick.x, brick.y, width, height);
        ctx.fillStyle = brick.color;
        ctx.fill();
        ctx.closePath();
      }
    }
  }
}

function checkCollision(ball, brick) {
  //calculate edges of the ball
  let ballTop = ball.y - ball.radius;
  let ballBottom = ball.y + ball.radius;
  let ballLeft = ball.x - ball.radius;
  let ballRight = ball.x + ball.radius;

  //calculate edges of the brick
  let brickTop = brick.y;
  let brickBottom = brick.y + height;
  let brickLeft = brick.x;
  let brickRight = brick.x + width;

  return (
    ballTop < brickBottom && // --> الكورة بتخبط من تحت
    ballBottom > brickTop && // --> الكورة بتخبط من فوق
    ballLeft < brickRight && // --> الكورة بتخبط من اليمين
    ballRight > brickLeft // --> الكورة بتخبط من اليمين
  );
}
