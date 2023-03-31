import React from 'react'
import menujson from '../menujson';
import { useSearchParams } from 'next/navigation';
import Image from 'next/image';
import SearchBox from '@/components/SearchBox';

export default function menuIdPage() {
    const params = useSearchParams();
    const menuById = params.get("id");
    const menuId = menujson.find(menu => menu.id == menuById);
    return (
        <div className='w-full'>
            <SearchBox />
            <div className='p-4 md:pt-8 flex flex-col md:flex-row items-center content-center max-w-6xl mx-auto md:space-x-6'>
                <Image src={menuId.imageUrl} width={500} height={300} className='rounded-lg' style={{ maxWidth: "100%", height: "100%" }} alt='Imagen del menu'></Image>
                <div className='p-2'>
                    <h2 className='text-lg mb-3 font-bold'>{menuId.name}</h2>
                    <p className='text-lg mb-3'>
                        <span className='font-semibold mr-1'>Description:</span>
                        {menuId.description}
                    </p>
                    <p className='mb-3'>
                        <span className='font-semibold mr-1'>$</span>{menuId.value}
                    </p>
                    <p className='mb-3'>
                        <span className='font-semibold mr-1'>Categoria:</span>{menuId.category}
                    </p>
                    <p className='mb-3'>
                        <span className='font-semibold mr-1'>Subcategoria:</span>{menuId.subcategory}
                    </p>
                </div>
            </div>
        </div>
    )
}
