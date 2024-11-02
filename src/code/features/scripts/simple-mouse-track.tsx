import p5 from 'p5';
const CENTER_W = 400;
const CENTER_H = 400;

/*
    A simple mouse tracker

    draw a growing circle etc. at the given point

*/
const sketch = (p: p5) => {
  p.setup = () => {
    p.createCanvas(CENTER_W * 2, CENTER_H * 2);
    p.background(200);
  };
  p.draw = () => {
    const x = p.mouseX;
    const y = p.mouseY;
    p.point(x, y);
  };
};
