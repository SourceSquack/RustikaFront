import '@/styles/globals.css'
import Head from "next/head";



export default function App({ Component, pageProps }) {
  return (
    <>
    <Head>
    <title>Rustika Restaurant</title>
    <meta name="El mejor restaurante de filandia, quindio" content= "parrilla, restaurante, cafe, bar"/>
    <meta name="the best restaurant in filandia, quindio" content="grill, restaurant, cafe, bar" />
      <link rel="icon" href="images/favicon.png" />
  </Head>
    <Component {...pageProps} />
    </>
  )
}
