import SierpinskyTriangle from '@/components/Fractals/Sierpinsky/SierpinskyTriangle';

export default function Page() {
  return (
    <section>
      <h2>Triángulo de Sierpińsky</h2>
      <p>
        El triángulo de Sierpiński, también llamado junta de Sierpiński o tamiz
        de Sierpiński, es un fractal con la forma general de un triángulo
        equilátero subdividido recursivamente en triángulos equiláteros más
        pequeños.
      </p>
      <p>
        Recibe su nombre del matemático polaco{' '}
        <a
          href="https://es.wikipedia.org/wiki/Wac%C5%82aw_Sierpi%C5%84ski"
          target="_blank"
        >
          Wacław Sierpiński
        </a>{' '}
        (Varsovia 1882-1969), pero se puede rastrear muchos siglos atrás como
        patrón decorativo.
      </p>
      <p>
        De manera análoga al{' '}
        <a
          href="https://es.wikipedia.org/wiki/Conjunto_de_Cantor"
          target="_blank"
        >
          Conjunto de Cantor
        </a>
        , este fractal puede ser obtenido por medio de una sucesión infinita de
        extracciones.
      </p>
      <SierpinskyTriangle />
      <p>
        <a
          href="https://es.wikipedia.org/wiki/Tri%C3%A1ngulo_de_Sierpinski"
          target="_blank"
        >
          https://es.wikipedia.org/wiki/Tri%C3%A1ngulo_de_Sierpinski
        </a>
      </p>
    </section>
  );
}
