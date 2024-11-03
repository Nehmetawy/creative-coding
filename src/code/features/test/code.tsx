import p5 from 'p5';

const CENTER_W = 400;
const CENTER_H = 400;

export class Manager {
  p5: p5;
  particles: Particles[] = [];
  constructor(p: p5) {
    this.p5 = p;
    this.init();
  }

  init() {
    let i = 0;
    while (i < 200) {
      this.particles.push(new Particles(this.p5));
      i++;
    }
  }

  animate() {
    const length = this.particles.length;
    for (let i = 0; i < length; i++) {
      const targetParticle = this.particles[i];
      targetParticle.animate(this.p5);
    }
  }
}

class Particles {
  pos: p5.Vector;
  vel: p5.Vector;
  origin: p5.Vector;
  color: p5.Color;
  constructor(p: p5) {
    this.pos = p.createVector(CENTER_W, CENTER_H);
    const vy = p.random(-100, 100) / 50;
    const vx = p.random(-100, 100) / 50;
    this.vel = p.createVector(vx, vy);
    this.origin = p.createVector(CENTER_W, CENTER_H);
    this.color = p.color(
      p.random(0, 255) % 256,
      p.random(0, 255) % 256,
      p.random(0, 255) % 256,
    );
  }

  animate(p5: p5) {
    // draw the particle
    this.draw(p5);
    // update the particle
    this.update(p5);
    // calculate distance and reset
    this.reset();
  }
  reset() {
    const distance = this.origin.dist(this.pos);
    if (distance > 150) this.pos.set(this.origin);
  }

  draw(p5: p5) {
    p5.stroke(this.color);
    p5.point(this.pos);
  }
  update(p5: p5) {
    this.pos.add(this.vel);
  }
}
