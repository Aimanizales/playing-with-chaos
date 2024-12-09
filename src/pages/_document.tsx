/**
It controls the initial response from the server
 */

import { Header } from '@/components/Header';
import { Navbar } from '@/components/Navbar';
import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html>
      <Head />
      <Header />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
