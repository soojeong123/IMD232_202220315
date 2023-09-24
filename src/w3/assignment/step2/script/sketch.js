let pos;
let vel;
let mouse;
// let acc;
let posToMouse;

function setup() {
  setCanvasContainer('canvas', 1, 1, true);
  background('white');
  pos = createVector(random(width), random(height));
  vel = createVector(1, 1);

  mouse = createVector();

  posToMouse = createVector();

  //   acc = p5.Vector.random2D();
  //   acc.mult(0.01);
}

function draw() {
  background('white');
  update();
  checkEdges();
  display();

  mouse.set(mouseX, mouseY);

  stroke('black');
  strokeWeight(2);
  line(pos.x, pos.y, mouse.x, mouse.y);

  //   posToMouse = p5.Vector.sub(mouse, pos);
  //   posToMouse.mult(0.3);
  //   translate(pos.x, pos.y);
  //   stroke('red');
  //   line(0, 0, random(pos.x), random(pos.y));
}

function update() {
  //   acc = p5.Vector.random2D();
  //   acc.mult(1);
  //   vel.add(acc);
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
