import React from 'react'
import Image from 'next/image';
import SearchBox from '@/components/SearchBox';
import Carousel from '@/components/Carousel';

export default function menuIdPage({ menu, dataMenuSug }) {
    const menuId = menu;
    return (
        <div className='w-full'>
            <SearchBox />
            <div className='p-4 md:pt-8 flex flex-col md:flex-row items-center content-center max-w-6xl mx-auto md:space-x-6'>
                <Image src={menuId.img} width={300} height={300} className='rounded-lg' style={{ maxWidth: "100%", height: "100%" }} alt='Imagen del menu'></Image>
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
            <Carousel results={dataMenuSug.docs} title={`Más ${menuId.category}`} />
        </div>
    )
}

export const getServerSideProps = async (context) => {
    const menuById = context.query.id;
    const response = await fetch(`https://jjgcwluyy7.execute-api.us-west-2.amazonaws.com/platos/${menuById}`);

    const data = await response.json();

    const menu = {
        name: data.name,
        description: data.description || "",
        category: data.category,
        value: data.value,
        img: data.img
    }

    const responseMenuSug = await fetch(`https://jjgcwluyy7.execute-api.us-west-2.amazonaws.com/platos?category=${menu.category}&limit=138`);
    const dataMenuSug = await responseMenuSug.json();

    return {
        props: {
            menu,
            dataMenuSug
        }
    }
}
