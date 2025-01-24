import { useCallback, useEffect, useState } from 'react';

export default function Page() {
  const CANVAS_WIDTH = 1024;
  const CANVAS_HEIGHT = 400;
  const MAX_ITERATIONS = 5;
  const [iteration, setIteration] = useState<number>(0);
  const [context, setContext] = useState(null);
  const { sqrt, sin, cos, atan2, PI } = Math;
  const pInitial = {
    x: CANVAS_WIDTH * 0.1,
    y: CANVAS_HEIGHT * 0.75,
  };

  const pFinal = {
    x: CANVAS_WIDTH * 0.9,
    y: CANVAS_HEIGHT * 0.75, // same as pInitial but can be changed.
  };

  const canvasRef = useCallback((node) => {
    if (node) {
      node.width = CANVAS_WIDTH;
      node.height = CANVAS_HEIGHT;
      const canvasContext = node.getContext('2d');

      setContext(canvasContext);
    }
  }, []);

  useEffect(() => {
    if (context) {
      context.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
      context.save(); // saves the entire state of the canvas by pushing the current state onto a stack.
      context.translate(CANVAS_WIDTH * 0.5, CANVAS_HEIGHT * 0.66);
      context.restore(); // restores the most recently saved canvas state by popping the top entry in the drawing state stack.
      context.lineWidth = 1;

      koch(pInitial, pFinal, iteration);
    }
  }, [context, iteration]);

  function koch(
    p0: { x: number; y: number },
    p1: { x: number; y: number },
    depth: number
  ) {
    let dx = p1.x - p0.x,
      dy = p1.y - p0.y,
      dist = sqrt(dx * dx + dy * dy), // length of the main segment
      unit = dist / 3, // length of each sub-segment
      angle = atan2(dy, dx), // angle of the main segment measured in radians.
      pa,
      pb,
      pc;

    // calculate the three intermediate points:
    pa = {
      x: p0.x + cos(angle) * unit,
      y: p0.y + sin(angle) * unit,
    };
    pb = {
      x: pa.x + cos(angle - PI / 3) * unit,
      y: pa.y + sin(angle - PI / 3) * unit,
    };
    pc = {
      x: p0.x + cos(angle) * unit * 2, // funny things if x: pa.x * 2
      y: p0.y + sin(angle) * unit * 2, // funny things if y: pa.y * 2
    };

    // console.log('kock()', depth);
    // console.log({ p0, p1, depth, dx, dy, dist, unit, angle });
    // console.log({ pa, pb, pc });

    // debugger;

    if (depth === 0) {
      context.beginPath();
      context.moveTo(p0.x, p0.y);
      context.lineTo(pa.x, pa.y);
      context.lineTo(pb.x, pb.y);
      context.lineTo(pc.x, pc.y);
      context.lineTo(p1.x, p1.y);
      context.stroke();
    } else {
      let newDepth = depth - 1;
      koch(p0, pa, newDepth);
      // debugger;
      koch(pa, pb, newDepth);
      // debugger;
      koch(pb, pc, newDepth);
      // debugger;
      koch(pc, p1, newDepth);
    }
  }

  function handleClick() {
    if (iteration < MAX_ITERATIONS) {
      setIteration(iteration + 1);
    }
  }

  function handleReset() {
    setIteration(0);
  }

  return (
    <section>
      <h2>Curva de Kock</h2>
      <p>
        Este es el primer fractal auto-similar descrito en 1904 por el
        matemático sueco{' '}
        <b>
          <a
            href="https://es.wikipedia.org/wiki/Helge_von_Koch"
            target="_blank"
          >
            Niels Fabian Helge von Koch
          </a>
        </b>{' '}
        (1870-1924). <br />
      </p>
      <h3>Construcción</h3>
      <ol>
        <li>Se divide una línea en tres segmentos.</li>
        <li>
          El segmento de la mitad se convierte en un triángulo equilátero.
        </li>
        <li>Se repite el paso 1 y 2 en los lados del triángulo anterior.</li>
        <li>Se repite el ciclo.</li>
      </ol>
      <h3>Propiedades</h3>
      <ul>
        <li>Tiene una longitud infinita.</li>
        <li>Dimensión fractal (D) = ln4/ln3 = 1.272618 (verificar).</li>
        <li>Es una línea continua no derivable.</li>
      </ul>
      <h3>Más información</h3>
      <p>
        <a
          href="https://www.enriclopezruestes.cat/es/curva-de-Koch/"
          target="_blank"
        >
          www.enriclopezruestes.cat/es/curva-de-Koch
        </a>{' '}
        <br />
        <a
          href="https://es.wikipedia.org/wiki/Copo_de_nieve_de_Koch"
          target="_blank"
        >
          wikipedia.org/wiki/Copo_de_nieve_de_Koch
        </a>{' '}
        <br />
        <a
          href="https://larryriddle.agnesscott.org/ifs/ksnow/ksnow.htm"
          target="_blank"
        >
          https://larryriddle.agnesscott.org/ifs/ksnow/ksnow.htm
        </a>
      </p>
      <hr />
      <p>Clic sobre el rectángulo para generar:</p>
      <canvas ref={canvasRef} onClick={handleClick} />
      Iteration: {iteration} of {MAX_ITERATIONS} <br />
      <button onClick={handleReset}>reset</button>
    </section>
  );
}
