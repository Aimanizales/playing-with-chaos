import { useCallback, useState } from 'react';

export default function Page() {
  const MAX_DEPTH = 10;
  const CANVAS_WIDTH = 1024;
  const CANVAS_HEIGHT = 768;
  const [depth, setDepth] = useState<number>(0);
  const [context, setContext] = useState(null);

  let triangles = [];
  let offset = 100;

  const canvasRef = useCallback((node) => {
    if (node) {
      node.width = CANVAS_WIDTH;
      node.height = CANVAS_HEIGHT;
      const canvasContext = node.getContext('2d');
      setContext(canvasContext);
    }
  }, []);

  function draw() {
    // if (context) {
    //   context.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    //   context.save();
    //   context.translate(CANVAS_WIDTH * 0.5, CANVAS_HEIGHT * 0.66);
    //   context.scale(100, 100);
    //   drawTriangle(depth);
    //   context.restore();
    // }
  }

  const getPosition = (angle: number, scalar = 1) =>
    [Math.cos(angle), Math.sin(angle)].map((pos) => pos * scalar);

  function drawTriangle(depth: number) {}

  function handleClick() {
    if (depth < MAX_DEPTH) {
      setDepth(depth + 1);
    }
  }

  function subdivide() {
    let i,
      triangle,
      p0,
      p1,
      p2,
      p3,
      p4,
      p5,
      xxx = offset * 2 - offset; // rename

    for (i = triangles.length - 1; i >= 0; i -= 1) {
      triangle = triangles[i];

      p0 = triangle[0];
      p1 = triangle[1];
      p2 = triangle[2];
      p3 = {
        x: (p0.x + p1.x) / 2 + Math.random() * xxx,
        y: (p0.y + p1.y) / 2 + Math.random() * xxx,
      };
      p4 = {
        x: (p1.x + p2.x) / 2 + Math.random() * xxx,
        y: (p1.y + p2.y) / 2 + Math.random() * xxx,
      };
      p5 = {
        x: (p2.x + p0.x) / 2 + Math.random() * xxx,
        y: (p2.y + p0.y) / 2 + Math.random() * xxx,
      };
      triangles.push([p0, p3, p5]);
      triangles.push([p3, p1, p4]);
      triangles.push([p5, p4, p2]);

      triangles.splice(i, 1);
    }
    offset *= 0.5;
  }

  subdivide();
  draw();

  return (
    <section>
      <h2>Sierpinsky Random</h2>
      <p>Click below to generate the Sierpinsky gasket:</p>
      <p>
        Iteration {depth}/{MAX_DEPTH}
      </p>
      {/* <button>Reset</button> */}
      <canvas ref={canvasRef} onClick={handleClick} />
    </section>
  );
}
