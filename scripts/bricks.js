// Define Bricks Variables
let brickRowCount = 3;
let brickColumnCount = 6;
let brickWidth, brickHeight, brickPadding, bricksArea, brickOffsetLeft;
let bricks = []; //bricks object --> ( x, y, status, color )
let score = 0

// add levels array still need some modifications
const levels = [
    {
        rowCount: 3,
        columnCount: 5,
        ballSpeed: 5,
        paddleWidth: 120,
    },
    {
        rowCount: 4,
        columnCount: 7,
        ballSpeed: 7,
        paddleWidth: 100,
    },
    {
        rowCount: 5,
        columnCount: 10,
        ballSpeed: 10,
        paddleWidth: 80,
    },
];

//Initialize bricks in the canvas 
function initBricks(canvas, levelIndex) {
    const level = levels[levelIndex];
    brickRowCount = level.rowCount;
    brickColumnCount = level.columnCount;
    ball.speed = level.ballSpeed;
    paddle.width = level.paddleWidth;

    brickWidth = canvas.width / (brickColumnCount + 1); // based on the width, added 1 to leave gap on 2 sides
    brickHeight = 30;
    bricksArea = canvas.height * 0.2; // Area for all bricks to be drawn,
    brickOffsetLeft = (canvas.width - (brickWidth * brickColumnCount)) / 5; // to center the bricks
    brickPadding = ball.radius * 4; // gaps

    for (let i = 0; i < brickRowCount; i++) {
        bricks[i] = [];
        for (let j = 0; j < brickColumnCount; j++) {
            let color = "";
            if (i == 0) {
                color = "#f44336";
            } else if (i == 1) {
                color = "#ff9800";
            } else {
                color = "#4caf50";
            }
            bricks[i][j] = { x: 0, y: 0, status: 1, color: color };
        }
    }
}



function drawBricks(ctx) {
    for (let i = 0; i < brickRowCount; i++) { //iterate on all bricks and get x,y,status,color
        for (let j = 0; j < brickColumnCount; j++) {
            let brick = bricks[i][j];
            if (brick.status === 1) {
                brick.x = j * (brickWidth + brickPadding) + brickOffsetLeft; //get brick X, j --> index 
                brick.y = i * (brickHeight + brickPadding) + bricksArea; //get brick Y, i --> index 
                let ballBrickCollision = checkCollision(ball, brick); // check collision
                if (ballBrickCollision) { //if true
                    ball.dy = -ball.dy; // change dy of the ball 
                    brick.status = 0; // set status = 0 to remove the brick
                    score++; //increase score
                    if (score === brickRowCount * 10) {
                        alert("Congratulations! You win!");
                        document.location.reload();
                    }
                }
                ctx.beginPath();
                ctx.rect(brick.x, brick.y, brickWidth, brickHeight);
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
    let brickBottom = brick.y + brickHeight;
    let brickLeft = brick.x;
    let brickRight = brick.x + brickWidth;

    return (
        ballTop < brickBottom && // --> الكورة بتخبط من تحت
        ballBottom > brickTop && // --> الكورة بتخبط من فوق
        ballLeft < brickRight && // --> الكورة بتخبط من اليمين
        ballRight > brickLeft    // --> الكورة بتخبط من اليمين
    );
}
