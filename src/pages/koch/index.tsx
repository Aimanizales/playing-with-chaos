import Koch from '@/components/Fractals/Koch/Koch';
import KochSnowflake from '@/components/Fractals/Koch/KochSnowflake';
import Video from '@/components/Video';

export default function Page() {
  return (
    <section>
      <h2>Copo de nieve de Koch</h2>
      <p>
        El copo de nieve de Koch, también llamado{' '}
        <strong>estrella de Koch</strong> o <strong>isla de Koch</strong>, es
        una curva cerrada continua pero no diferenciable en ningún punto.
      </p>
      <p>
        Este es el primer fractal auto-similar descrito en 1904 por el
        matemático sueco{' '}
        <a href="https://es.wikipedia.org/wiki/Helge_von_Koch" target="_blank">
          Niels Fabian Helge von Koch
        </a>{' '}
        (1870-1924) en un artículo titulado «Acerca de una curva continua que no
        posee tangentes y obtenida por los métodos de la geometría elemental»
      </p>
      <KochSnowflake />
      <p>
        Su construcción más simple se realiza mediante un proceso iterativo que
        se inicia partiendo en tres un segmento de recta e insertando dos más en
        el tercero medio a manera de un triángulo equilátero, el proceso se
        repite infinidad de veces. La curva de Koch es un caso particular de
        curva de De Rham.
      </p>
      <Video
        title="DIMENSIÓN FRACTAL: El Copo de Nieve de Koch ❄️"
        channel="Mates Mike"
        src="https://www.youtube.com/embed/eKY_1j9VrEA?si=5DRPsQxv3fEaDAhM"
      />
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
