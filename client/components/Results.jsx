import React from 'react'
import Carousel from './Carousel'
import FilterSubCategories from './FilterSubCategories';


export default function Results({ resultsMenu, resultsDrinks }) {
    let menu = [];
    resultsMenu.forEach(result => {
        if (menu.length === 0) {
            menu.push(result.category)
        } else {
            if (!menu.includes(result.category)) {
                menu.push(result.category);
            }
        }
    })
    let drinks = [];
    resultsDrinks.forEach(result => {
        if (drinks.length === 0) {
            drinks.push(result.category)
        } else {
            if (!drinks.includes(result.category)) {
                drinks.push(result.category);
            }
        }
    })

    return (<>
        <div className='max-w-6xl mx-auto'>
            <div className='text-center py-6 text-4xl font-bold'>MENU</div>
            {menu.map(cat => {
                return (<Carousel results={resultsMenu.filter(result => result.category.includes(cat))} title={cat} />)
            })}
            {drinks.map(cat => {
                return (<FilterSubCategories results={resultsDrinks.filter(result => result.category.includes(cat))} title={cat} />)
            })}
        </div>
    </>)
}
