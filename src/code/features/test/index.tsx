'use client';
import { P5Canvas, CANVAS_SIZES } from '@/code/blocks/p5';
import p5 from 'p5';

const windowWidth = window.innerWidth;
const windowheight = window.innerHeight;

const CENTER_W = 400;
const CENTER_H = 400;
/*

  dancing ellipses

*/
const amplitude = 100;
const graphWidth = 200;
const size = 100;

function DrawAxis(p: p5) {
  p.line(CENTER_W - size, CENTER_H, CENTER_W + size, CENTER_H);
  p.line(CENTER_W, CENTER_H + size, CENTER_W, CENTER_H - size);
}

const sketch = (p: p5) => {
  p.setup = () => {
    p.createCanvas(CENTER_W * 2, CENTER_H * 2);
    p.angleMode('degrees');
  };

  p.draw = () => {
    p.background(1000);
    p.beginShape();
    let i = 0;
    while (i < graphWidth) {
      const angle = p.map(i, 0, graphWidth, 0, 360);
      p.vertex(
        CENTER_W - graphWidth / 2 + i,
        CENTER_H - amplitude * p.sin(angle),
      );
      i++;
    }
    p.endShape();
    DrawAxis(p);
  };
};

function Test() {
  return <P5Canvas sketch={sketch} />;
}

export default Test;
