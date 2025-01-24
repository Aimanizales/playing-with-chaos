import { useEffect, useRef } from 'react';

export default function Page() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const CANVAS_WIDTH = 1024;
    const CANVAS_HEIGHT = 768;

    const canvas = canvasRef.current;
    const canvasContext = canvas.getContext('2d');

    canvas.width = CANVAS_WIDTH;
    canvas.height = CANVAS_HEIGHT;

    const interval = setInterval(iterate, 500);

    let x = 0;

    function iterate() {
      for (let i = 0; i < 200; i += 1) {
        draw();
      }
      x = x + 1;

      if (x >= CANVAS_WIDTH) {
        clearInterval(interval);
      }
    }

    function draw() {
      const x = Math.random() * (CANVAS_WIDTH - 100),
        y = Math.random() * (CANVAS_HEIGHT - 100),
        w = 20 + Math.random() * 100,
        h = 20 + Math.random() * 100,
        r = Math.floor(Math.random() * 256),
        g = Math.floor(Math.random() * 256),
        b = Math.floor(Math.random() * 256);

      canvasContext.fillStyle = 'rgb(' + r + ',' + g + ',' + b + ')';
      canvasContext.fillRect(x, y, w, h);
    }
  }, []);

  return (
    <section>
      <h2>Ejemplo canvas</h2>
      <p>
        Esto no es un fractal, es solo para analizar los ciclos en canvas con
        React.
      </p>
      <canvas ref={canvasRef} />
    </section>
  );
}
