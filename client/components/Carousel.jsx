import React from 'react'
import Card from './Card'

export default function Carousel({ results, title }) {
    return (<>
        <div className='text-center py-4 text-xl font-bold'>{title}</div>
        <div className='carousel p-4 flex items-center justify-start overflow-x-auto'>
            <div className='sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 max-w-6xl mx-auto py-4'>
                {results.map((result) => (
                    <Card key={result.id} result={result} />
                ))}
            </div>
        </div>
    </>
    )
}
