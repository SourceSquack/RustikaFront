import Results from '@/components/Results'
import SearchBox from '@/components/SearchBox'
import React from 'react'
import menujson from './menujson'
import bebidasjson from './bebidasjson'

export default function MenuPage() {
    return (<>
        <SearchBox />
        <Results resultsMenu={menujson} resultsDrinks={bebidasjson} />
    </>)
}
