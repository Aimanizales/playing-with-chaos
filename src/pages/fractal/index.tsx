import Video from '@/components/Video';

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
    </section>
  );
}
