// var canvas = document.getElementById("myCanvas");
// var ctx = canvas.getContext("2d");

// ctx.beginPath();
// ctx.moveTo(100, 100);
// ctx.lineTo(200, 200);
// ctx.lineTo(100, 200);

// // ctx.fillStyle = "red";
// // ctx.fill();
// // ctx.strokeStyle = "#222";
// // ctx.stroke();

// ctx.lineWidth = 3;
// ctx.lineCap = "round";
// ctx.lineJoin = "round";
// ctx.setLineDash([15, 5]);
// ctx.stroke();

var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

ctx.beginPath();
ctx.moveTo(50, 20);
ctx.arc(100, 20, 50, 0, Math.PI, false);
ctx.stroke();
