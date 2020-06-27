var canvas = document.querySelector("#canvas")
canvas.style.backgroundColor = "rgb(252, 179, 150)"
canvas.width = 800
canvas.height = 800
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
        ctx.closePath()
    }
}