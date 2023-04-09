// Action for Start Screen
// span button
document.querySelector(".start-btn span").onclick = function () {
    document.querySelector(".start-btn").remove();
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