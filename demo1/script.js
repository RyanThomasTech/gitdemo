const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const rect = canvas.getBoundingClientRect();
const {width, height} = rect;
const x = (rect.bottom - rect.top)/2, y=(rect.right - rect.left)/2, r=50;
let count = 0;
const counter = document.getElementById("count");
const handleBuyButton = function(e) {
    if (Math.sqrt((x-e.x)*(x-e.x) + (y-e.y)*(y-e.y)) < r){
        count++;
        counter.innerHTML = count;
    }
    console.log(Math.sqrt((x-e.x)*(x-e.x) + (y-e.y)*(y-e.y)) )
    console.log(`${e.x},${e.y}`);
}

ctx.fillStyle="blue";
ctx.beginPath();
ctx.arc(x,y,r, 0, 2*Math.PI);
ctx.fill();

ctx.fillStyle="white";
ctx.font = "32px sans";
ctx.fillText("BD08", width/2-37, height/2+10);

canvas.addEventListener('click',handleBuyButton)

