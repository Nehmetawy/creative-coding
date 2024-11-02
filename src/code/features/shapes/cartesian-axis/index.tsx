import p5 from 'p5';

/*

drawing : cartesian axis

*/

const originY = 100;
const originX = 100;
const axisLength = 200;

export const drawCartesianAxis = (p: p5) => {
  p.line(originX - axisLength, originY, originX + axisLength, originY);
  p.line(originX, originY + axisLength, originX, originY - axisLength);
};
