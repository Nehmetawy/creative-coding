import p5 from 'p5';
import { ENGINE } from '../engine/main';

export interface FORCE {
  engine: ENGINE;
  p: p5;
  gy: number;
  gx: number;
}

export class Gravity implements FORCE {
  engine;
  p;
  gy;
  gx;
  constructor(engine: ENGINE) {
    this.engine = engine;
    this.p = engine.p;
    this.gy = 1;
    this.gx = 0;
  }
}
