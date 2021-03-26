var canvas = document.querySelector("#canvas");
canvas.style.backgroundColor = "rgb(252, 179, 150)";
canvas.width = 1000;
canvas.height = 1000;
canvas.style.border = "2px solid red";
var ctx = canvas.getContext("2d");
for (let i = 0; i < 8; i += 2) {
    for (let j = 1; j < 8; j += 2) {
        ctx.fillStyle = "black";
        ctx.fillRect(i * 100 + 100, j * 100 + 100, 100, 100);
        ctx.fillRect(j * 100 + 100, i * 100 + 100, 100, 100);
        ctx.fill();
    }
}
ctx.beginPath();
ctxStroke = "blue";
ctx.rect(100, 100, 800, 800);
ctx.stroke();
var text = ["A", "B", "C", "D", "E", "F", "G", "H"];
var num = ["8", "7", "6", "5", "4", "3", "2", "1"];
ctx.beginPath();
ctx.fillStyle = "black";
ctx.font = "30px time news roman";
for (let i = 0; i < 8; i++) {
    ctx.fillText(text[i], 150 + i * 100, 50);
    ctx.fillText(text[i], 150 + i * 100, 950);
    ctx.fillText(num[i], 50, 150 + i * 100);
    ctx.fillText(num[i], 950, 150 + i * 100);
}