const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const rect = canvas.getBoundingClientRect();
const {width, height} = rect;
const x = (width-rect.left)/2, y=(height-rect.top)/2, r=50;

let count = 0;
const counter = document.getElementById("count");
const handleBuyButton = function(e) {
    const mouseX = e.x-rect.left;
    const mouseY = e.y-rect.top;
    // Determine if button is clicked by detecting click with distance < radius from center of circle
    if (Math.sqrt((x-mouseX)*(x-mouseX) + (y-mouseY)*(y-mouseY)) < r){
        count++;
        counter.innerHTML = count;
    }
}

ctx.fillStyle="blue";
ctx.beginPath();
ctx.arc(x,y,r, 0, 2*Math.PI);
ctx.fill();

ctx.fillStyle="white";
ctx.font = "32px sans";
ctx.fillText("BD08", x-37, y+10);

canvas.addEventListener('click',handleBuyButton)

