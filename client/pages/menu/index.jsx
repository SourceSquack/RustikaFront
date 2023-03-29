import Results from '@/components/Results'
import SearchBox from '@/components/SearchBox'
import React from 'react'
import menujson from './menujson'

export default function MenuPage() {
    return (<>
        <SearchBox />
        <Results results={menujson} />
    </>)
}
