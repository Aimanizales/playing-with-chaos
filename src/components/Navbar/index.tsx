import Link from 'next/link';

export const Navbar = () => {
  return (
    <nav>
      <li>
        <Link href="/">Index</Link>
      </li>
      <li>
        <Link href="/fractal">What is a fractal?</Link>
      </li>
      <li>
        <Link href="/sample">Initial sample</Link>
      </li>
      <li>
        <Link href="/kock">The Koch Curve</Link>
      </li>
      <li>
        The Sierpinski Gasket
        <ul>
          <li>
            <Link href="/sierpinsky">Simetric</Link>
          </li>
          <li>
            Random (WIP)
            {/* <Link href="/sierpinsky/random">
          </Link> */}
          </li>
        </ul>
      </li>
      <li>
        <Link href="/bifurcation">Bifurcation (2)</Link>
      </li>

      <li>The Kock Snowflake (1)</li>
      <li>Sierpinski non-symmetry (1)</li>
      <li>Sierpinski random (1)</li>
      <li>Buddhabrot (1)</li>
      <li>Cellular (4)</li>
      <li>Chaos Game (3)</li>
      <li>Coast (3)</li>
      <li>Dejong (1)</li>
      <li>DLA (4)</li>
      <li>IFS (3)</li>
      <li>IFS Random (1)</li>
      <li>Island (1)</li>
      <li>Julia (2)</li>
      <li>Lighting (1)</li>
      <li>Lindenmayer (2)</li>
      <li>Lorenz (2)</li>
      <li>Mandelbrot (4 + 1)</li>
      <li>Pickover (1)</li>
      <li>Population (2)</li>
      <li>Pytree (3)</li>
      <li>Rossler (1)</li>
      <li>SSF (5)</li>
      <li>Transform (1)</li>
      <li>Tree (4)</li>
    </nav>
  );
};
