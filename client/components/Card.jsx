import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Card({ result }) {
    return (
        <div className='card cursor-pointer bg-white w-[200px] h-[400px] m-2 rounded-lg shadow-lg sm:p-3 sm:hover:shadow-slate-400 sm:shadow-md sm:border sm:border-slate-400 sm:m-2 transition-shadow duration-200 group'>
            <Link href={`/menu/${result.id}`}>
                <div className='top'>
                    <Image src={result.imageUrl} alt={"Imagen menú"} width={200} height={200} className='object-cover p-2 w-[200px] h-[200px] sm:rounded-t-lg group-hover:opacity-80 transition-opacity duration-200'></Image>
                </div>
                <div className='bottom flex flex-col justify-center items-start p-5'>
                    <h2 className='name text-sm font-bold'>{result.name}</h2>
                    {result.description ? <p className='description text-xs font-light'>{result.description}</p> : null}
                    <p className='price'>$ {result.value}</p>
                </div>
            </Link>
        </div>
    )
}
