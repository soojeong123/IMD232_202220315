let moverA; //class명과 달라도 됨
// let moverB;
let gravity;
// let wind;
let mVec;
let pMVec;

function setup() {
  setCanvasContainer('canvas', 1, 1, true);
  background('white');
  moverA = new Mover(width / 2, height / 2, 10);
  gravity = createVector(0, 0.1);

  mVec = createVector();
  pMVec = createVector();
}

function draw() {
  background('white');

  let gravityA = createVector(gravity.x, gravity.y);
  gravityA.mult(moverA.mass);
  moverA.applyForce(gravityA);
  // if (mouseIsPressed && isMouseInsideCanvas()) {
  //   moverA.applyForce(wind);
  // }
  //mouseIsPressed는 내장되어있는 변수, isMouseInsideCanvas는 만들어둔 함수임

  if (moverA.contactEdge()) {
    let c = 0.5;
    //c= 뮤 마찰계수?, 0~1 사이의 값이어야함
    let friction = moverA.vel.copy();
    friction.mult(-1);
    friction.mult(c);
    moverA.applyForce(friction);
  }
  moverA.update();
  moverA.checkEdges();
  moverA.display();
}

function mouseMoved() {}

function mousePressed() {}

function mouseDragged() {}

function mouseReleased() {
  pMVec.set(pmouseX, pmouseY);
  mVec.set(mouseX, mouseY);

  // moverA.applyForce(throwingForce);
}
