////벡터 Magnitude
let cv; //센터
let mv; //마우스
let cvToMv;

function setup() {
  setCanvasContainer('canvas', 3, 2, true);
  background('white');
  cv = createVector(width / 2, height / 2);
  mv = createVector();
  cvToMv = createVector();
}

function draw() {
  background('white');

  mv.set(mouseX, mouseY);
  cvToMv = p5.Vector.sub(mv, cv);

  let mag = cvToMv.mag();
  noStroke;
  fill('black');
  rect(10, 10, mag, 10);
  //mag는 양수로만 나옴

  strokeWeight(2);
  stroke('black');
  translate(cv.x, cv.y);
  line(0, 0, cvToMv.x, cvToMv.y);
}
