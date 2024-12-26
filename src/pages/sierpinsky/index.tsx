import { useCallback, useEffect, useRef, useState } from 'react';

export default function Page() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [depth, setDepth] = useState<number>(0);
  const [canvasContext, setCanvasContext] = useState(null);

  const RADIAN_INITIAL = -Math.PI * 0.5; // -90º
  const RADIAN_INCREMENT = (Math.PI * 2) / 3; // 120º
  const CANVAS_SCALE = 300;
  const MAX_DEPTH = 11;
  const CANVAS_WIDTH = 1024;
  const CANVAS_HEIGHT = 768;

  const getPosition = (angle, scalar = 1) =>
    [Math.cos(angle), Math.sin(angle)].map((pos) => pos * scalar);

  function draw() {
    canvasContext.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    canvasContext.save();
    canvasContext.translate(CANVAS_WIDTH * 0.5, CANVAS_HEIGHT * 0.5);
    canvasContext.scale(CANVAS_SCALE, CANVAS_SCALE);

    drawTriangle(depth);

    canvasContext.restore();
  }

  function drawTriangle(depth: number) {
    let radian = RADIAN_INITIAL; // -90º

    if (depth === 0) {
      canvasContext.beginPath();
      canvasContext.moveTo(...getPosition(radian));

      radian += RADIAN_INCREMENT; // 30º
      canvasContext.lineTo(...getPosition(radian));

      radian += RADIAN_INCREMENT; // 150º
      canvasContext.lineTo(...getPosition(radian));

      canvasContext.fill();
    } else {
      relocateAndRedraw(radian, depth);

      radian += RADIAN_INCREMENT; // 30º
      relocateAndRedraw(radian, depth);

      radian += RADIAN_INCREMENT; // 150º
      relocateAndRedraw(radian, depth);
    }
  }

  const relocateAndRedraw = (r: number, d: number) => {
    canvasContext.save();
    canvasContext.translate(...getPosition(r, 0.5));
    canvasContext.scale(0.5, 0.5);
    drawTriangle(d - 1);
    canvasContext.restore();
  };

  function handleClick() {
    const newDepth = depth + 1;
    if (newDepth < MAX_DEPTH) {
      draw();
    }
    setDepth(newDepth);
  }

  useEffect(() => {
    const canvas = canvasRef.current;
    canvas.width = CANVAS_WIDTH;
    canvas.height = CANVAS_HEIGHT;

    const context = canvas.getContext('2d');

    setCanvasContext(context);

    // draw();
  }, []);

  return (
    <section>
      <h2>Sierpinsky</h2>
      <p></p>
      <canvas ref={canvasRef} onClick={handleClick} />
    </section>
  );
}
