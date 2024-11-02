import p5 from 'p5';

/*

drawing : sin curve

anglemode === degree

*/
const graphWidth = 100;
const amplitude = 100;

const originY = 100;
const originX = 100;

export const drawsin = (p: p5) => {
  p.beginShape();
  let i = 0;
  while (i < graphWidth) {
    const angle = p.map(i, 0, graphWidth, 0, 360);

    const x = originX - graphWidth / 2;
    const y = originY - amplitude * p.sin(angle); // -, a y+ is down
    p.vertex(x, y);
    i++;
  }
  p.endShape();
};
