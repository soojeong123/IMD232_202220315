let pos;
let vel;
// let acc;

function setup() {
  setCanvasContainer('canvas', 3, 2, true);
  background('white');
  pos = createVector(width / 2, height / 2);
  vel = createVector(5, 3);
}

function draw() {
  background('white');
  pos.add(vel);

  if (pos.x < 0) {
    pos.x += width;
  } else if (pos.x > width) {
    pos.x -= width;
  }
  if (pos.y < 0) {
    pos.y += height;
  } else if (pos.y > height) {
    pos.y -= height;
  }

  ellipse(pos.x, pos.y, 50);
}
