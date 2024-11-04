import p5, { Vector } from 'p5';
const CENTER_W = 400;
const CENTER_H = 400;

export class Code {
  time: number;
  newTime: number;
  p: p5;
  particles: Particles[];
  constructor(p: p5) {
    this.p = p;
    this.time = this.p.millis();
    this.newTime = this.p.millis();
    this.particles = [];
    for (let i = 0; i < 10; i++) {
      this.particles.push(new Particles(this.p));
    }
  }
  init() {}
  animate() {
    this.newTime = this.p.millis();
    const diff = this.newTime - this.time;
    if (diff > 15) {
      this.time = this.newTime;
      for (let i = 0; i < 10; i++) {
        this.particles[i].action();
      }
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

export class Particles {
  p: p5;
  position: p5.Vector;
  velocity: p5.Vector;
  acceleration: p5.Vector;
  damping: number;
  mass: number;
  constructor(p: p5) {
    this.p = p;
    const posx = this.p.random(0, 1);
    const posy = this.p.random(0, 1);
    const velx = this.p.random(0, 1);
    const vely = this.p.random(0, 1);
    const finalx = this.p.map(posx, 0, 1, 0, CENTER_W);
    const finaly = this.p.map(posx, 0, 1, 0, CENTER_H);
    this.position = this.p.createVector(finalx, finaly);

    this.velocity = this.p.createVector(velx, vely);
    this.acceleration = this.p.createVector(0, 0.5);
    this.damping = 1;
    this.mass = this.p.floor(this.p.random(10, 30));
  }
  action() {
    this.draw();
    this.move();
    this.collision();
  }
  move() {
    //
    this.position.add(this.velocity);
    // apply  force
    const f = this.acceleration.copy();
    this.velocity.add(f.div(this.mass));
  }
  draw() {
    this.p.circle(this.position.x, this.position.y, this.mass);
  }
  collision() {
    if (this.position.y > CENTER_H * 2 || this.position.y < 0) {
      this.velocity.mult(1, -1 * this.damping);
      if (this.position.y > CENTER_H * 2) {
        this.position.y = CENTER_W * 2;
      }
      if (this.position.y < 0) {
        this.position.y = 0;
      }
    }
    if (this.position.x > CENTER_W * 2 || this.position.x < 0) {
      this.velocity.mult(-1 * this.damping, 1);
      if (this.position.x > CENTER_W * 2) {
        this.position.x = CENTER_W * 2;
      }
      if (this.position.x < 0) {
        this.position.x = 0;
      }
    }
  }
}
