// Action for Start Screen
// span button
document.querySelector(".start-btn span").onclick = function () {
    document.querySelector(".start-btn").remove();
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