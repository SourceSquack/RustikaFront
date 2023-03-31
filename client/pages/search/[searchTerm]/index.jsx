import React from 'react'
import Results from '@/components/Results'
import { useSearchParams } from 'next/navigation';
import menujson from '@/pages/menu/menujson';
import SearchBox from '@/components/SearchBox';

export default function search() {
    const params = useSearchParams();
    const search = params.get("searchTerm");
    const menuSearch = menujson.filter(menu => menu.name.toLowerCase().includes(search.toLowerCase()));
    return (
        <div>
            <SearchBox />
            {menuSearch && menuSearch.length === 0 && (
                <h1 className='text-center pt-6'>No results found</h1>
            )}
            {menuSearch && <Results results={menuSearch} />}
        </div>
    )
}
