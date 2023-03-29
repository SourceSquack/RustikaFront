import React from 'react'
import Results from '@/components/Results'
import { useSearchParams } from 'next/navigation';
import menujson from '@/pages/menu/menujson';

export default function search() {
    const params = useSearchParams();
    const search = params.get("searchTerm");
    const menuSearch = menujson.filter(menu => menu.name.toLowerCase().includes(search.toLowerCase()));
    return (
        <div>
            {menuSearch && menuSearch.length === 0 && (
                <h1 className='text-center pt-6'>No results found</h1>
            )}
            {menuSearch && <Results results={menuSearch} />}
        </div>
    )
}
