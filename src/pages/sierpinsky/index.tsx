import { useCallback, useState } from 'react';

export default function Page() {
  const RADIAN_INITIAL = -Math.PI * 0.5; // -90º
  const RADIAN_INCREMENT = (Math.PI * 2) / 3; // 120º
  const CANVAS_SCALE = 500;
  const MAX_DEPTH = 10;
  const CANVAS_WIDTH = 1024;
  const CANVAS_HEIGHT = 768;
  const [depth, setDepth] = useState<number>(0);
  const [context, setContext] = useState(null);

  const canvasRef = useCallback((node) => {
    if (node) {
      node.width = CANVAS_WIDTH;
      node.height = CANVAS_HEIGHT;
      const canvasContext = node.getContext('2d');
      setContext(canvasContext);
    }
  }, []);

  function draw() {
    if (context) {
      context.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
      context.save();
      context.translate(CANVAS_WIDTH * 0.5, CANVAS_HEIGHT * 0.66);
      context.scale(CANVAS_SCALE, CANVAS_SCALE);

      drawTriangle(depth);

      context.restore();
    }
  }

  const getPosition = (angle: number, scalar = 1) =>
    [Math.cos(angle), Math.sin(angle)].map((pos) => pos * scalar);

  function drawTriangle(depth: number) {
    let radian = RADIAN_INITIAL; // -90º

    if (depth === 0) {
      context.beginPath();
      context.moveTo(...getPosition(radian));

      radian += RADIAN_INCREMENT; // 30º
      context.lineTo(...getPosition(radian));

      radian += RADIAN_INCREMENT; // 150º
      context.lineTo(...getPosition(radian));

      context.fill();
    } else {
      relocateAndRedraw(radian, depth);

      radian += RADIAN_INCREMENT; // 30º
      relocateAndRedraw(radian, depth);

      radian += RADIAN_INCREMENT; // 150º
      relocateAndRedraw(radian, depth);
    }
  }

  const relocateAndRedraw = (r: number, d: number) => {
    context.save();
    context.translate(...getPosition(r, 0.5));
    context.scale(0.5, 0.5);
    drawTriangle(d - 1);
    context.restore();
  };

  function handleClick() {
    if (depth < MAX_DEPTH) {
      setDepth(depth + 1);
    }
  }

  function handleReset() {
    setDepth(0);
  }

  draw(); // TODO: verify this function call.

  return (
    <section>
      <h2>Triángulo de Sierpinsky (Sierpinsky Gasket)</h2>
      <p>Clic en el rectángulo para generar</p>
      <p>
        Iteration {depth}/{MAX_DEPTH}
      </p>
      <button onClick={handleReset}>Reset</button>
      <canvas ref={canvasRef} onClick={handleClick} />
    </section>
  );
}
