import ModalDiscounts from './ModalDiscounts';
import React, { useState } from 'react';

export default function CardDiscounts({ result }) {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const menuCategories = ["Entrada", "Platos Fuertes", "Adiciones", "Adiciones", "Adiciones"];

    const handleOpenModal = () => {
        if (menuCategories.includes(result.category)) {
            window.history.pushState({ modal: true }, '', `/menu/${result._id}`);
            setIsModalOpen(true);
        } else {
            window.history.pushState({ modal: true }, '', `/bebidas/${result._id}`);
            setIsModalOpen(true);
        }

    };

    const handleCloseModal = () => {
        window.history.go(-1);
        setIsModalOpen(false);
    };

    return (
        <div className='card bg-white w-[250px] h-[450px] m-2 rounded-lg shadow-sm sm:p-3 sm:hover:shadow-slate-400 sm:shadow-md sm:border sm:border-slate-400 sm:m-2 transition-shadow duration-200 group'>
            <div className='top bg-cover bg-center bg-gray-200 bg-gradient-to-b from-gray-200 to-gray-400 rounded-t-lg' style={{ backgroundImage: `url(${result.img})`, height: '200px' }}>
            </div>
            <div className='bottom border-t-2 border-gray-300 flex flex-col justify-center items-start p-5'>
                <h2 className='name text-lg font-bold'>{result.name}</h2>
                {result.description ? <p className='description line-clamp-2 text-sm font-light'>{result.description}</p> : null}
                <div className='flex items-center'>
                    {result.newValue ? <p className='price text-lg font-medium'>$ {result.newValue}</p> : <p className='price text-lg font-medium'>$ {result.newValueUnit}</p>}
                    {result.value ? <del className='price ml-2 text-xs font-medium'>$ {result.value}</del> : <del className='price ml-2 text-xs font-medium'>$ {result.valueUnit}</del>}
                </div>
                {result.valueJug ? <p className='mb-3'>
                    <span className='font-semibold mr-1'> Jarra $</span>{result.valueJug}
                </p> : null}
                <button className="px-2 py-1 text-sm bg-amber-600 text-white rounded hover:bg-amber-500" onClick={handleOpenModal}>
                    Ver más
                </button>
            </div>
            {isModalOpen && (
                <ModalDiscounts onClose={handleCloseModal} menu={result} />
            )}
        </div>
    )
}
