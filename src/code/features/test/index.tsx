'use client';
import { P5Canvas } from '@/code/blocks/p5';
import p5 from 'p5';

export const sketch = (p: p5) => {
  const windowWidth = window.innerWidth;
  const windowheight = window.innerHeight;

  p.setup = () => {
    p.createCanvas(400, 400);
    p.background(200);
  };

  p.draw = () => {
    p.fill(255, 0, 0);
  };
};

export default function Test() {
  return <P5Canvas sketch={sketch} />;
}
