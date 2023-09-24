let pos;
let vel;

function setup() {
  setCanvasContainer('canvas', 3, 2, true);
  background('white');
  pos = createVector(random(width), random(height));
  // vel = createVector(random(-5, 5), random(-5, 5));
  //random(최솟값, 최댓값)
  vel = createVector(1, 0);
  vel.rotate(random(TAU));
  //360도 = 2*pi = TAU
  vel.mult(5);
  //속도를 5로 고정
}

function draw() {
  background('white');
  update();
  //함수를 따로 만들어서 빼기
  checkEdges();
  display();
}

function update() {
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
  fill('salmon');
  ellipse(pos.x, pos.y, 50);
}
