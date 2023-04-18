import Footer from "@/components/Footer";
import Results from "@/components/Results";
import SearchBox from "@/components/SearchBox";
import React, { Suspense } from "react";
import Loading from "../loading";
import Navbar from "@/components/Navbar";

export default function MenuPage({ bebidas, platos }) {
  return (
      <div>
        <Navbar style={{ backgroundColor: 'black', position: 'sticky', top: '0', opacity:0.87}}/>
        <SearchBox />
        <Results resultsMenu={platos} resultsDrinks={bebidas} />
        <Footer />
      </div>
  );
}

export const getServerSideProps = async () => {
  const responseDrinks = await fetch(
    "https://jjgcwluyy7.execute-api.us-west-2.amazonaws.com/bebidas?limit=138",
    { cache: "no-store" }
  );
  const dataDrinks = await responseDrinks.json();
  const responseMenu = await fetch(
    "https://jjgcwluyy7.execute-api.us-west-2.amazonaws.com/platos?limit=138",
    { cache: "no-store" }
  );
  const dataMenu = await responseMenu.json();
  return {
    props: {
      bebidas: dataDrinks.docs,
      platos: dataMenu.docs,
    },
  };
};
