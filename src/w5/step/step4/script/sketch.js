const strNum = 20;
const strNum2 = 15;
const strBegin = 15;
const strGap = 30;

function setup() {
  setCanvasContainer('canvas', 3, 2, true);

  background(255);
}

function draw() {
  background(255);

  noStroke();
  // fill('salmon');

  // for (let a = 0; a < strNum; a++) {
  //   const rectWidth = width / (strNum + strNum + 1);
  //   const rectX = (width / (strNum + strNum + 1)) * (2 * a + 1);
  //   rect(rectX, 0, rectWidth, height);
  // }
  // for (let a = 0; a < strNum; a++) {
  //   const rectHeight = height / (strNum + strNum + 1);
  //   const rectY = (height / (strNum + strNum + 1)) * (2 * a + 1);
  //   rect(0, rectY, width, rectHeight);
  // }
  //개수를 일정하게
  rectMode(CENTER);
  for (let a = 0; a < strNum; a++) {
    for (let b = 0; b < strNum2; b++) {
      fill((255 / strNum) * a, (255 / strNum2) * b, 255);
      const x = ((a + 1) * width) / strNum + 1;
      const y = ((b + 1) * height) / strNum2 + 1;
      if (a % 2 == 0) {
        circle(x, y, 10);
      } else {
        rect(x, y, 10);
      }
    }
  }

  // for (let a = strBegin; a < width; a += 2 * strGap) {
  //   rect(a, 0, strGap, height);
  // }
  //간격을 일정하게
}
