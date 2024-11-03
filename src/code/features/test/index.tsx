'use client';
import { P5Canvas } from '@/code/blocks/p5';
import p5 from 'p5';
import { GaussianDistribution } from '../shapes/gaussianDistribution';

const windowWidth = window.innerWidth;
const windowheight = window.innerHeight;

const CENTER_W = 400;
const CENTER_H = 400;

const sketch = (p: p5) => {
  let gaussian = new GaussianDistribution(p);
  p.setup = () => {
    p.createCanvas(CENTER_W * 2, CENTER_H * 2);
    p.background(1000);
    p.angleMode('degrees');
    p.strokeWeight(5);
    gaussian.init();
  };

  p.draw = () => {
    p.background(1000);
    gaussian.animate();
  };
};

function Test() {
  return <P5Canvas sketch={sketch} />;
}

export default Test;
