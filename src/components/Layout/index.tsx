import { Header } from '@/components/Header';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';

import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <div className="container">
        <Navbar />
        <main className={inter.className}>{children}</main>
      </div>
      <Footer />
    </>
  );
}
