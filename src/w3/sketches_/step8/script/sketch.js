let cv;
let mv;
let cvToMv;

function setup() {
  setCanvasContainer('canvas', 3, 2, true);
  background('slateblue');
  cv = createVector(width / 2, height / 2);
  mv = createVector();
  cvToMv = createVector();
}

function draw() {
  background('slateblue');
  stroke('white');
  strokeWeight(2);
  line(0, 0, cv.x, cv.y);

  mv.set(mouseX, mouseY);
  stroke('fuchsia');
  line(0, 0, mv.x, mv.y);

  cvToMv = p5.Vector.sub(mv, cv); //중심에서 마우스까지의 선
  stroke('lime');
  translate(cv.x, cv.y); // 0, 0 -> 중심으로 옮김
  line(0, 0, cvToMv.x, cvToMv.y);

  cvToMv.mult(0.5); //길이의 절반 값
  strokeWeight(4);
  stroke('black');
  line(0, 0, cvToMv.x, cvToMv.y);
}
