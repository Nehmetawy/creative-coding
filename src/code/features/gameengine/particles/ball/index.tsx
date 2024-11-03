import p5 from 'p5';
import { ENGINE } from '../../engine/main';

export interface PARTICLE {
  engine: ENGINE;
  p: p5;
  position: p5.Vector;
  velocity: p5.Vector;
  run(): void;
}

export class Ball implements PARTICLE {
  p;
  engine;
  position;
  velocity;
  constructor(engine: ENGINE) {
    this.engine = engine;
    this.p = this.engine.p;
    this.position = this.p.createVector(0, 0);
    this.velocity = this.p.createVector(0, 0);
  }
  run() {
    // it needs to have velocity and
    // it needs to apply forces
  }
}
