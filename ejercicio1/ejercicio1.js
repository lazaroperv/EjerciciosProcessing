let currentColor = 0; // Variable para mantener el índice del color actual
let colors = ["#FF0000", "#00FF00", "#0000FF"]; // Array de colores en formato hexadecimal
let rectWidth = 200;
let rectHeight = 200;

function setup() {
  createCanvas(400, 400);
  setInterval(changeColor, 2000); // Llamar a la función changeColor cada 2 segundos
}

function draw() {
  background(255);
  fill(colors[currentColor]); // Usar el color actual
  rect(100, 100, rectWidth, rectHeight); // Dibujar el rectángulo
}

function changeColor() {
  // Incrementar el índice del color actual
  currentColor = (currentColor + 1) % colors.length;
}
