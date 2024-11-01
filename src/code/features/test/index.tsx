'use client';
import { P5Canvas } from '@/code/blocks/p5';
import p5 from 'p5';

const CENTER_W = 400;
const CENTER_H = 400;

export const sketch = (p: p5) => {
  const windowWidth = window.innerWidth;
  const windowheight = window.innerHeight;

  let pos = p.createVector(CENTER_W, CENTER_H);
  let p1 = p.createVector(2, 2);

  p.setup = () => {
    p.createCanvas(CENTER_W * 2, CENTER_H * 2);
    p.background(200);
    // p.point(pos);
  };

  p.draw = () => {
    pos.add(p1);
    p.background(200);
    p.stroke(5);
    p.point(pos);
  };
};

export default function Test() {
  return <P5Canvas sketch={sketch} />;
}
