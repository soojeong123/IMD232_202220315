let aVariable = 20;
let anArray = [30, 60, 90];
let anotherArray = [];

function setup() {
  setCanvasContainer('canvas', 3, 2, true);
  console.log(aVariable);
  console.log(anArray);
  console.log('anArray[0]', anArray[0]);
  console.log('anArray[1]', anArray[1]);
  console.log('anArray[2]', anArray[2]);
  console.log('anArray.length', anArray.length);
  console.log('anotherArray.length', anotherArray.length);
  console.log('anotherArray[0]', anotherArray[0]);
  anotherArray.push('데이터');
  console.log('anotherArray[0]', anotherArray[0]);
  anotherArray.push(50);
  console.log('anotherArray[1]', anotherArray[1]);

  background('white');
}

function draw() {}
