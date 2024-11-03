'use client';
import { useEffect, useRef } from 'react';
import p5 from 'p5';

type props = {
  sketch: (p: p5) => void;
};

function EngineCanvas({ sketch }: props) {
  const p5ContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let p5Instance: p5;
    if (p5ContainerRef.current) {
      p5Instance = new p5(sketch, p5ContainerRef.current);
    }

    return () => {
      if (p5Instance) {
        p5Instance.remove(); // Clean up the instance on component unmount
      }
    };
  }, []);
  return <div ref={p5ContainerRef}></div>;
}

export default EngineCanvas;
