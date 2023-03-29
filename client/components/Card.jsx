import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Card({ result }) {
    return (
        <div className='cursor-pointer sm:p-3 sm:hover:shadow-slate-400 sm:shadow-md rounded-lg sm:border sm:border-slate-400 sm:m-2 transition-shadow duration-200 group'>
            <Link href={`/menu/${result.id}`}>
                <Image src={result.imageUrl} width={500} height={300} className='sm:rounded-t-lg group-hover:opacity-80 transition-opacity duration-200' style={{ maxWidth: "100%", height: "auto", }} placeholder='blur' blurDataURL='/spinner.svg' alt='image is not available'></Image>
                <div className='p-2'>
                    <p className='line-clamp-2 text-md'>{result.description}</p>
                    <h2 className='truncate text-lg font-bold'>{result.name}</h2>
                    <p className='flex items-center'>$ {result.value}</p>
                </div>
            </Link>
        </div>
    )
}
