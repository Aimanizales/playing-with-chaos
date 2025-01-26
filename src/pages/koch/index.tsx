import Koch from '@/components/Fractals/Koch/Koch';
import KochSnowflake from '@/components/Fractals/Koch/KochSnowflake';

export default function Page() {
  return (
    <section>
      <h2>Copo de nieve de Koch</h2>
      <KochSnowflake />
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
      <hr />
      <Koch />
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
    </section>
  );
}
