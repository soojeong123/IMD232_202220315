class Traffic {
  //clss Traffic 설정
  constructor() {
    //객체 생성
    this.vehicles = [];
    //vechicles에 array 생성
  }

  run() {
    //실행
    this.vehicles.forEach((eachVehicle) => {
      //vehicles의 각 요소들을 반복하며 (eachVehicle)을 실행
      const separate = eachVehicle.separate(this.vehicles);
      //separate = 각 요소들의 거리를 계산
      separate.mult(1);
      //separate에 곱하기 1
      eachVehicle.applyForce(separate);
      //eachVehicle에 separate를 받은 applyForce를 실행
      const align = eachVehicle.align(this.vehicles);
      //align = vehicles의 값을 eachVehicle에 전달
      align.mult(0.5);
      //align 값에 곱하기 0.5
      eachVehicle.applyForce(align);
      //eachVehicle에 align 값을 받은 applyForce를 실행
      const cohesion = eachVehicle.cohesion(this.vehicles);
      cohesion.mult(0.5);
      //cohesion 값에 곱하기 0.5
      eachVehicle.applyForce(cohesion);
      //eachVeicle에 cohesion 값을 받은 applyForce를 실행
      eachVehicle.update();
      //eachVehicle를 업데이트
      eachVehicle.borderInfinite();
      //eachVehicle의 borderInfinite 불러오기
      eachVehicle.display();
      //eachVehicle를 화면에 표시
    });
  }

  addVehicle(x, y) {
    const mass = 1;
    //질량 1로 설정
    this.vehicles.push(
      //vehicle에 아래 내용 입력
      new Vehicle(x, y, mass, mass * 12, 5, 0.1, color(random(360), 100, 40))
      //새로운 vehicle에 (x, y, mass, rad, speedMx, forceMx, color) 값을 입력
    );
  }
}
