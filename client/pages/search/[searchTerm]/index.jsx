import React from 'react'
import Results from '@/components/Results'
import SearchBox from '@/components/SearchBox';

export default function search({ menuSearch, bebidasSearch, search }) {
    const menu = menuSearch;
    const bebidas = bebidasSearch;
    return (
        <div>
            <SearchBox />
            {menu.length > 0 || bebidas.length > 0 ? <>
                <h1 className='text-center py-6 text-4xl font-bold'>Resultados para la busqueda "{search}"</h1>
                <Results resultsMenu={menu} resultsDrinks={bebidas} />
            </> :
                <h1 className='text-center py-6 text-4xl font-bold'>No hay resultados para la busqueda "{search}"</h1>}
        </div>
    )
}

export const getServerSideProps = async (context) => {
    const search = context.query.searchTerm;
    const responseMenu = await fetch(`https://jjgcwluyy7.execute-api.us-west-2.amazonaws.com/platos?name=${search}&limit=138`);
    const dataMenu = await responseMenu.json();
    const responseDrinks = await fetch(`https://jjgcwluyy7.execute-api.us-west-2.amazonaws.com/bebidas?name=${search}&limit=138`);
    const dataDrinks = await responseDrinks.json();
    return {
        props: {
            search,
            menuSearch: dataMenu.docs,
            bebidasSearch: dataDrinks.docs,
        }
    }
}
