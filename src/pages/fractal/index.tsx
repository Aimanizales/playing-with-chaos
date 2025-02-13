import { videos } from '../bibliography/bibliography';
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
      {videos.map(({ title, channel, source }, index) => (
        <Video title={title} channel={channel} src={source} key={index} />
      ))}
    </section>
  );
}
