// Action for Start Screen
// span button
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
    ctx.fillStyle ="red"
    ctx.font ="30px fantasy"
    ctx.fillText(text,x,y)
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
function timer() {
    count == 0 ?count=count :count--

    

     $(".count").text(count);
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
