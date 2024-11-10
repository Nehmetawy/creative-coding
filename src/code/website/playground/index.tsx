import dynamic from 'next/dynamic';
const P5Sketch = dynamic(() => import('@/code/modules/p5/sketch'), {
  ssr: false,
});

function PlayGround() {
  return (
    <div>
      <P5Sketch />
    </div>
  );
}
export default PlayGround;
