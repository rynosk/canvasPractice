const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
const size = {
    "w": document.documentElement.clientWidth,
    "h": document.documentElement.clientHeight,
}

const img = new Image();
img.src = "img01.png";


function resize() {
    size.w = document.documentElement.clientWidth;
    size.h = document.documentElement.clientHeight;
    rendering();
}

function rendering() {
    canvas.width = size.w;
    canvas.height = size.h;
    ctx.fillStyle = "blue";
    ctx.fillRect(0, 0, size.w, size.h);
    ctx.drawImage(img, 0, 0);
}

img.addEventListener("load", rendering);
window.addEventListener("resize", resize);
