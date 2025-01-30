import { Header } from '@/components/Header';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';

import { Roboto } from 'next/font/google';

const roboto = Roboto({ weight: '300', preload: true, subsets: ['latin'] });

export default function Layout({ children }) {
  return (
    <div className={roboto.className}>
      <Header />
      <div className="container">
        <Navbar />
        <main>{children}</main>
      </div>
      <Footer />
    </div>
  );
}
