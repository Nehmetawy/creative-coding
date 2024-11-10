import p5 from 'p5';
import { P5Canvas } from '.';
import { PoleWalkerManager } from '../p5Sketch/pole-walker/sketch';

const sketchfun = (p: p5) => {
  var fractal: PoleWalkerManager;
  p.setup = () => {
    p.createCanvas(window.innerWidth || 0, window.innerHeight || 0);
    p.angleMode('degrees');
    p.stroke(500, 50);
    fractal = new PoleWalkerManager(p);
  };

  p.draw = () => {
    // draws the managers
    fractal.draw();
  };
};

function Sketch() {
  return <P5Canvas sketch={sketchfun} />;
}

export default Sketch;
