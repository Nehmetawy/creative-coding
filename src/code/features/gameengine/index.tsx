'use client';
import { useEffect, useRef, useState } from 'react';
import p5 from 'p5';
import Engine from './engine/main';
import { SCREEN } from './utils/constants';

const sketch = (p: p5) => {
  const engineInstance = new Engine(p);
  p.setup = () => {
    p.createCanvas(SCREEN.w, SCREEN.h);
    engineInstance.setup();
  };

  p.draw = () => {
    engineInstance.draw();
  };
};

function MyEngine() {
  const p5ContainerRef = useRef<HTMLDivElement>(null);
  const [p5Instance, setP5Instance] = useState<p5 | undefined>(undefined);

  useEffect(() => {
    if (p5ContainerRef.current) {
      setP5Instance(new p5(sketch, p5ContainerRef.current));
    }

    return () => {
      if (p5Instance) {
        p5Instance.remove();
      }
    };
  }, []);
  return <div ref={p5ContainerRef}></div>;
}

export default MyEngine;
