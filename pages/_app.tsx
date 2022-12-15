import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head';
import { Provider as UrqlProvider } from 'urql';
import { urqlClient, ssrCache } from '../lib';

const App = ({ Component, pageProps }: AppProps) => {
  if (pageProps?.urqlState) {
    ssrCache.restoreData(pageProps.urqlState);
  }

  return (
    <UrqlProvider value={urqlClient} >
      <Head>
        <title>SpaceX GraphQL demo</title>
        <meta name='description' content='A demo application to show how GraphQL and NextJS can be used together' />
        <link rel='icon' href='/favicon.ico' />
      </Head> 
      <Component {...pageProps} />
    </UrqlProvider>
  );
};

export default App;
