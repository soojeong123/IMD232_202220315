let pos;
let vel;
let acc;
//등가속도 운동...
let radius = 25;

function setup() {
  setCanvasContainer('mySketchGoesHere', 3, 2, true);
  background(255);
  pos = createVector(width / 2, height / 2);
  vel = createVector(0, 0);
  acc = createVector();
  console.log(pos);
  console.log(vel);
  //createVactor을 해주면, 백터기능을 쓸 수 있는 상태로 인식한다?
  ellipse(pos.x, pos.y, 50);
}

function update() {}

function draw() {
  //반복해서 실행하는 코드
  //위치 변화하는 건 draw에 적어야한다
  background(255);
  acc = p5.Vector.random2D();
  acc.mult(0.5);
  vel.add(acc);
  vel.limit(5);
  pos.add(vel);
  //.add <-createVactor 을 서용해서, 백터의 기본 기능? 같은걸 쓸수있는거인듯,,?

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
  //랜덤하게

  // if (pos.x < 0) {
  //   vel.x *= -1;
  // } else if (pos.x > width) {
  //   vel.x *= -1;
  // }

  // if (pos.x - radius < 0 || pos.x + radius > width) {
  //   vel.x *= -1;
  // }
  // if (pos.y - radius < 0 || pos.y + radius > height) {
  //   vel.y *= -1;
  // }
  //기본코드

  ellipse(pos.x, pos.y, 2 * radius);
}

function infiniteEdge() {}

//과제 힌트, 원이 마우스로 향하는 백터를 구하는 기능이 있다 백터서브트랙션 영상의 빼기연산
//이걸 반대로 해서... ?
//한번에 더해지는게 아니라 적당히 감소시켜서?
