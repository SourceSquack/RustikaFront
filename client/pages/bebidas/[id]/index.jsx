import React from 'react'
import bebidasjson from '@/pages/menu/bebidasjson';
import { useSearchParams } from 'next/navigation';
import Image from 'next/image';
import SearchBox from '@/components/SearchBox';
import CarouselDrinks from '@/components/CarouselDrinks';

export default function bebidasIdPage() {
    const params = useSearchParams();
    const bebidaById = params.get("id");
    const bebidaId = bebidasjson.find(bebida => bebida.id == bebidaById);
    const menuSugerido = bebidasjson.filter(result => result.subCategory ? result.subCategory.includes(bebidaId.subCategory) : null);
    return (
        <div className='w-full'>
            <SearchBox />
            <div className='p-4 md:pt-8 flex flex-col md:flex-row items-center content-center max-w-6xl mx-auto md:space-x-6'>
                <Image src={bebidaId.imageUrl} width={300} height={300} className='rounded-lg' style={{ maxWidth: "100%", height: "100%" }} alt='Imagen de la bebida'></Image>
                <div className='p-2'>
                    <h2 className='text-lg mb-3 font-bold'>{bebidaId.name}</h2>
                    {bebidaId.description ? <p className='text-md mb-3'>
                        <span className='font-semibold mr-1'>Description:</span>
                        {bebidaId.description}
                    </p> : null}
                    <p className='mb-3'>
                        <span className='font-semibold mr-1'>Categoria:</span>{bebidaId.category}
                    </p>
                    {bebidaId.subCategory ? <p className='mb-3'>
                        <span className='font-semibold mr-1'>Subcategoria:</span>{bebidaId.subCategory}
                    </p> : null}
                    <p className='mb-3'>
                        <span className='font-semibold mr-1'>Unidad $</span>{bebidaId.valueUnit}
                    </p>
                    {bebidaId.valueJug ? <p className='mb-3'>
                        <span className='font-semibold mr-1'> Jarra$</span>{bebidaId.valueJug}
                    </p> : null}
                </div>
            </div>
            <CarouselDrinks results={menuSugerido} title={`Más ${bebidaId.subCategory}`} />
        </div>
    )
}