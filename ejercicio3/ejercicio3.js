let angulo = 0;
let radio = 100;
let colorR = 255;
let colorG = 0;
let colorB = 0;
let estadoColor = 0; // Variable para controlar el estado del color
let opacidad = 255; // Opacidad inicial de la estela

function setup() {
  createCanvas(400, 400);
}

function draw() {
  // Dibujar el fondo con una opacidad baja para simular una estela

  // Calcular las coordenadas x e y en función del ángulo
  let x = width / 2 + radio * cos(angulo);
  let y = height / 2 + radio * sin(angulo);

  // Dibujar la línea con opacidad
  stroke(colorR, colorG, colorB, opacidad);
  line(width / 2, height / 2, x, y);

  // Incrementar el ángulo para que la línea se mueva en círculo
  angulo += 0.05;

  // Cambiar los colores en un bucle continuo
  if (estadoColor === 0) {
    colorR -= 1;
    if (colorR === 0) {
      estadoColor = 1;
    }
  } else if (estadoColor === 1) {
    colorG += 1;
    if (colorG === 255) {
      estadoColor = 2;
    }
  } else if (estadoColor === 2) {
    colorB += 1;
    if (colorB === 255) {
      estadoColor = 0;
    }
  }

  // Reducir la opacidad para la siguiente iteración
  opacidad -= 1;
  if (opacidad < 0) {
    opacidad = 255; // Restablecer la opacidad al máximo
  }
}
