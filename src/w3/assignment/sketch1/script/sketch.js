let posX;
let posY;
let posXAdd = 3;
let posYAdd = -2;

function setup() {
  setCanvasContainer('mySketchGoesHere', 3, 2, true);
  background(255);
  posX = width / 2;
  posY = height / 2;
  ellipse(posX, posY, 50);
}

function draw() {
  //반복해서 실행하는 코드
  //위치 변화하는 건 draw에 적어야한다
  background(255);
  posX += posXAdd;
  posY += posYAdd;
  ellipse(posX, posY, 50);
  //   ellipse(posX, posY, 50);
  //   posX += 5;
  //   posY += 3;
  //먼저 그리고, 계산하는 걸 추천. 위의 코드로 하면 더해지고 후에 그려지기 때문에 중앙에는 안오게된다. setup에 적어두면 해결된다~
}
