// Action for Start Screen
// span button
document.querySelector(".start-btn span").onclick = function (){
    document.querySelector(".start-btn").remove();
}

// Get canvas element
const canvas = document.getElementById("myCanvas");

//Resizing Canvas
window.addEventListener('resize', resizeCanvas, false);
function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
resizeCanvas();
