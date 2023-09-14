import Head from 'next/head';
import '../styles/globals.css';
import { Analytics } from '@vercel/analytics/react';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="mobile-web-app-capable" content="yes" />
      </Head>
      <Component {...pageProps} />
      <Analytics />
    </>
  );
}

export default MyApp;
