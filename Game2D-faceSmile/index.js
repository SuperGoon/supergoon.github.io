var canvas = document.querySelector("#canvas")
canvas.style.backgroundColor = "rgb(252, 179, 150)"
canvas.width = 800
canvas.height = 400
canvas.style.border = '2px solid red'
var ctx = canvas.getContext('2d')

class Arc {
    constructor(dx, dy, radius, x, color) {
        this.dx = dx;
        this.dy = dy;
        this.radius = radius;
        this.color = color;
        this.x = x;
    }
    draw() {
        ctx.beginPath()
        ctx.fillStyle = this.color;
        ctx.strokeStyle = "black";
        ctx.arc(this.dx, this.dy, this.radius, 0, this.x * Math.PI, false);
        ctx.fill();
        ctx.stroke()
    }
}

var arc = new Arc(400, 200, 150, 2, 'white')
arc.draw()
var arc1 = new Arc(350, 150, 10, 2, 'red')
arc1.draw()
var arc2 = new Arc(450, 150, 10, 2, 'red')
arc2.draw()
var arc3 = new Arc(400, 200, 100, 1, 'white')
arc3.draw()