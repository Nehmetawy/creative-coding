import p5 from 'p5';
import { SCREEN } from '../utils/constants';

import { Gravity, FORCE } from '../forces';
import { Ball, PARTICLE } from '../particles';

export interface ENGINE {
  p: p5;
  particles: PARTICLE[];
  forces: FORCE[];
}

export default class Engine implements ENGINE {
  p;
  particles: PARTICLE[];
  forces: FORCE[];
  constructor(p: p5) {
    this.p = p;
    this.particles = [];
    this.forces = [new Gravity(this)];
  }

  setup() {}

  draw() {
    for (let i = 0; i < this.particles.length; i++) {
      this.particles[i].run();
    }
  }
}
