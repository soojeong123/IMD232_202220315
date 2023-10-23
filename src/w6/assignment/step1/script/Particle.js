class Particle {
  constructor(x, y, color) {
    this.pos = createVector(x, y, color);
    this.vel = createVector(0, 0);
    // this.vel.rotate((TAU / 360) * random(-150, -30));
    this.acc = createVector(0, 0);
    this.rad = 8;
    this.lifeSpan = 516;
    this.color = color;
  }

  applyForce(force) {
    this.acc.set(force);
  }

  update() {
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.acc.mult(0);
    this.lifeSpan -= 2;
  }

  display() {
    noStroke();
    fill(this.color);
    // stroke(0, this.lifeSpan);
    // fill(127, this.lifeSpan);
    rect(this.pos.x, this.pos.y, this.rad * 2);
  }

  isDead() {
    return this.lifeSpan < 0;
  }
}
