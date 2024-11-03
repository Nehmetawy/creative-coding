import p5 from 'p5';
import { SCREEN } from '../utils/constants';

export default class Engine {
  p: p5;
  constructor(p: p5) {
    this.p = p;
  }
  setup() {
    // initializes and all
  }

  draw() {
    this.p.circle(100, 100, 10);
  }
}
