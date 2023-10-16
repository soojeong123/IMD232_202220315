const strNum = 8;
const strNum2 = 8;
// const strBegin = 15;
// const strGap = 30;

function setup() {
  setCanvasContainer('canvas', 1, 1, true);

  // colorMode(HSL, 360, 100, 100, 100);
  background(255);
}

function draw() {
  background(255);
  for (let a = 0; a < strNum; a++) {
    for (let b = 0; b < strNum2; b++) {
      let x = ((a + 1) * width) / strNum + 1;
      let y = ((b + 1) * height) / strNum2 + 1;
      ellipse(x, y, 15);
    }
  }

  // for (let a = strBegin; a < width; a += 2 * strGap) {
  //   rect(a, 0, strGap, height);
  // }
  //간격을 일정하게
}
