import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function SearchBox() {
    const [search, setSearch] = useState('');
    const router = useRouter();
    function handleSubmit(e) {
        e.preventDefault();
        if (!search) return;
        router.push(`/search/${search}`);
        setSearch('')
    }
    return (
        <form onSubmit={handleSubmit} className='flex max-w-md mx-auto justify-between items-center px-5 my-5 py-5'
        >
            <input value={search} onChange={(e) => setSearch(e.target.value)} type="text" placeholder="Buscar..." className="w-full h-10 mx-2 rounded-full placeholder-gray-500 outline-none bg-transparent flex-1"
            />
            <button disabled={!search} type="submit"
                className="bg-amber-600 hover:bg-amber-700 active:bg-amber-800 text-white disabled:bg-gray-400 disabled:text-gray-500 rounded-full px-6 py-2 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500">
                Buscar
            </button>
        </form>
    );
}
