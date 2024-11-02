import p5 from 'p5';

/*
using
    y = r * sin( w * t )

notes
    to create smooth, w = 1
    p.millis() / 10 

*/
function usingTime(p: p5) {
  const w = 10; // angular velocity
  const amplitude = 100;

  const timeinmilli = p.millis(); // return time in milliseconds since canvas create

  let ampY = amplitude * p.sin(timeinmilli * w); // not smooth if w is large
}

/*

notes
    if angle mode === degree
    use frameCount % 360 for optimization
*/

function usingFrame(p: p5) {
  let angle = p.frameCount;
  const amplitude = 100;

  let ampY = amplitude * p.sin(angle);
}
