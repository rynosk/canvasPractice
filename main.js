class Renderer {
    constructor(canvas) {
        this.ctx = canvas.getContext("2d");
        this.sizes = {
            "w": document.documentElement.clientWidth,
            "h": document.documentElement.clientHeight,
        }
        canvas.width = this.sizes.w;
        canvas.height = this.sizes.h;
        this.img = new Image();
        this.img.src = "img01.png";
        this.img.addEventListener("load", () => {
            this.rendering();
        })
    }
    rendering() {
        this.ctx.fillStyle = "green";
        this.ctx.fillRect(0, 0, this.sizes.w, this.sizes.h);
        this.ctx.drawImage(this.img, 0, 0);
    }
}

const canvas = document.querySelector("canvas");
new Renderer(canvas);
window.addEventListener("resize", () => {
    new Renderer(canvas);
});
