let traffic;
//traffic 변수 설정
let infiniteOffset = 80;
//infiniteOffset 변수 지정 및 값 80으로 초기화

function setup() {
  setCanvasContainer('canvas', 3, 2, true);
  //캔버스 생성, 3:2 비율로 지정
  colorMode(HSL, 360, 100, 100, 100);
  //컬러모드 HSL로 설정
  background('skyblue');
  //배경 하늘색으로 설정
  traffic = new Traffic(); //
  for (let n = 0; n < 10; n++) {
    //n의 초깃값 = 0, n < 10이 될 때까지 n에 1씩 더하기
    traffic.addVehicle(random(width), random(height));
    //랜덤한 위치에 Vehicle 생성, traffic에 추가
  }
}

function draw() {
  //반복
  background('skyblue');
  // 배경 하늘색으로 그리기
  traffic.run();
  //traffic의 run함수 호출
}

function mouseDragged() {
  //마우스가 드래그됐을 시에 실행
  traffic.addVehicle(mouseX, mouseY);
  //traffic에 새로운 Vehicle을 생성, 위치는 마우스의 위치
}
