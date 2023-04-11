const queryLevel = new URLSearchParams(window.location.search).get("level");
const levelIndex = queryLevel ? Number(queryLevel) : 0;
const MODE_DEV = false;// deveoper mode 
let play=false;


initBricks(canvas, levelIndex);




//to shows elemet in canvas
function render() {
    if (play==true)return;  clearCanvas();
  ctx.reset(); // to delete canvas contant
  drawBall(); // to create ball with new
  drawPaddle(paddle.x, paddle.y, paddle.width, paddle.height, paddle.color); // create new canvas by new position
  drawBricks(ctx);
}
// render()
function update() {
  //to  update position of paddle

    if (play==true)return;
    drawtext (`score : `+ ((oldScore+score)*20),80,70)
    drawtext (life,280,70)
    // ctx.drawImage('images/life.png', 10, 10, 150, 180);

  if (move == true) {
    movePaddle();
    movePaddle2();
    moveBall();
    ballWallCollision();
    ballPaddleCollision();
    sounds.music.play();
  }
    if (move == true) {
        // drawtext (`score : `+ (score*20),120,30)
        // drawtext (life,100,100)
        console.log(score);
        movePaddle()
        
        movePaddle2()
        moveBall()
        ballWallCollision()
        ballPaddleCollision()
    }
}

window.addEventListener("resize", resizeCanvas, false);
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



let pausebtn=document.getElementById("pausebtn");
pausebtn.addEventListener("click",function(){
    if(pausebtn.innerText=="play") 
    {
        
        load2(2000)
        pausebtn.innerText="stop";
        // play=false

        
    }
    else{
        pausebtn.innerText="play";
        play=true
    }})