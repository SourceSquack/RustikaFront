import React from 'react'
import Results from '@/components/Results'
import { useSearchParams } from 'next/navigation';
import menujson from '@/pages/menu/menujson';
import SearchBox from '@/components/SearchBox';

export default function search() {
    const params = useSearchParams();
    const search = params.get("searchTerm");
    const menuSearch = menujson.filter(menu => menu.name.toLowerCase().includes(search.toLowerCase()));
    console.log(menuSearch)
    return (
        <div>
            <SearchBox />
            {menuSearch.length > 0 ? <Results results={menuSearch} /> :
                <h1 className='text-center py-6 text-4xl font-bold'>No results found</h1>}
        </div>
    )
}
