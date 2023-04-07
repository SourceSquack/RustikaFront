import React from 'react'
import Carousel from './Carousel'
import FilterSubCategories from './FilterSubCategories';


export default function Results({ results }) {
    const menuEntrada = results.filter(result => result.category.includes("Entrada"));
    const menuPlatosFuertes = results.filter(result => result.category.includes("Platos Fuertes"));
    const menuAdiciones = results.filter(result => result.category.includes("Adiciones"));
    const menuEnsaladas = results.filter(result => result.category.includes("Ensaladas"));
    const menuPostres = results.filter(result => result.category.includes("Postres"));
    const bebidasCalientes = results.filter(result => result.category.includes("Bebidas calientes"));
    const bebidasFrias = results.filter(result => result.category.includes("Bebidas frias"));
    const bebidasCocteleria = results.filter(result => result.category.includes("Cocteleria"));
    const bebidasShots = results.filter(result => result.category.includes("Shots"));
    const bebidasLicores = results.filter(result => result.category.includes("Licores"));
    return (<>
        <div className='text-center py-6 text-4xl font-bold'>MENU</div>
        {menuEntrada.length > 0 ? <Carousel results={menuEntrada} title={"Entradas"} /> : null}
        {menuPlatosFuertes.length > 0 ? <Carousel results={menuPlatosFuertes} title={"Platos Fuertes"} /> : null}
        {menuAdiciones.length > 0 ? <Carousel results={menuAdiciones} title={"Adiciones"} /> : null}
        {menuEnsaladas.length > 0 ? <Carousel results={menuEnsaladas} title={"Ensaladas"} /> : null}
        {menuPostres.length > 0 ? <Carousel results={menuPostres} title={"Postres"} /> : null}
        <div className='text-center py-6 text-4xl font-bold'>BEBIDAS</div>
        {bebidasCalientes.length > 0 ? <FilterSubCategories results={bebidasCalientes} title={"Bebidas Calientes"} /> : null}
        {bebidasFrias.length > 0 ? <FilterSubCategories results={bebidasFrias} title={"Bebidas Frias"} /> : null}
        {bebidasCocteleria.length > 0 ? <FilterSubCategories results={bebidasCocteleria} title={"Cocteleria"} /> : null}
        {bebidasShots.length > 0 ? <FilterSubCategories results={bebidasShots} title={"Shots"} /> : null}
        {bebidasLicores.length > 0 ? <FilterSubCategories results={bebidasLicores} title={"Licores"} /> : null}
    </>)
}
