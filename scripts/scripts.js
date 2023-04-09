
initBricks(canvas);

//to shows elemet in canvas  
function render() {

    clearCanvas();
    ctx.reset();// to delete canvas contant
    drawBall()// to create ball with new
    drawPaddle(paddle.x, paddle.y, paddle.width, paddle.height, paddle.color)// create new canvas by new position
    drawBricks(ctx)
    
}
// rander()
function update() {//to  update position of player(paddle)

    if (move == true) {
        movePaddle()
        movePaddle2()
        moveBall()
    }
    ballWallCollision()
    ballPaddleCollision()
}

window.addEventListener('resize', resizeCanvas, false);
function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
    initBricks(canvas);
    render();
}
resizeCanvas();


var animate = function () {

    update();
    render();
    requestAnimationFrame(animate);

}
animate();

