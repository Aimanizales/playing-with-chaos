import { useEffect, useRef, useState } from 'react';

export default function LogisticMap() {
  const canvasRef = useRef(null);
  const [reproductionRate, setReproductionRate] = useState(0);

  useEffect(() => {
    const CANVAS_WIDTH = 900,
      CANVAS_HEIGHT = 500;

    const canvas = canvasRef.current;
    const canvasContext = canvas.getContext('2d');

    canvas.width = CANVAS_WIDTH;
    canvas.height = CANVAS_HEIGHT;

    const minR = 2,
      maxR = 4,
      minP = 0,
      maxP = 1,
      dr = (maxR - minR) / CANVAS_WIDTH,
      dp = (maxP - minP) / CANVAS_HEIGHT,
      interval = setInterval(iterate, 10);

    let population = 0.5, // in a given year
      x = 0;

    function iterate() {
      for (let i = 0; i < 200; i += 1) {
        oneYear(i);
      }
      x = x + 1;
      if (x >= CANVAS_WIDTH) {
        clearInterval(interval);
      }
    }

    function oneYear(year: number) {
      /**
        reproductionRate is a decimal number above 1. 
        If 1.1, the population will increase by 10% each year. 2.0, population would double.
       */
      const rate = minR + x * dr;
      setReproductionRate(rate);
      let y;

      population = population * rate * (1 - population); // Logistic map

      if (year > 100) {
        y = CANVAS_HEIGHT - (population - minP) / dp;
        canvasContext.fillRect(x, y, 1, 1);
      }
    }
  }, []);

  //TODO: add reset button
  return (
    <>
      <span style={{ fontSize: '0.7rem' }}>rate = {reproductionRate}</span>{' '}
      <br />
      <canvas ref={canvasRef} />
    </>
  );
}
