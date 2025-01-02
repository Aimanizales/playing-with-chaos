import { useEffect, useRef } from 'react';

export default function Page() {
  return (
    <section>
      <h2>¿Qué es un fractal?</h2>
      <p>
        Un fractal es un objeto geométrico caracterizado por presentar una
        estructura que se repite a diferentes escalas. En cierto modo, se trata
        de un patrón sin fin. Así, la Figura 1 muestra un fractal del plano. El
        término fue propuesto por Benoît Mandelbrot en 1975. Proviene del latín
        fractus, cuyo significado es quebrado o fracturado.
      </p>
      <h3>Referencias:</h3>
      <ul>
        <li>
          [CAOS Y COMPLEJIDAD ¿Un desorden
          ordenado?](https://www.youtube.com/watch?v=zrql6aTQgfk)
        </li>
        <li>
          [Fractals, Chaos, Self Similarity](https://paulbourke.net/fractals/)
        </li>
        <li>[BIT-101: About](https://bit-101.com/blog/pages/about/)</li>
        <li>
          [**Playing with Chaos: Programming Fractals and Strange Attractors in
          JavaScript**](https://www.goodreads.com/book/show/19262140-playing-with-chaos)
        </li>
        <li>
          [Coding Math: Episode 35 - Intro to
          Fractals](https://www.youtube.com/watch?v=bIfNwgUVjV8&list=PL7wAPgl1JVvWZPcT0fEfSv5EhLbfWFfVC&ab_channel=CodingMath)
        </li>
      </ul>
      <h3>Libros:</h3>
      <ul>
        <li>
          [The Fractal Geometry of
          Nature](https://www.amazon.com/Fractal-Geometry-Nature-Benoit-Mandelbrot/dp/1648370403/ref=sr_1_2?crid=123UMVMALPF9J&dib=eyJ2IjoiMSJ9.mDXDlq3kEl0YOyrzykZd1JjKj4zaGM9Lu5oDTqDqcBnsFdxUAdyoezIgYruJQjV75PR4KYGwbkQ_GgiYPIIbGtJUVmFINNg5nTTmLrW6TGyueW8bzVdiv-U5BNs7kMpFVJQpLZlth251sNdwA9xBMG5NjT6Pjg0N-ZCtLCBQZit2i3gK6VpaXX8_uAXUMZFFkgCOPyHMC7WpWDk4pXpZ3i63FSgvYRZBMJk3FmqizFI.2jwqc3E2ZhmNt2Qq4aU_zDtqg3CiMjMHY_BTrQMZHrE&dib_tag=se&keywords=the+fractal+geometry+of+nature&qid=1733522970&s=books&sprefix=The+Fractal+geo%2Cstripbooks-intl-ship%2C416&sr=1-2)
        </li>
        <li>
          [Chaos and Fractals: New Frontiers of
          Science](https://www.amazon.com/Chaos-Fractals-New-Frontiers-Science/dp/0387202293/ref=sr_1_1?crid=1AT7I29EW7AVR&dib=eyJ2IjoiMSJ9.-_z2gDn_9ONBHrlWEUe0tx_xy5_SDe3UJN8b3JLxheXGjHj071QN20LucGBJIEps.Gm85G8zcavwDsuX6z7xxMGQ0e5hUaN_J6N53Ee3Nz-Y&dib_tag=se&keywords=Chaos+and+Fractals%3A+New+Frontiers+of+Science&qid=1733523036&s=books&sprefix=chaos+and+fractals+new+frontiers+of+science+%2Cstripbooks-intl-ship%2C365&sr=1-1)
        </li>
        <li>
          [Chaos and Fractals: An Elementary
          Introduction](https://www.amazon.com/Chaos-Fractals-Introduction-David-Feldman-ebook/dp/B00GGJR6T2/ref=sr_1_2?crid=1AT7I29EW7AVR&dib=eyJ2IjoiMSJ9.-_z2gDn_9ONBHrlWEUe0tx_xy5_SDe3UJN8b3JLxheXGjHj071QN20LucGBJIEps.Gm85G8zcavwDsuX6z7xxMGQ0e5hUaN_J6N53Ee3Nz-Y&dib_tag=se&keywords=Chaos+and+Fractals%3A+New+Frontiers+of+Science&qid=1733523036&s=books&sprefix=chaos+and+fractals+new+frontiers+of+science+%2Cstripbooks-intl-ship%2C365&sr=1-2)
        </li>
        <li>
          [Chaos: Making a New
          Science](https://www.amazon.com/Chaos-Making-Science-James-Gleick/dp/0143113453)
        </li>
        <li>[Strange Attractors](https://sprott.physics.wisc.edu/SA.HTM)</li>
        <li>
          [Wolfram Science and Stephen Wolfram's 'A New Kind of
          Science'](https://www.wolframscience.com/)
        </li>
      </ul>
      <h3>Websites:</h3>
      <ul>
        <li>
          [Clifford A. Pickover's Home
          Page](https://sprott.physics.wisc.edu/pickover/home.htm)
        </li>
        <li>
          [Fractals, Chaos, Self Similarity](http://paulbourke.net/fractals/)
        </li>
        <li>
          [Sprott's Gateway](http://sprott.physics.wisc.edu/) Sprott is the
          author of the book on strange attractors mentioned just previously.
          There are many other fractal resources listed on his page.
        </li>
        <li>
          [](http://classes.yale.edu/fractals/) A fantastic resource for just
          about all aspects of chaos theory and fractals. This site is very
          clearly written and understandable. I found myself coming back to it
          again and again while writing this book.
        </li>
      </ul>
    </section>
  );
}
