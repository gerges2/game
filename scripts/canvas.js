// Action for Start Screen
// span button
let oldScore=0
document.querySelector(".start-btn span").onclick = function () {
    let span = document.querySelector(".start-btn");
    span.remove();//remove span button when clicked
    sounds.startSpanBtn.play(); //add start button sound
    load(1000)

}// to delete button
// Get canvas element
const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");
let count =3
function clearCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  }

canvas.addEventListener("click", function () {
    move = true
})




function drawtext (text,x,y){
    ctx.fillStyle ="red";
    ctx.font ="italic bold 36px Arial";
    ctx.textAlign = "center"; // center the text horizontally
    ctx.textBaseline = "middle"; // center the text vertically
    ctx.fillText(text,x,y);
}




function load(time){
    $(".overloading").fadeIn(1,function(){
        ( $(".count").text(3));
    })
    count =3
    // setInterval(timer, time);
    $(".overloading").fadeOut(4500);
    setInterval(timer, time);
}
function load2(time){
    $(".overloading").fadeIn(1,function(){
        ( $(".count").text(3));
    })
    count =3
// fadeOut(speed,easing,callback)
    $(".overloading").fadeOut(3000,function(){
        play=false
    });
    setInterval(timer, time);

    
}

function timer() {
    count == 0 ? count=count : count--;
     $(".count").text(count).css({
        "color": "white",
        "text-shadow": "0px 0px 5px #e00000",
        "box-shadow": "0px 0px 10px #e00000"
    });
}





//Sounds Variables
const sounds = {
    startSpanBtn: new Audio('./sounds/start.wav'),
    paddle: new Audio('./sounds/paddle.wav'),
    gameOver: new Audio('./sounds/gameover.wav'),
    brick: new Audio('./sounds/brick.wav'),
    levelCompleted: new Audio('./sounds/win.wav'),
    music: new Audio('./sounds/music.wav')
}
