const queryLevel = new URLSearchParams(window.location.search).get('level');
const levelIndex = queryLevel ? Number(queryLevel) : 0;
const MODE_DEV = false;

initBricks(canvas, levelIndex);


//to shows elemet in canvas  
function render() {

    clearCanvas();
    ctx.reset();// to delete canvas contant
    drawBall()// to create ball with new
    drawPaddle(paddle.x, paddle.y, paddle.width, paddle.height, paddle.color)// create new canvas by new position
    drawBricks(ctx)

}
// render()
function update() {//to  update position of paddle

    if (move == true) {
        movePaddle()
        movePaddle2()
        moveBall()
        ballWallCollision()
        ballPaddleCollision()
    }
}

window.addEventListener('resize', resizeCanvas, false);
function resizeCanvas() {
    initBricks(canvas, levelIndex);
    animate();
}


resizeCanvas();

function animate() {

    render();
    update();
    animationId = requestAnimationFrame(animate);

}

