import p5 from 'p5';
const CENTER_W = 400;
const CENTER_H = 400;

var acceleration = 0.1;

export class GaussianDistribution {
  time: number;
  newTime: number;
  p: p5;
  position: p5.Vector;
  velocity: p5.Vector;
  acceleration: p5.Vector;
  constructor(p: p5) {
    this.p = p;
    this.position = this.p.createVector(CENTER_W, CENTER_H);
    this.velocity = this.p.createVector(0.5, 0.3);
    this.acceleration = this.p.createVector(0, 0.1);
    this.time = this.p.millis();
    this.newTime = this.p.millis();
  }
  init() {}
  animate() {
    this.draw();
    this.newTime = this.p.millis();
    const diff = this.newTime - this.time;
    if (diff > 15) {
      this.time = this.newTime;
      this.position.add(this.velocity);
      this.velocity.add(this.acceleration);
      this.collision();
    }
  }

  applyForce() {}

  draw() {
    this.p.point(this.position);
  }
  collision() {
    if (this.position.y > CENTER_H * 2 || this.position.y < 0) {
      this.velocity.mult(1, -0.8);
    }
    if (this.position.x > CENTER_W * 2 || this.position.x < 0) {
      this.velocity.mult(-0.8, 1);
    }
  }
}

export class Gravity {
  p: p5;
  acceleration: p5.Vector;
  constructor(p: p5) {
    this.p = p;
    this.acceleration = this.p.createVector(0, -10);
  }
}
