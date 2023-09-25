let pos;
let vel;
let mouse;
let acc;
let posToMouse;

function setup() {
  setCanvasContainer('canvas', 1, 1, true);
  background('pink');
  pos = createVector(random(width), random(height));
  vel = createVector(0, 0);

  mouse = createVector();

  posToMouse = createVector();

  acc = p5.Vector.random2D();
  acc.mult(0.1);
}

function draw() {
  background('pink');
  update();
  checkEdges();
  display();

  mouse.set(mouseX, mouseY);

  stroke('black');
  strokeWeight(4);
  line(pos.x, pos.y, mouse.x, mouse.y);

  posToMouse = p5.Vector.sub(pos, mouse);
  translate(pos.x, pos.y);

  stroke('cornflowerblue');
  strokeWeight(2);
  line(0, 0, vel.x * 10, vel.y * 10);

  stroke('white');
  strokeWeight(2);
  line(0, 0, acc.x * 100, acc.y * 100);
}

function update() {
  acc = p5.Vector.random2D();
  acc.mult(1);
  vel.add(acc);
  vel.limit(10);
  pos.add(vel);
}

function checkEdges() {
  if (pos.x < 0) {
    pos.x = width;
  } else if (pos.x > width) {
    pos.x = 0;
  }
  if (pos.y < 0) {
    pos.y = height;
  } else if (pos.y > height) {
    pos.y = 0;
  }
}
function display() {
  noStroke();
  fill('black');
  ellipse(pos.x, pos.y, 50);
}
