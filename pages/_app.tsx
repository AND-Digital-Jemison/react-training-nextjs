import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head';

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <title>SpaceX GraphQL demo</title>
        <meta name='description' content='A demo application to show how GraphQL and NextJS can be used together' />
        <link rel='icon' href='/favicon.ico' />
      </Head> 
      <Component {...pageProps} />
    </>
  );
};

export default App;
