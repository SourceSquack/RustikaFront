import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Card({ result }) {
    return (
        <div className='card cursor-pointer bg-white w-[200px] h-[400px] m-2 rounded-lg shadow-lg'>
            <Link href={`/menu/${result.id}`}>
                <div className='top'>
                    <Image src={result.imageUrl} alt={"Imagen menú"} width={200} height={200} className='object-cover p-2 w-[200px] h-[200px]'></Image>
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
