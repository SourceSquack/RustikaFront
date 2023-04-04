import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Card({ result }) {
    return (
        <div className='cursor-pointer sm:p-3 sm:hover:shadow-slate-400 sm:shadow-md rounded-lg sm:border sm:border-slate-400 sm:m-2 transition-shadow duration-200 group'>
            <Link href={`/bebidas/${result.id}`}>
                <Image src={result.imageUrl} width={500} height={300} className='sm:rounded-t-lg group-hover:opacity-80 transition-opacity duration-200' style={{ maxWidth: "100%", height: "auto", }} alt='image is not available'></Image>
                <div className='p-2'>
                    <h2 className='truncate text-lg font-bold'>{result.name}</h2>
                    {result.description ? <p className='line-clamp-2 text-md'>{result.description}</p> : null}
                    <p className='flex items-center'>Unidad: ${result.valueUnit}</p>
                    {result.valueJug ? <p className='flex items-center'>Jarra: ${result.valueJug}</p> : null}
                </div>
            </Link>
        </div>
    )
}