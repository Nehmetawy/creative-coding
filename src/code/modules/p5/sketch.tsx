import p5 from 'p5';
import { P5Canvas } from '.';

const sketchfun = (p: p5) => {
  p.setup = () => {
    p.createCanvas(window.innerWidth || 0, window.innerHeight || 0);
    p.angleMode('degrees');
    p.stroke(500, 50);
  };

  p.draw = () => {
    // p.translate(window.innerWidth / 8, (window.innerHeight * 2) / 3);
  };
};

function Sketch() {
  return <P5Canvas sketch={sketchfun} />;
}

export default Sketch;
