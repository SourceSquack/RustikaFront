import Footer from '@/components/Footer';
import Results from '@/components/Results';
import SearchBox from '@/components/SearchBox';
import React from 'react';

export default function MenuPage({ bebidas, platos }) {
    return (
        <>
            <SearchBox />
            <Results resultsMenu={platos} resultsDrinks={bebidas} />
            <Footer />
        </>
    );
}

export const getServerSideProps = async () => {
    const responseDrinks = await fetch('https://jjgcwluyy7.execute-api.us-west-2.amazonaws.com/bebidas?limit=138');
    const dataDrinks = await responseDrinks.json();
    const responseMenu = await fetch('https://jjgcwluyy7.execute-api.us-west-2.amazonaws.com/platos?limit=138');
    const dataMenu = await responseMenu.json();
    return {
        props: {
            bebidas: dataDrinks.docs,
            platos: dataMenu.docs
        }
    }
}