import { useEffect, useRef } from 'react';

export default function Page() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const canvasContext = canvas.getContext('2d');
    canvas.width = 1024;
    canvas.height = 768;

    const minR = 2;
    const maxR = 4;
    const minP = 0;
    const maxP = 1;

    let p = 0.5;
    let dr = (maxR - minR) / 1024;
    let dp = (maxP - minP) / 768;
    let interval = setInterval(iterate, 10);
    let x = 0;

    function iterate() {
      p = 0.5;
      for (var i = 0; i < 200; i += 1) {
        oneYear(i);
      }
      x += 1;
      if (x >= 1024) {
        clearInterval(interval);
      }
    }

    function oneYear(year) {
      let r = minR + x * dr;
      let y;

      p = p * r * (1 - p);

      if (year > 100) {
        y = 768 - (p - minP) / dp;
        canvasContext.fillRect(x, y, 1, 1);
      }
    }
  }, []);

  return (
    <section>
      <h2>Bifurcation</h2>
      <canvas ref={canvasRef} />
    </section>
  );
}
