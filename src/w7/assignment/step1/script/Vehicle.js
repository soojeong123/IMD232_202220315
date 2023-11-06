class Vehicle {
  //class Vehicle을 설정
  constructor(x, y, mass, rad, speedMx, forceMx, color) {
    //class의 설정, 받을 값을 괄호 안에 기입
    this.pos = createVector(x, y);
    //위치 백터화, x, y값을 초기값으로
    this.vel = p5.Vector.random2D();
    //속도 무작위로 생성
    this.acc = createVector();
    //가속도 백터화
    this.mass = mass;
    //질량-> mass를 받아옴
    this.rad = rad;
    //반지름-> rad를 받아옴
    this.speedMx = speedMx;
    //최대속도-> speedMx를 받아옴
    this.forceMx = forceMx;
    //최대 힘-> forceMx를 받아옴
    this.neighborhooodRad = 50;
    //주변 물체와의 반경을 50으로 설정
    this.color = color;
    //색상-> color를 받아옴
  }

  cohesion(others) {
    //cohesion 함수 설정, other를 받음
    let cnt = 0;
    //cnt 변수 설정, 값 = 0
    const steer = createVector(0, 0);
    //steer 상수 선언, 벡터화, (0, 0)을 초기값으로
    others.forEach((each) => {
      //others 각각의 요소에 설정
      if (each !== this) {
        //자신을 제외
        const distSq =
          (this.pos.x - each.pos.x) ** 2 + (this.pos.y - each.pos.y) ** 2;
        //내 위치와 다른 물체 사이의 거리 제곱
        if (distSq < this.neighborhooodRad ** 2) {
          steer.add(each.pos);
          cnt++;
          //거리가 범위 이내라면, 다른 물체의 위치를 더함
        }
      }
    });

    if (cnt > 0) {
      //cnt가 0보다 클 때(주변에 물체가 있을 때)
      steer.div(cnt);
      //steer를 주변 물체 수로 나눔(= 평균 구하기)
      steer.sub(this.pos);
      // steer에서 현재 위치를 빼기
      steer.setMag(this.speedMx);
      //steer의 크기를 speedMx로 제한
      steer.sub(this.vel);
      //steer에서 현재 속도를 빼기
      steer.limit(this.forceMx);
      //steer의 크기를 forceMx로 제한
    }
    return steer; //steer 값 반환
  }

  align(others) {
    //align 함수 설정, others를 받음
    let cnt = 0;
    //cnt 변수 설정, 값 = 0
    const steer = createVector(0, 0);
    //steer 상수 선언, 벡터화, (0, 0)을 초기값으로
    others.forEach((each) => {
      //others 각각의 요소에 설정
      if (each !== this) {
        //자신을 제외
        const distSq =
          (this.pos.x - each.pos.x) ** 2 + (this.pos.y - each.pos.y) ** 2;
        //내 위치와 다른 물체 사이의 거리 제곱
        if (distSq < this.neighborhooodRad ** 2) {
          steer.add(each.vel);
          cnt++;
          //거리가 범위 이내라면, 다른 물체의 위치를 더함
        }
      }
    });
    if (cnt > 0) {
      //cnt가 0보다 클 때(주변에 물체가 있을 때)
      steer.div(cnt);
      //steer를 주변 물체 수로 나눔
      steer.setMag(this.speedMx);
      //steer의 크기를 speedMx로 제한
      steer.sub(this.vel);
      //steer에서 현재 속도를 빼기
      steer.limit(this.forceMx);
      //steer의 크기를 forceMx로 제한
    }
    return steer;
    //steer 값 반환
  }

  separate(others) {
    //separate 함수 설정 및 others 받아오기
    let cnt = 0;
    //cnt 변수 설정, 값 = 0
    const steer = createVector(0, 0);
    //steer 상수 선언, 벡터화, (0, 0)을 초기값으로
    others.forEach((each) => {
      //others 각각의 요소에 설정
      if (each !== this) {
        //자신을 제외
        const dist = this.pos.dist(each.pos);
        //상수 dist = this.pos에서 each.pos까지의 거리
        if (dist > 0 && this.rad + each.rad > dist) {
          //물체끼리의 거리가 0보다 크고, 반지름 합보다는 작은 경우(= 충돌했을 때)
          const distNormal = dist / (this.rad + each.rad);
          //distNormal =
          const towardMeVec = p5.Vector.sub(this.pos, each.pos);
          //충돌한 원의 벡터 =
          towardMeVec.setMag(1 / distNormal);
          //towardMeVec를 (1/distNormal)로 제한
          steer.add(towardMeVec);
          // steer에 towardMeVec 더하기
          cnt++;
          //cnt에 1을 더함
        }
      }
    });

    if (cnt > 0) {
      //cnt가 0보다 클 때
      steer.div(cnt);
      //steer를 주변 물체 수로 나눔
      steer.setMag(this.speedMx);
      //steer의 크기를 speedMx로 제한
      steer.sub(this.vel);
      //steer에서 현재 속도를 빼기
      steer.limit(this.forceMx);
      //steer의 크기를 forceMx로 제한
    }
    return steer;
    //steer 값 반환
  }

  applyForce(force) {
    //힘 적용, force 받아옴
    const forceDivedByMass = p5.Vector.div(force, this.mass);
    //forceDivedByMass = force에서 질량을 나눈 값
    this.acc.add(forceDivedByMass);
    //가속도에 forceDivedByMass를 더하기
  }

  update() {
    //아래 내용을 업데이트
    this.vel.add(this.acc);
    //속도에 가속도 더하기
    this.vel.limit(this.speedMx);
    //속도를 speedMx로 제한
    this.pos.add(this.vel);
    //위치에 속도 더하기
    this.acc.mult(0);
    //가속도 초기화
  }

  borderInfinite() {
    //화면밖으로 나가면 다시 돌아오게 하는 함수
    if (this.pos.x < -infiniteOffset) {
      //pos.x값이 화면 왼쪽으로 넘어가면
      this.pos.x = width + infiniteOffset;
      //pos.x값을 오른쪽 끝으로 이동
    } else if (this.pos.x > width + infiniteOffset) {
      //pos.x값이 화면 오른쪽으로 넘어가면
      this.pos.x = -infiniteOffset;
      //pos.x값을 왼쪽 끝으로 이동
    }
    if (this.pos.y < -infiniteOffset) {
      //pos.y값이 화면 위로 넘어가면
      this.pos.y = height + infiniteOffset;
      //pos.y값을 화면 아래쪽 끝으로 이동
    } else if (this.pos.y > height + infiniteOffset) {
      //pos.y값이 화면 아래로 넘어가면
      this.pos.y = -infiniteOffset;
      //pos.y값을 화면 위쪽 끝으로 이동
    }
  }

  display() {
    //화면에 표시
    push();
    //시작
    translate(this.pos.x, this.pos.y);
    //(pos.x, pos.y)로 이동
    rotate(this.vel.heading());
    //마우스 방향으로 회전
    noStroke();
    //윤곽선 없음
    fill(this.color);
    //받은 color로 색 변경
    beginShape();
    //도형 그리기
    vertex(this.rad, 0);
    //(도형의 반지름 값, 0) 위치
    vertex(this.rad * cos(radians(-135)), this.rad * sin(radians(-135)));
    //-135도로 rad만큼 떨어진 좌표 (x,y), (오른쪽 위 꼭짓점)
    vertex(0, 0);
    //(0, 0) 도형의 중심
    vertex(this.rad * cos(radians(135)), this.rad * sin(radians(135)));
    //135도로 rad만큼 떨어진 좌표 (x,y) (오른쪽 아래 꼭짓점)
    endShape(CLOSE);
    //도형 그리기 끝
    pop();
    //끝
  }
}
