let pos;
let vel;
let acc;
//acc = 가속도

function setup() {
  setCanvasContainer('canvas', 3, 2, true);
  background('white');
  pos = createVector(random(width), random(height));
  vel = createVector(0, 0);
  acc = p5.Vector.random2D();
  acc.mult(0.1);
}

function draw() {
  background('white');
  update();
  //함수를 따로 만들어서 빼기
  checkEdges();
  display();
}

function update() {
  vel.add(acc);
  vel.limit(15);
  pos.add(vel);
  //acc는 변하지 않음, vel값이 누적되어 늘어난거 -> vel값에 리미트
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
