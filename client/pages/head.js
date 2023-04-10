import Head from "next/head";

export default function HeadComponent() {
  return (
    <Head>
      <title>Rustika Restaurant</title>
      <meta name="El mejor restaurante de filandia, Quindio" content= "parrilla, restaurante, cafe, bar"/>
      <meta name="the best restaurant in filandia, Quindio" content="grill, restaurant, cafe, bar" />
        <link rel="icon" href="images/favicon.png" />
    </Head>
  );
}