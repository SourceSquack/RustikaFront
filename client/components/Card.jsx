import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Card({ result }) {
    return (
        <div className='card cursor-pointer bg-white w-[250px] h-[400px] m-2 rounded-lg shadow-lg sm:p-3 sm:hover:shadow-slate-400 sm:shadow-md sm:border sm:border-slate-400 sm:m-2 transition-shadow duration-200 group'>
            <Link href={`/menu/${result.id}`}>
                <div className='top'>
                    <Image src={result.imageUrl} alt={"Imagen menú"} width={200} height={200} className='object-cover w-[250px] h-[200px] sm:rounded-t-lg group-hover:opacity-80 transition-opacity duration-200'></Image>
                </div>
                <div className='bottom flex flex-col justify-center items-start p-5'>
                    <h2 className='name text-md font-bold'>{result.name}</h2>
                    {result.description ? <p className='description line-clamp-3 text-sm font-light'>{result.description}</p> : null}
                    <p className='price text-sm'>$ {result.value}</p>
                </div>
            </Link>
        </div>
    )
}
