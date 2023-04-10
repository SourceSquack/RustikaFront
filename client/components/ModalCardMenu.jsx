import React from 'react';
import menujson from '@/pages/menu/menujson';
import Image from 'next/image';

const ModalCardMenu = ({ onClose, id }) => {
    const menuById = id;
    const menuId = menujson.find(menu => menu.id == menuById);
    return (
        <div className="fixed z-10 inset-0 overflow-y-auto">
            <div className="flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
                <div className="fixed inset-0 transition-opacity">
                    <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
                </div>
                <span className="hidden sm:inline-block sm:align-middle sm:h-screen"></span>
                <div className="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
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
                            <p className='mb-3'>
                                <span className='font-semibold mr-1'>$</span>{menuId.value}
                            </p>
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
    );
};

export default ModalCardMenu;