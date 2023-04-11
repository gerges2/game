// Action for Start Screen
// span button
document.querySelector(".start-btn span").onclick = function () {
    let span = document.querySelector(".start-btn");
    span.remove();//remove span button when clicked
    sounds.startSpanBtn.play(); //add start button sound
}// to delete button
// Get canvas element
const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

function clearCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  }

canvas.addEventListener("click", function () {
    move = true
})

//Sounds Variables
const sounds = {
    startSpanBtn: new Audio('./sounds/start.wav'),
    paddle: new Audio('./sounds/paddle.wav'),
    gameOver: new Audio('./sounds/gameover.wav'),
    brick: new Audio('./sounds/brick.wav'),
    levelCompleted: new Audio('./sounds/win.wav'),
    music: new Audio('./sounds/music.wav')
}
