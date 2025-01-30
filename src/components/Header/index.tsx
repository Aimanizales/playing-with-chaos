import { Roboto } from 'next/font/google';

const robotoBold = Roboto({ weight: '700', preload: true, subsets: ['latin'] });

export const Header = () => {
  return (
    <header>
      <h1 className={robotoBold.className}>Playing with Chaos</h1>
      <p>Fractals and Strange Attractors in Javascript</p>
    </header>
  );
};
