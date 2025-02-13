import { useCallback, useEffect, useState } from 'react';

export default function Page() {
  const MAX_DEPTH = 10,
    CANVAS_WIDTH = 1024,
    CANVAS_HEIGHT = 768,
    [depth, setDepth] = useState<number>(0),
    [context, setContext] = useState(null),
    [triangles, setTriangles] = useState([[]]),
    [offset, setOffset] = useState(100),
    [angle, setAngle] = useState(-Math.PI * 0.5);

  const canvasRef = useCallback((node) => {
    if (node) {
      node.width = CANVAS_WIDTH;
      node.height = CANVAS_HEIGHT;
      const canvasContext = node.getContext('2d');
      setContext(canvasContext);
    }
  }, []);

  useEffect(() => {
    let trianglesArray = [];
    for (let i = 0; i < 3; i += 1) {
      trianglesArray.push({
        x: CANVAS_WIDTH * 0.5 + Math.cos(angle) * CANVAS_HEIGHT * 0.5,
        y: CANVAS_HEIGHT * 0.65 + Math.sin(angle) * CANVAS_HEIGHT * 0.5,
      });
      setAngle((angle) => (angle += (Math.PI * 2) / 3));
    }
    setTriangles(trianglesArray);
    console.log('useEffect[] trianglesArray =', trianglesArray);

    draw();
    // subdivide();
  }, []);

  // useEffect(() => {
  //   subdivide();
  //   draw();
  // }, [context, depth]);

  function draw() {
    if (context) {
      context.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
      context.strokeStyle = 'black';
      context.lineWidth = 0.5;
      context.beginPath();

      for (let i = 0; i < triangles.length; i += 1) {
        drawTriangle(triangles[i]);
      }
      context.stroke();
    }
  }

  function drawTriangle(triangle) {
    context.moveTo(triangle[0].x, triangle[0].y);
    context.lineTo(triangle[1].x, triangle[1].y);
    context.lineTo(triangle[2].x, triangle[2].y);
    context.lineTo(triangle[0].x, triangle[0].y);
  }

  function subdivide() {
    let triangle,
      p0,
      p1,
      p2,
      p3,
      p4,
      p5,
      xxx = offset * 2 - offset; // rename

    for (let j = triangles.length - 1; j >= 0; j -= 1) {
      triangle = triangles[j];
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

      triangles.splice(j, 1);
    }
    setOffset((offset) => (offset *= 0.5));
  }

  function handleClick() {
    if (depth < MAX_DEPTH) {
      setDepth(depth + 1);
    }
  }

  return (
    <section>
      <h2>Sierpinsky Random</h2>
      <p>Click below to generate the Sierpinsky gasket:</p>
      <p>
        Iteration {depth}/{MAX_DEPTH}
      </p>
      <button>Reset</button>
      <canvas ref={canvasRef} onClick={handleClick} />
    </section>
  );
}
