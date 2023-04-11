import React from 'react'
import menujson from '../menujson';
import { useSearchParams } from 'next/navigation';
import Image from 'next/image';
import SearchBox from '@/components/SearchBox';
import Carousel from '@/components/Carousel';

export default function menuIdPage() {
    const params = useSearchParams();
    const menuById = params.get("id");
    const menuId = menujson.find(menu => menu.id == menuById);
    const menuSugerido = menujson.filter(menu => menu.category.includes(menuId.category));
    return (
        <div className='w-full'>
            <SearchBox />
            <div className='p-4 md:pt-8 flex flex-col md:flex-row items-center content-center max-w-6xl mx-auto md:space-x-6'>
                <Image src={menuId.imageUrl} width={300} height={300} className='rounded-lg' style={{ maxWidth: "100%", height: "100%" }} alt='Imagen del menu'></Image>
                <div className='p-2'>
                    <h2 className='text-lg mb-3 font-bold'>{menuId.name}</h2>
                    {menuId.description ? <p className='text-md mb-3'>
                        <span className='font-semibold mr-1'>Description:</span>
                        {menuId.description}
                    </p> : null}
                    <p className='mb-3'>
                        <span className='font-semibold mr-1'>Categoria:</span>{menuId.category}
                    </p>
                    {menuId.subCategory ? <p className='mb-3'>
                        <span className='font-semibold mr-1'>Subcategoria:</span>{menuId.subCategory}
                    </p> : null}
                    <p className='mb-3'>
                        <span className='font-semibold mr-1'>$</span>{menuId.value}
                    </p>
                </div>
            </div>
            <Carousel results={menuSugerido} title={`Más ${menuId.category}`} />
        </div>
    )
}