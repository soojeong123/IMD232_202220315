let mover; //class명과 달라도 됨
let gravity;
let wind;

function setup() {
  setCanvasContainer('canvas', 3, 2, true);
  background('white');
  mover = new MoverNoMass(width / 2, height / 2, 25);
  gravity = createVector(0, 0.1);
  wind = createVector(0.1, 0);
}

function draw() {
  background('white');

  mover.addAcc(gravity);
  if (mouseIsPressed && isMouseInsideCanvas()) {
    mover.addAcc(wind);
  }
  //mouseIsPressed는 내장되어있는 변수, isMouseInsideCanvas는 만들어둔 함수임
  mover.update();
  mover.checkEdges();
  mover.display();
  mover.displayVector();
}
