import React from 'react'
import bebidasjson from '@/pages/menu/bebidasjson';
import Image from 'next/image';

export default function ModalCardDrink({ onClose, id }) {
    const drinkById = id;
    const drinkId = bebidasjson.find(bebida => bebida.id == drinkById);
    return (
        <div className="fixed z-10 inset-0 overflow-y-auto">
            <div className="flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
                <div className="fixed inset-0 transition-opacity">
                    <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
                </div>
                <span className="hidden sm:inline-block sm:align-middle sm:h-screen"></span>
                <div className="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
                    <div className='p-4 md:pt-8 flex flex-col md:flex-row items-center content-center max-w-6xl mx-auto md:space-x-6'>
                        <Image src={drinkId.imageUrl} width={300} height={300} className='rounded-lg' style={{ maxWidth: "100%", height: "100%" }} alt='Imagen del menu'></Image>
                        <div className='p-2'>
                            <h2 className='text-lg mb-3 font-bold'>{drinkId.name}</h2>
                            {drinkId.description ? <p className='text-md mb-3'>
                                <span className='font-semibold mr-1'>Description:</span>
                                {drinkId.description}
                            </p> : null}
                            <p className='mb-3'>
                                <span className='font-semibold mr-1'>Categoria:</span>{drinkId.category}
                            </p>
                            {drinkId.subCategory ? <p className='mb-3'>
                                <span className='font-semibold mr-1'>Subcategoria:</span>{drinkId.subCategory}
                            </p> : null}
                            <p className='mb-3'>
                                <span className='font-semibold mr-1'>Unidad $</span>{drinkId.valueUnit}
                            </p>
                            {drinkId.valueJug ? <p className='mb-3'>
                                <span className='font-semibold mr-1'> Jarra$</span>{drinkId.valueJug}
                            </p> : null}
                        </div>
                    </div>
                    <div className="mt-5 sm:mt-4 sm:flex sm:flex-row-reverse">
                        <button onClick={onClose} className="absolute top-0 right-0 mt-4 mr-4 bg-red-500 rounded-md p-2 text-white hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900">
                            X
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
