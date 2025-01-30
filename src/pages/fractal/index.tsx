import Video from '@/components/Video';
import { books } from './references';

export default function Page() {
  return (
    <section>
      <h2>¿Qué es un fractal?</h2>
      <p>
        Un fractal es un objeto geométrico caracterizado por presentar una
        estructura que se repite a diferentes escalas; un "patrón sin fin". El
        término propuesto por Benoît Mandelbrot en 1975 proviene del latín{' '}
        <i>fractus</i> que significa "quebrado" o "fracturado".
      </p>
      <Video
        title="¿Qué son los fractales?"
        channel="Derivando"
        src="https://www.youtube.com/embed/Wea_1L-C9Xo?si=4S4riowsrN0fDTyE"
      />
      <Video
        title="Caos y complejidad ¿Un desorden ordenado?"
        channel="Derivando"
        src="https://www.youtube.com/embed/zrql6aTQgfk?si=f7xYfTQy-NMTRgTF"
      />
      <Video
        title="La paradoja de la costa ROMPE LA REALIDAD | Fractales"
        channel="Lemnismath"
        src="https://www.youtube.com/embed/uK1unoVNtMs?si=6zQQBtmZA8cp5AmX"
      />
      <Video
        title="Noruega y la paradoja de la costa"
        channel="Un mundo inmenso"
        src="https://www.youtube.com/embed/0cq7Hsunr10?si=dvcqy5JVL9XVMtZQ"
      />
      <h3>Referencias:</h3>
      <ul className="references-list">
        <li>
          Fractals, Chaos, Self Similarity
          <br />
          <a href="https://paulbourke.net/fractals/" target="_blank">
            paulbourke.net/fractals
          </a>
        </li>
        <li>
          BIT-101: About
          <br />
          <a href="https://bit-101.com/blog/pages/about/" target="_blank">
            bit-101.com/blog/pages/about
          </a>
        </li>
        <li>
          Coding Math: Episode 35 - Intro to Fractals
          <a
            href="https://www.youtube.com/watch?v=bIfNwgUVjV8&list=PL7wAPgl1JVvWZPcT0fEfSv5EhLbfWFfVC&ab_channel=CodingMath"
            target="_blank"
          >
            youtube.com/watch?v=bIfNwgUVjV8
          </a>
        </li>
      </ul>
      <h3>Libros:</h3>
      Esta es una lista en mi{' '}
      <a
        href="https://www.goodreads.com/review/list/1090861-aiman-abdel-samad?shelf=chaos"
        target="_blank"
      >
        Goodreads
      </a>{' '}
      de libros sobre teoría del caos.
      <p>Acá una selección de mis favoritos:</p>
      <ul className="references-list">
        {books.map(({ title, author, editorial, publishDate, link }, index) => (
          <li key={index}>
            <i>{title}</i>
            <span className="editorial">{` (${publishDate}) ${editorial} `}</span>
            <br />
            <span className="author">{author}</span>
            <br />
            <a href={link} target="_blank">
              Ver más
            </a>
          </li>
        ))}
        {/* <li>
          The Fractal Geometry of Nature{' '}
          <a href="" target="_blank">
            Amazon
          </a>
        </li>
        <li>
          Chaos and Fractals: New Frontiers of Science{' '}
          <a
            href="https://www.amazon.com/Chaos-Fractals-New-Frontiers-Science/dp/0387202293/ref=sr_1_1?crid=1AT7I29EW7AVR&dib=eyJ2IjoiMSJ9.-_z2gDn_9ONBHrlWEUe0tx_xy5_SDe3UJN8b3JLxheXGjHj071QN20LucGBJIEps.Gm85G8zcavwDsuX6z7xxMGQ0e5hUaN_J6N53Ee3Nz-Y&dib_tag=se&keywords=Chaos+and+Fractals%3A+New+Frontiers+of+Science&qid=1733523036&s=books&sprefix=chaos+and+fractals+new+frontiers+of+science+%2Cstripbooks-intl-ship%2C365&sr=1-1"
            target="_blank"
          >
            Amazon
          </a>
        </li>
        <li>
          Chaos and Fractals: An Elementary Introduction
          <a
            href="https://www.amazon.com/Chaos-Fractals-Introduction-David-Feldman-ebook/dp/B00GGJR6T2/ref=sr_1_2?crid=1AT7I29EW7AVR&dib=eyJ2IjoiMSJ9.-_z2gDn_9ONBHrlWEUe0tx_xy5_SDe3UJN8b3JLxheXGjHj071QN20LucGBJIEps.Gm85G8zcavwDsuX6z7xxMGQ0e5hUaN_J6N53Ee3Nz-Y&dib_tag=se&keywords=Chaos+and+Fractals%3A+New+Frontiers+of+Science&qid=1733523036&s=books&sprefix=chaos+and+fractals+new+frontiers+of+science+%2Cstripbooks-intl-ship%2C365&sr=1-2"
            target="_blank"
          >
            Amazon
          </a>
        </li>
        <li>
          Chaos: Making a New Science
          <a
            href="https://www.amazon.com/Chaos-Making-Science-James-Gleick/dp/0143113453"
            target="_blank"
          >
            Amazon
          </a>
        </li>
        <li>
          Strange Attractors{' '}
          <a href="https://sprott.physics.wisc.edu/SA.HTM" target="_blank">
            sprott.physics.wisc.edu/SA.HTM
          </a>
        </li>
        <li>
          Wolfram Science and Stephen Wolfram's 'A New Kind of Science'
          <a href="https://www.wolframscience.com/" target="_blank">
            wolframscience.com
          </a>
        </li> */}
      </ul>
      <h3>Websites:</h3>
      <ul className="references-list">
        <li>
          Clifford A. Pickover's Home Page <br />
          <a
            href="https://sprott.physics.wisc.edu/pickover/home.htm"
            target="_blank"
          >
            {'  '}
            sprott.physics.wisc.edu/pickover/home.htm
          </a>
        </li>
        <li>
          Sprott's Gateway <br />
          <a href="" target="_blank">
            http://sprott.physics.wisc.edu/
          </a>{' '}
          <br />
          Sprott is the author of the book on strange attractors mentioned just
          previously. There are many other fractal resources listed on his page.
        </li>
        <li>
          Fractals, Chaos, Self Similarity <br />
          <a href="http://paulbourke.net/fractals/" target="_blank">
            paulbourke.net/fractals
          </a>
        </li>

        <li>
          Yale Fractals <br />
          <a href="http://classes.yale.edu/fractals/" target="_blank">
            classes.yale.edu/fractals
          </a>{' '}
          <br />A fantastic resource for just about all aspects of chaos theory
          and fractals. This site is very clearly written and understandable.
        </li>
      </ul>
      https://institucional.us.es/blogimus/2018/10/fractales-bellos-y-sin-embargo-utiles/
    </section>
  );
}
