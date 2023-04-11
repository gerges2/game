const queryLevel = new URLSearchParams(window.location.search).get("level");
const levelIndex = queryLevel ? Number(queryLevel) : 0;
const MODE_DEV = false;// deveoper mode 
let play=false;


initBricks(canvas, levelIndex);

//Start Score & life 
const scoreImg = new Image();//score icon
scoreImg.src = "./images/laughing.png";

const lifeImg = new Image();//life icon
lifeImg.src = "./images/heart.png";

const levelImg = new Image();
levelImg.src = "./images/level-up.png";

function showGameState(text,textX,textY, img,imgX,imgY){
  ctx.fillStyle ="red"
  ctx.font ="30px fantasy"
  ctx.fillStyle ="#fff";
  ctx.font ="25px";
  ctx.fillText(text,textX,textY);
  ctx.drawImage(img, imgX, imgY, 40, 40);
}
function drawIcons(){
  showGameState((oldScore+score)*20,80,70,scoreImg,35,35);
  showGameState(life,canvas.width-40,70,lifeImg, canvas.width-85,40);
  showGameState(levelIndex+1,canvas.width/2, 70, levelImg, canvas.width/2 -40, 40);
}
//End Score & life 




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
    drawIcons(); // Drawing Score & life

    // drawtext (`score : `+ ((oldScore+score)*20),80,70)
    // drawtext (life,280,70)
    // ctx.drawImage('images/life.png', 10, 10, 150, 180);

  if (move == true) {
    movePaddle();
    movePaddle2();
    moveBall();
    ballWallCollision();
    ballPaddleCollision();
    sounds.music.play();
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

