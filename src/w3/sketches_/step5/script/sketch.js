////object 사용
// let x;
// let y;
let p = {};
// let velocityX = 3;
// let velocityY = 5;
let v = {
  x: 3,
  y: 5,
};

function setup() {
  setCanvasContainer('canvas', 3, 2, true);
  background('white');
  // x = width / 2;
  // y = height / 2;
  p.x = width / 2;
  p.y = height / 2;
}

function draw() {
  background('white');
  // x += velocityX;
  // y += velocityY;
  p.x += v.x;
  p.y += v.y;
  // ellipse(x, y, 50);
  ellipse(p.x, p.y, 25);

  // if (x < 0 || x > width) {
  //   velocityX *= -1;
  // }
  // if (y < 0 || y > height) {
  //   velocityY *= -1;
  // }
  if (p.x < 0 || p.x > width) {
    v.x *= -1;
  }
  if (p.y < 0 || p.y > height) {
    v.y *= -1;
  }
}
