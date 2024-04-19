let charizardImg;
let posX = 200;
let posY = 200;
let speed = 5;

function preload() {
  // Cargar la imagen de Charizard
  charizardImg = loadImage('char.png');
}

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  
  // Dibujar la imagen de Charizard en la posición actual
  image(charizardImg, posX, posY, 100, 100);
}

function keyPressed() {
  // Mover la imagen según la tecla presionada
  if (keyCode === LEFT_ARROW || key === 'a') {
    posX -= speed;
  } else if (keyCode === RIGHT_ARROW || key === 'd') {
    posX += speed;
  } else if (keyCode === UP_ARROW || key === 'w') {
    posY -= speed;
  } else if (keyCode === DOWN_ARROW || key === 's') {
    posY += speed;
  }
}
