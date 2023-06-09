import React from 'react'
import CardDrink from './CardDrink'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'

export default function Carousel({ results, title }) {
    const scrollLeft = () => {
        document.getElementById(title).scrollLeft -= 400;
    }

    const scrollRight = () => {
        document.getElementById(title).scrollLeft += 400;
    }
    return (<>
        <div className='relative max-w-6xl mx-auto'>
            <div className='text-start ml-7 py-4 text-xl font-bold'>{title}</div>
            <div className='absolute right-0 top-5'>
                <button className='p-2 m-2 rounded-full bg-white' onClick={scrollLeft}><FiChevronLeft /></button>
                <button className='p-2 m-2 rounded-full bg-white' onClick={scrollRight}><FiChevronRight /></button>
            </div>
            <div id={title} className='carpusel p-4 flex items-center justify-start overflow-x-auto scroll-smooth'>
                {results.map((result, index) => (
                    <div key={index}>
                        <CardDrink key={result._id} result={result} />
                    </div>
                ))}
            </div>
        </div>
    </>
    )
}