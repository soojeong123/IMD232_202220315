let dom;
let htmlDom;
let canvasW = 800;
let canvasH = 500;

function setup() {
  dom = select('#hereGoesMyP5Sketch');
  // console.log('p5 select', dom);
  // console.log('p5 select', dom.width);

  htmlDom = document.querySelector('#hereGoesMyP5Sketch');
  // console.log('querySelector', htmlDom);
  // console.log('querySelector', htmlDom.clientWidth);
  let canvas = createCanvas(canvasW, canvasH);
  canvas.parent(dom);
  background('black');
}

function draw() {}

function windowResized() {
  // dom = select('#hereGoesMyP5Sketch');
  // console.log('p5 select', dom);
  // console.log('querySelector', htmlDom.clientWidth);
  if (htmlDom.clientWidth < canvasW) {
    console.log('리사이즈');
    resizeCanvas(
      htmlDom.clientWidth,
      (htmlDom.clientWidth * canvasH) / canvasW
    );
    background('black');
  } else if (width !== canvasW) {
    console.log('리사이즈');
    resizeCanvas(canvasW, canvasH);
    background('black');
  }
}
