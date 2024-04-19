let angulo = 0;
let radio = 100;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  
  // Calcular las coordenadas x e y en función del ángulo
  let x = width / 2 + radio * cos(angulo);
  let y = height / 2 + radio * sin(angulo);
  
  // Dibujar la línea
  stroke(0);
  line(width / 2, height / 2, x, y);
  
  // Incrementar el ángulo para que la línea se mueva en círculo
  angulo += 0.05;
}
