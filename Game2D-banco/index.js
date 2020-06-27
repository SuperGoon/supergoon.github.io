var canvas = document.querySelector("#canvas")
canvas.style.backgroundColor = "rgb(252, 179, 150)"
canvas.width = 800
canvas.height = 1600
canvas.style.border = '2px solid red'
var ctx = canvas.getContext('2d')


// for (let i = 0; i < 8; i += 2) {
//     for (let j = 0; j < 8; j += 2) {
//         ctx.beginPath()
//         ctx.fillStyle = 'black';
//         ctx.rect(i * 100, j * 100, 100, 100)
//         ctx.fill()
//     }
// }
// for (let i = 1; i < 8; i += 2) {
//     for (let j = 1; j < 8; j += 2) {
//         ctx.beginPath()
//         ctx.fillStyle = 'black';
//         ctx.rect(i * 100, j * 100, 100, 100)
//         ctx.fill()
//     }
// }


for (let i = 0; i < 8; i += 2) {
    for (let j = 1; j < 8; j += 2) {
        ctx.beginPath()
        ctx.fillStyle = 'black';
        ctx.rect(i * 100, j * 100, 100, 100)
        ctx.fill()
        ctx.beginPath()
        ctx.fillStyle = 'black';
        ctx.rect(j * 100, i * 100, 100, 100)
        ctx.fill()
    }

}

//Vẽ hình chữ nhật kết hợp vẽ cờ Nhật Bản
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

var rect1 = new Rect(0, 1200, 800, 400, 'white')
rect1.draw()
var rect2 = new Rect(0, 800, 800, 400, 'white')
rect2.draw()


//Hình mặt cười
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

var arc = new Arc(400, 1000, 150, 2, 'white')
arc.draw()
var arc1 = new Arc(350, 950, 10, 2, 'red')
arc1.draw()
var arc2 = new Arc(450, 950, 10, 2, 'red')
arc2.draw()
var arc3 = new Arc(400, 1000, 100, 1, 'white')
arc3.draw()
var flagJapan = new Arc(400, 1400, 125, 2, 'red')
flagJapan.draw()