import Results from '@/components/Results';
import SearchBox from '@/components/SearchBox';
import React from 'react';
// import menujson from './menujson'

export default function MenuPage({ bebidas }) {
    return (
        <>
            <SearchBox />
            <Results /* resultsMenu={menujson} */ resultsDrinks={bebidas} />
        </>
    );
}

export const getServerSideProps = async () => {
    const response = await fetch('https://of83tjkece.execute-api.us-west-2.amazonaws.com/bebidas?limit=138');
    const data = await response.json();
    return {
        props: {
            bebidas: data.docs
        }
    }
}