var canvas = document.querySelector("#canvas")
canvas.style.backgroundColor = "rgb(252, 179, 150)"
canvas.width = 800
canvas.height = 800
canvas.style.border = '2px solid red'
var ctx = canvas.getContext('2d')

class Rect {
    constructor(dx, dy, width, height, color) {
        this.dx = dx;
        this.dy = dy;
        this.width = width;
        this.height = height;
        this.color = color;
    }
    draw() {
        ctx.beginPath()
        ctx.fillStyle = this.color;
        ctx.strokeStyle = 'red';
        ctx.rect(this.dx, this.dy, this.width, this.height);
        ctx.fill();
        ctx.stroke()
    }
}
var rectangle1 = new Rect(0, 0, 150, 100, 'red')
rectangle1.draw()
var rectangle2 = new Rect(750, 0, 50, 100, "blue")
rectangle2.draw()
var rectangle3 = new Rect(600, 250, 200, 150, 'green')
rectangle3.draw()
var rectangle4 = new Rect(0, 150, 100, 250, 'yellow')
rectangle4.draw()

var flagJapan = new Rect(0, 400, 800, 400, 'white')
flagJapan.draw()

ctx.beginPath()
ctx.fillStyle = 'red'
ctx.arc(400, 600, 100, 0, 2 * Math.PI, false)
ctx.fill()
ctx.closePath()