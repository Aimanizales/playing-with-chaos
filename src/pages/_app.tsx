/**
It defines the global layout 
*/
import Layout from '@/components/Layout';

import type { AppProps } from 'next/app';

import '../styles/index.css';
import Head from 'next/head';

export default function App({ Component: PageComponent, pageProps }: AppProps) {
  return (
    <Layout>
      <Head>
        <title>Chaos</title>
      </Head>
      <PageComponent {...pageProps} />
    </Layout>
  );
}
