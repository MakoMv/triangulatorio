let angle = 0;
let rotationSpeed = 1;
let sideLength = 100;
let centerX, centerY;

function setup() {
  createCanvas(windowWidth, windowHeight);
  centerX = width / 2;
  centerY = height / 2;
  background(0);
}

function draw() {
  translate(centerX, centerY);
  rotate(radians(angle));
  drawTriforce(0, 0, sideLength);
  angle += rotationSpeed;
}

function drawTriforce(x, y, length) {
  let height = length * sqrt(3) / 2;
  fill(255, 0, 0); // Relleno rojo

  // Dibuja el triángulo grande
  triangle(x, y - height / 2, x - length / 2, y + height / 2, x + length / 2, y + height / 2);

  fill(255, 255, 0); // Relleno amarillo

  // Dibuja los tres triángulos pequeños
  triangle(x, y - height / 2, x, y + height / 2, x - length / 2, y);
  triangle(x, y - height / 2, x, y + height / 2, x + length / 2, y);
  triangle(x - length / 2, y, x, y + height / 2, x + length / 2, y);
}
