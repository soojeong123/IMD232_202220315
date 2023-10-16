let anArray = [
  100, 99, 98, 97, 96, 95, 94, 93, 92, 91, 90, 89, 88, 87, 86, 85, 84, 83, 82,
  81, 80, 79, 78, 77, 76, 75, 74, 73, 72, 71, 70, 69, 68, 67, 66, 65, 64, 63,
  62, 61, 60, 59, 58, 57, 56, 55, 54, 53, 52, 51, 50, 49, 48, 47, 46, 45, 44,
  43, 42, 41, 40, 39, 38, 37, 36, 35, 34, 33, 32, 31, 30, 29, 28, 27, 26, 25,
  24, 23, 22, 21, 20, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4,
  3, 2, 1,
];

function setup() {
  setCanvasContainer('canvas', 3, 2, true);

  background(255);

  for (let a = 0; a < width; a += 10) {
    line(a + 10, 10, a + 10, width - 10);
  }

  for (let a = 0; a < anArray.length; a++) {
    console.log('anArray[${a}]', anArray[a]);
  }

  fill(0);
  for (let a = 0; a < 10; a++) {
    circle(a * 20, height / 2, 20);
  }
}

function draw() {}
