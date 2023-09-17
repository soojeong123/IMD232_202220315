function setup() {
  setCanvasContainer('canvas-goes-here', 3, 2, true);
  background('#ff7744');
}
function draw() {
  background('#ff7744');
  circle(mouseX, mouseY, width * 0.1);
}
