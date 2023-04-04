
// // Action for Start Screen
// // span button
// document.querySelector(".start-btn span").onclick = function (){
//     document.querySelector(".start-btn").remove();
// }

// Get canvas element
const canvas = document.getElementById("myCanvas");
// <<<<<<< HEAD
// global variable for frams and paddle 
const fps =60;
const playerHeight=10;
const playerWidth=100;
let leftArrow = false;
let rightArrow = false;
const ctx =canvas.getContext("2d");
// to draw the paddle
function drawrect(x,y,w,h,color){
    ctx.fillStyle = color;
    ctx.fillRect(x,y,w,h)
}
//opject of paddle 
const player1 ={
        x:canvas.width/2-playerWidth/2,
        y :canvas.height-10,
        width:playerWidth,
        height:playerHeight,
        color:"blue",
        score:0,
        dx:5

    }









    const ballRadias = 8;
    // // ball attributes
    const ball = {
        x: canvas.width,
        y: player1.y-ballRadias,
        radius: ballRadias,
        speed: 3,
        dx: 3,
        dy: 3,
    }
    // reset ball if drop ball 
    function resetBall() {
    ball.x = canvas.width / 2;
    ball.y = player1.y - ballRadias;
    ball.dx = 2 * (Math.random() * 2 - 1)
    ball.dy = -2
    }



    var count = 3;
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
    function movePaddle2() {
        if (rightArrow && player1.x + player1.width < canvas.width) {
            player1.x += player1.dx
    
        }
        else if (leftArrow && player1.x > 0) {
            player1.x -= player1.dx;
    
        }
    }





    
    //to shows elemet in canvas  
    function rander(){
        ctx.reset();// to delete canvas contant
        drawBall()
        drawrect(player1.x,player1.y,player1.width,player1.height,player1.color)// create new canvas by new position
        }
    // rander()
    function update(){//to  update position of player(paddle)
            canvas.addEventListener("mousemove",function(e){
            let rect =canvas.getBoundingClientRect();
            if (e.clientX-rect.left<97){}
            else{
            player1.x=e.clientX-rect.left-(player1.width);}    
            movePaddle2()              
            moveBall()
            ballWallCollision()
            ballPaddleCollision()



        })//height of player is 100  
    }
    function game(){//to display frame by frame 
            update();
            rander();
        }
        setInterval(game,1000/fps)
// =======

// <<<<<<< HEAD
// >>>>>>> 0f58650ad151e685c6691f0a627fe22fd93d2245
// =======
//Resizing Canvas
// window.addEventListener('resize', resizeCanvas, false);
// function resizeCanvas() {
//   canvas.width = window.innerWidth;
//   canvas.height = window.innerHeight;
// }
// resizeCanvas(); 
// >>>>>>> e76386f379068f45cd5c719c82c7d094907653af



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











    
// // function movePaddle(){
// //     canvas.addEventListener("mousemove",function(e){
// //         let rect =canvas.getBoundingClientRect();
// //         if (e.clientX-rect.left<97){}
// //         else{
// //         player1.x=e.clientX-rect.left-(player1.width);}   
// //     })//height of player is 100  
// // }
     
//     //to shows elemet in canvas  
//     function rander(){

//     ctx.reset();// to delete canvas contant
//     drawBall()
//     drawrect(player1.x,player1.y,player1.width,player1.height,player1.color)// create new canvas by new position
//     }
//     // rander()
//     function update(){//to  update position of player(paddle)
//         // movePaddle()
//         movePaddle2()
//         moveBall()
//         ballWallCollision()
//         ballPaddleCollision()
//     }
//     // movePaddle()
//     // movePaddle2()
//     function game(){//to display frame by frame 
//             update();
//             rander();
//         }
//         setInterval(game,1000/fps)
// // =======





