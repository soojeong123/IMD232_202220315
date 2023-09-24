////벡터의 뺴기
let cv; //센터
let mv; //마우스

function setup() {
  setCanvasContainer('canvas', 3, 2, true);
  background('white');
  cv = createVector(width / 2, height / 2);
  mv = createVector();
}

function draw() {
  background('white');
  stroke('cornflowerblue');
  strokeWeight(2);
  line(0, 0, cv.x, cv.y);

  mv.x = mouseX;
  mv.y = mouseY;
  stroke('crimson');
  line(0, 0, mv.x, mv.y);

  mv.sub(cv);
  //mv - cv = 센터와 마우스 사이를 이어주는 길이의 선, 원점에서 시작함
  translate(cv.x, cv.y);
  //위에 선이 센터에서 시작함 -> 이어져 있는 것처럼 보임
  stroke('black');
  line(0, 0, mv.x, mv.y);
}
