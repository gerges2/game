// Action for Start Screen
// span button
document.querySelector(".start-btn span").onclick = function (){
    document.querySelector(".start-btn").remove();
}// to delete button
// Get canvas element
const canvas = document.getElementById("myCanvas");
// global variable for frams and paddle 
const fps =60;
const ballRadias = 8;
const playerHeight=10;
const playerWidth=100;
let leftArrow = false;// for arror button
let rightArrow = false;//for arror button
let move =false
const ctx =canvas.getContext("2d");
//opject of paddle 
const player1 ={
        x:window.innerWidth/2-playerWidth/2,
        y :window.innerHeight-30,
        width:playerWidth,
        height:playerHeight,
        color:"blue",
        score:0,
        dx:5
    }
    // ball attributes
    const ball = {
        x: canvas.width,
        y: player1.y-ballRadias,
        radius: ballRadias,
        speed:5,
        dx: 5,
        dy: 5,
    }
    // reset ball if drop ball 
    function resetBall() {
    ball.x = canvas.width / 2;
    ball.y = player1.y - ballRadias;
    ball.dx = ball.speed * (Math.random() * 2 - 1)
    ball.dy = -ball.speed
    move =false
    ball.speed=5
    player1.x=window.innerWidth/2-playerWidth/2
    player1.y =window.innerHeight-30
    }

    canvas.addEventListener("click",function(){
        move=true
    })

    var count = 3;//number of lifes
    // collision ball with wall
    function ballWallCollision() {
        if (ball.x + ball.radius > canvas.width || ball.x - ball.radius < 0) {
            ball.dx = -ball.dx
        }
        if (ball.y - ball.radius < 0) {
            ball.dy = -ball.dy
        }
        if (ball.y + ball.radius > canvas.height) {
            count--;
            resetBall();// to return ball up paddle 
        }
    }
// collision ball with paddle
function ballPaddleCollision() {
    if (ball.y > player1.y && ball.y < player1.y + player1.height
        && ball.x > player1.x && ball.x < player1.x + player1.width
    ) {
        let point = ball.x - (player1.x + player1.width / 2);
        point /= (player1.width / 2);
        let a = point * (Math.PI / 3);
        ball.dx = ball.speed * Math.sin(a)
        ball.dy = - ball.speed * Math.cos(a)

    }
}
// to draw the paddle
function drawrect(x,y,w,h,color){
    ctx.fillStyle = color;
    ctx.fillRect(x,y,w,h)
}
    // // draw ball
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
    document.addEventListener('keydown', function (e) {
        if (e.keyCode == 37) {
            leftArrow = true
        }
        else if (e.keyCode == 39) {
            rightArrow = true;
    
        }
    });
    
    document.addEventListener('keyup', function (e) {
        if (e.keyCode == 37) {
            leftArrow = false
            console.log("left")
        }
        else if (e.keyCode == 39) {
            rightArrow = false;
            console.log("right")
        }
    });
    function movePaddle2() { //for paddle move with arrows
        if (rightArrow && player1.x + player1.width < canvas.width) {
            player1.x += player1.dx
    
        }
        else if (leftArrow && player1.x > 0) {
            player1.x -= player1.dx;
    
        }
    }

function movePaddle(){//for paddle move with mouse
    canvas.addEventListener("mousemove",function(e){
        let rect =canvas.getBoundingClientRect();

        if (e.clientX-rect.left<97 && move== true){}
        else{
            if (move==true){
        player1.x=e.clientX-rect.left-(player1.width);} }
    })//height of player is 100  
}
     
    //to shows elemet in canvas  
    function rander(){

    ctx.reset();// to delete canvas contant
    drawBall()// to create ball with new
    drawrect(player1.x,player1.y,player1.width,player1.height,player1.color)// create new canvas by new position
    }
    // rander()
    function update(){//to  update position of player(paddle)
        // movePaddle()
        // movePaddle2()
        if (move == true){
        movePaddle()
        movePaddle2()
        moveBall()
    }
        ballWallCollision()
        ballPaddleCollision()
    }
    function game(){//to display frame by frame 
            update();
            rander();
        }
        setInterval(game,1000/fps)
// =======

window.addEventListener('resize', resizeCanvas, false);
function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
resizeCanvas();



