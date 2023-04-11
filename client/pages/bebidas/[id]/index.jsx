import React from 'react'
import Image from 'next/image';
import SearchBox from '@/components/SearchBox';
import CarouselDrinks from '@/components/CarouselDrinks';

export default function bebidasIdPage({ bebida, dataMenu }) {
    const bebidaId = bebida
    
    return (
        <div className='w-full'>
            <SearchBox />
            <div className='p-4 md:pt-8 flex flex-col md:flex-row items-center content-center max-w-6xl mx-auto md:space-x-6'>
                <Image src={bebidaId.img} width={300} height={300} className='rounded-lg' style={{ maxWidth: "100%", height: "100%" }} alt='Imagen de la bebida'></Image>
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
            <CarouselDrinks results={dataMenu.docs} title={`Más ${bebidaId.subCategory}`} />
        </div>
    )
}

export const getServerSideProps = async (context) => {
    const bebidaById = context.query.id;
    const response = await fetch(`https://of83tjkece.execute-api.us-west-2.amazonaws.com/bebidas/${bebidaById}`);

    const data = await response.json();

    const bebida = {
        name: data.name,
        description: data.description || "",
        category: data.category,
        subCategory: data.subCategory,
        valueUnit: data.valueUnit,
        valueJug: data.valueJug || 0,
        img: data.img
    }

    const responseMenu = await fetch(`https://of83tjkece.execute-api.us-west-2.amazonaws.com/bebidas?subCategory=${bebida.subCategory}&limit=138`);
    const dataMenu = await responseMenu.json();

    return {
        props: {
            bebida,
            dataMenu
        }
    }
}
