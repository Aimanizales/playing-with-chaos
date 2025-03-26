import Video from '@/components/Video';

export default function Page() {
  return (
    <section>
      <h2>Conjunto de Mandelbrot</h2>
      <p>Pendiente descripción</p>

      <Video
        title="Decoding Math’s Famed Fractal: The Mandelbrot Set"
        channel="Quanta Magazine"
        src="https://www.youtube.com/embed/u9GAnW8xFJY?si=Jj7HrWZUi2BvIBnB"
      />

      <Video
        title="What's so special about the Mandelbrot Set?"
        channel="Numberphile"
        src="https://www.youtube.com/embed/FFftmWSzgmk?si=mc1-pGqCLDfZ91oP"
      />
    </section>
  );
}
