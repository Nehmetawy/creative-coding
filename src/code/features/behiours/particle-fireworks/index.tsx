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

  constructor(p: p5) {
    this.pos = p.createVector(CENTER_W, CENTER_H);
    const vy = (-1 * p.random(0, 100)) / 100;
    const vx = (-1 * p.random(0, 100)) / 100;
    this.vel = p.createVector(vx, vy);
  }

  animate(p5: p5) {
    // draw the particle
    this.draw(p5);
    // update the particle
    this.update(p5);
  }
  draw(p5: p5) {
    p5.point(this.pos);
  }
  update(p5: p5) {
    this.pos.add(this.vel);
  }
}
