import React from 'react'
import CarouselDrinks from './CarouselDrinks'

export default function FilterSubCategories({ results, title }) {
    let drinksSubCat = [];
    results.forEach(result => {
        if (drinksSubCat.length === 0) {
            drinksSubCat.push(result.subCategory)
        } else {
            if (!drinksSubCat.includes(result.subCategory)) {
                drinksSubCat.push(result.subCategory);
            }
        }
    })
    
    return (<>
        <div className='text-center py-4 text-2xl font-bold'>{title}</div>
        {drinksSubCat.map((subCat, index) => {
            return (<CarouselDrinks key={index} results={results.filter(result => result.subCategory.includes(subCat))} title={subCat} />)
        })}
    </>
    )
}
