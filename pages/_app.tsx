import { AppPropsType } from 'next/dist/shared/lib/utils';
import Head from 'next/head';
import '../styles/globals.css';
import Router from 'next/router'
import ym from 'react-yandex-metrika';
import { YMInitializer } from 'react-yandex-metrika'

Router.events.on('routeChangeComplete', (url: string) => {
  if (typeof window !== 'undefined') {
    ym('hit', url);
  }
});

function MyApp({ Component, pageProps, router }: AppPropsType): JSX.Element {
  return (
    <>
      <Head>
        <title>OWL top</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://mc.yandex.ru" />
        <meta property='og:url' content={process.env.NEXT_PUBLIC_DOMAIN + router.asPath} />
        <meta property='og:locale' content="ru_RU" />
      </Head>
      <YMInitializer
        accounts={[]}
        options={{ webvisor: true, defer: true }}
        version="2"
      />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp;
