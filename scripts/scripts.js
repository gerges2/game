// Get canvas element
const canvas = document.getElementById("myCanvas");
const fps =60;
const playerHeight=20;
const playerWidth=100;
const ctx =canvas.getContext("2d");

function drawrect(x,y,w,h,color){
    ctx.fillStyle = color;
    ctx.fillRect(x,y,w,h)
}
const player1 ={
        x:canvas.width/2-playerWidth/2,
        y :canvas.height-10,
        width:playerWidth,
        height:playerHeight,
        color:"blue",
        score:0
    }
    function rander(){
    canvas.style.backgroundImage ="url('../images/bg.jpg')"
    ctx.reset();
    drawrect(player1.x,player1.y,player1.width,player1.height,player1.color)
    }
    // rander()
    function update(){
            canvas.addEventListener("mousemove",function(e){
            let rect =canvas.getBoundingClientRect();
            if (e.clientX-rect.left<250){
                player1.x=e.clientX-rect.left
            }
            else{
            player1.x=e.clientX-rect.left-(player1.width);}                        
        })//height of player is 100  
    }
    function game(){
            update();
            rander();
        }
        setInterval(game,1000)