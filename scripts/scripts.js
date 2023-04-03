// Action for Start Screen
// span button
document.querySelector(".start-btn span").onclick = function (){
    document.querySelector(".start-btn").remove();
}

// Get canvas element
const canvas = document.getElementById("myCanvas");
// <<<<<<< HEAD
// global variable for frams and paddle 
const fps =60;
const playerHeight=10;
const playerWidth=100;
const ctx =canvas.getContext("2d");
// to draw the paddle
function drawrect(x,y,w,h,color){
    ctx.fillStyle = color;
    ctx.fillRect(x,y,w,h)
}
//opject of paddle 
const player1 ={
        x:canvas.width/2-playerWidth/2,
        y :canvas.height-30,
        width:playerWidth,
        height:playerHeight,
        color:"blue",
        score:0
    }
    //to shows elemet in canvas  
    function rander(){
    ctx.reset();// to delete canvas contant
    drawrect(player1.x,player1.y,player1.width,player1.height,player1.color)// create new canvas by new position
    }
    // rander()
    function update(){//to  update position of player(paddle)
            canvas.addEventListener("mousemove",function(e){
            let rect =canvas.getBoundingClientRect();
            if (e.clientX-rect.left<97){}
            else{
            player1.x=e.clientX-rect.left-(player1.width);}                        
        })//height of player is 100  
    }
    function game(){//to display frame by frame 
            update();
            rander();
        }
        setInterval(game,1000/fps)
// =======

// >>>>>>> 0f58650ad151e685c6691f0a627fe22fd93d2245
