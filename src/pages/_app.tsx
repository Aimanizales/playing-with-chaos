/**
It defines the global layout 
*/
import Head from 'next/head';
import type { AppProps } from 'next/app';

import Layout from '@/components/Layout';
import '../styles/index.css';

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
