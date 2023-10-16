class Mover {
  constructor(x, y, mass) {
    this.pos = createVector(x, y);
    this.vel = createVector(0, 0);
    this.acc = createVector(0, 0);
    // this.accDisplay = createVector(0, 0);
    this.mass = mass;
    this.radius = this.mass ** 0.5 * 10;
    this.isHover;
    this.isDragging;
    this.draggingOffset;
  }

  applyForce(force) {
    let forceDiviedByMass = createVector(force.x, force.y);
    forceDiviedByMass.div(this.mass);

    this.acc.add(forceDiviedByMass);
    //f = ma, f/m = a
  }

  update() {
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    // this.accDisplay.set(this.acc);
    this.acc.mult(0); //계속 초기화해줘야 함
  }
  contactEdge() {
    if (this.pos.y >= height - 1 - this.radius - 1) {
      return true;
    } else {
      return false;
    }
  }

  checkEdges() {
    const bounce = -0.9;
    if (this.pos.x < 0 + this.radius) {
      this.pos.x -= 0 + this.radius;
      this.pos.x *= -1;
      this.pos.x += 0 + this.radius;
      this.vel.x *= bounce;
    } else if (this.pos.x > width - 1 - this.radius) {
      this.pos.x -= width - 1 - this.radius;
      this.pos.x *= -1;
      this.pos.x += width - 1 - this.radius;
      this.vel.x *= bounce;
    }
    if (this.pos.y > height - 1 - this.radius) {
      this.pos.y -= height - 1 - this.radius;
      this.pos.y *= -1;
      this.pos.y += height - 1 - this.radius;
      this.vel.y *= bounce;
    }
  }

  display() {
    noStroke();
    fill(0);
    ellipse(this.pos.x, this.pos.y, 2 * this.radius);
  }

  mouseMoved(mX, mY) {
    this.isHover =
      (this.pos.x - mX) ** 2 + (this.pos.y - mY) ** 2 <= this.rad ** 2;
  }

  mousePressed(mX, mY) {
    if (this.isHover) {
    }
  }

  mouseDragged(mX, mY) {
    if (this.isDragging) {
    }
  }

  mouseReleased() {
    this.isDragging = false;
  }
  // displayVector() {
  //   stroke('red');
  //   line(
  //     this.pos.x,
  //     this.pos.y,
  //     this.pos.x + this.vel.x * 10,
  //     this.pos.y + this.vel.y * 10
  //   );
  //   stroke('lime');
  //   line(
  //     this.pos.x,
  //     this.pos.y,
  //     this.pos.x + this.accDisplay.x * 100,
  //     this.pos.y + this.accDisplay.y * 100
  //   );
  // }
}
