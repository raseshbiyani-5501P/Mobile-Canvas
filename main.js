var lastpositionofx,lastpositionofy;
canvas= document.getElementById("myCanvas");
ctx= canvas.getContext("2d");
var color = "blue";
var width = 5;

n_width=screen.width-200;
n_height=screen.height-400;

if(n_width<=768)
{document.getElementById('myCanvas').width=n_width;
document.getElementById('myCanvas').height=n_height;}

canvas.addEventListener("touchstart", my_touchstart)
function my_touchstart(){
    color=document.getElementById('color').value;
    
    width=document.getElementById('width').value;


    lastpositionofx= e.touches[0].clientX-canvas.offsetLeft;
    lastpositionofy= e.touches[0].clientY-canvas.offsetTop;
}

canvas.addEventListener("touchmove", my_touchmove);
function my_touchmove(e){
 cpx=e.touches[0].clientX-canvas.offsetLeft;
 cpy=e.touches[0].clientY-canvas.offsetTop;
 
     ctx.beginPath();
     ctx.strokeStyle=color;
     ctx.lineWidth=width;
     ctx.moveTo(lastpositionofx,lastpositionofy);
     ctx.lineTo(cpx,cpy);
     ctx.stroke();
    
 
 lastpositionofx=cpx;
 lastpositionofy=cpy;
}

function clrarea(){
    ctx.clearRect(0,0,canvas.width,canvas.height)
}