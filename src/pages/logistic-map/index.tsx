import Video from '@/components/Video';
import LogisticMap from '@/components/Fractals/LogisticMap';

export default function Page() {
  return (
    <section>
      <h2>Diagrama de bifurcación logística (Logistic Map)</h2>
      <p>El caos desde una simple ecuación lineal. Caos determinístico.</p>
      <p>
        La ecuación logística surgió en 1976 del artículo del biólogo Robert May
        para hallar un modelo demográfico sencillo que explicase la dinámica de
        una población de la que se ha supuesto que tiene un crecimiento cada vez
        más lento a medida que se acerca a una cantidad de individuos
        considerada como límite. May comprobó que{' '}
        <strong>
          al cambiar los valores del único parámetro del modelo este presentaba
          soluciones muy distintas y a veces muy complejas pese a que se trata
          de una simple aplicación polinómica de grado 2
        </strong>
        . Por ello{' '}
        <strong>
          este modelo es a menudo citado como un ejemplo de representación de lo
          complejo que puede ser un comportamiento caótico aunque se parta de un
          modelo de sencilla expresión
        </strong>
        .
      </p>

      <p>
        <i>
          «Si un sistema tan trivial como esta ecuación puede evidenciar una
          impredecibilidad tan caótica entonces se debería ser menos taxativo y
          dogmático en relación con los efectos que se han predicho que tendrán
          ciertas políticas ecológicas sobre un sistema tan gigante y complejo
          como es el planeta Tierra.
        </i>{' '}
        — John Allen Paulos (Matemático y divulgador)
      </p>
      <p>
        El diagrama de horquilla (pitchfork diagram) mostrado a continuación es
        una reproducción visual de cómo una función logística tiene a un sistema
        caótico (Butterfly Effect, Philip Merilees, 1972).
      </p>

      <LogisticMap />

      <h3>Más información</h3>
      <Video
        title="Esta ecuación cambiará tu modo de ver el mundo"
        channel="Veritasium en Español"
        src="https://www.youtube.com/embed/EOvLhZPevm0?si=29JnopNOotUiOrOB"
      />

      <Video
        title="This equation will change how you see the world (the logistic map)"
        channel="Veritasium"
        src="https://www.youtube.com/embed/ovJcsL7vyrk?si=6z3E_dpWsrB-HZ3v"
      />

      <a
        href="https://es.wikipedia.org/wiki/Aplicaci%C3%B3n_log%C3%ADstica"
        target="_blank"
      >
        https://es.wikipedia.org/wiki/Aplicación_logística
      </a>
    </section>
  );
}
