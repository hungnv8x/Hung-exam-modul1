class Circle {
    constructor(x,y,radius,color) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.color =color;
    }
    render(canvas){
        this.ctx = canvas.getContext('2d');
        this.ctx.beginPath();
        this.ctx.fillStyle = this.color;
        this.ctx.arc(this.x,this.y,this.radius,0,Math.PI*2);
        this.ctx.fill();
        this.ctx.closePath();
    }
}