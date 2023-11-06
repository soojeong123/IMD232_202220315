class Traffic {
  //clss Traffic 설정
  constructor() {
    //설정
    this.vehicles = [];
    //vechicles에 array 생성
  }

  run() {
    //실행
    this.vehicles.forEach((eachVehicle) => {
      const separate = eachVehicle.separate(this.vehicles);
      separate.mult(1);
      eachVehicle.applyForce(separate);
      const align = eachVehicle.align(this.vehicles);
      align.mult(0.5);
      eachVehicle.applyForce(align);
      const cohesion = eachVehicle.cohesion(this.vehicles);
      cohesion.mult(0.5);
      eachVehicle.applyForce(cohesion);
      eachVehicle.update();
      eachVehicle.borderInfinite();
      eachVehicle.display();
    });
  }

  addVehicle(x, y) {
    const mass = 1;
    //질량 1로 설정
    this.vehicles.push(
      //vehicle에 아래 내용 저장
      new Vehicle(x, y, mass, mass * 12, 5, 0.1, color(random(360), 100, 40))
      //새로운 vehicle에 괄호 안 내용을 추가 (x,y,질량,질량*12,5,0.1,랜덤색상)
    );
  }
}
