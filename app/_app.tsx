import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <style>{`
          body {
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
          }
          ::selection {
            background-color: #4FD1C5;
            color: #1A202C;
          }
        `}</style>
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
