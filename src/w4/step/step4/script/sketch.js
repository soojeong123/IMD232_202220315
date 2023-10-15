let moverA; //class명과 달라도 됨
let moverB;
let gravity;
let wind;

function setup() {
  setCanvasContainer('canvas', 3, 2, true);
  background('white');
  moverA = new Mover(width / 3, height / 3, 10);
  moverB = new Mover((2 * width) / 3, height / 3, 1);
  gravity = createVector(0, 0.1);
  wind = createVector(0.2, 0);
}

function draw() {
  background('white');

  let gravityA = createVector(gravity.x, gravity.y);
  gravityA.mult(moverA.mass);
  moverA.applyForce(gravityA);
  if (mouseIsPressed && isMouseInsideCanvas()) {
    moverA.applyForce(wind);
  }
  //mouseIsPressed는 내장되어있는 변수, isMouseInsideCanvas는 만들어둔 함수임
  moverA.update();
  moverA.checkEdges();
  moverA.display();
  moverA.displayVector();

  let gravityB = createVector(gravity.x, gravity.y);
  gravityB.mult(moverB.mass);
  moverB.applyForce(gravityB);
  if (mouseIsPressed && isMouseInsideCanvas()) {
    moverB.applyForce(wind);
  }
  //mouseIsPressed는 내장되어있는 변수, isMouseInsideCanvas는 만들어둔 함수임
  moverB.update();
  moverB.checkEdges();
  moverB.display();
  moverB.displayVector();
}
