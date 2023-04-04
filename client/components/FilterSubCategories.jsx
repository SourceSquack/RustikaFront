import React from 'react'
import CarouselDrinks from './CarouselDrinks'

export default function FilterSubCategories({ results, title }) {
    const bebidasCafe = results.filter(result => result.subCategory.includes("Café"));
    const bebidasAromaticas = results.filter(result => result.subCategory.includes("Aromaticas"));
    const bebidasAromaticasNat = results.filter(result => result.subCategory.includes("Aromaticas naturales"));
    const bebidasAromaticasFrut = results.filter(result => result.subCategory.includes("Aromaticas de frutos secos"));
    const bebidasChocolate = results.filter(result => result.subCategory.includes("Chocolate"));
    const bebidasCanelazo = results.filter(result => result.subCategory.includes("Canelazo"));
    const bebidaOtrasBebCal = results.filter(result => result.subCategory.includes("Otras bebidas calientes"));
    const bebidaSodas = results.filter(result => result.subCategory.includes("Sodas saborizadas"));
    const bebidaGranizados = results.filter(result => result.subCategory.includes("Granizados"));
    const bebidaMalteadas = results.filter(result => result.subCategory.includes("Malteadas"));
    const bebidaJugosNat = results.filter(result => result.subCategory.includes("Jugos Naturales"));
    const bebidaGaseosas = results.filter(result => result.subCategory.includes("Gaseosas"));
    const bebidaLimonadas = results.filter(result => result.subCategory.includes("Limonadas"));
    const bebidaCervezas = results.filter(result => result.subCategory.includes("Cervezas"));
    const bebidaOtrasBebFri = results.filter(result => result.subCategory.includes("Otras bebidas frias"));
    const bebidaMargaritas = results.filter(result => result.subCategory.includes("Margaritas"));
    const bebidaMargaritasFrappe = results.filter(result => result.subCategory.includes("Margaritas Frappé"));
    const bebidaMojitos = results.filter(result => result.subCategory.includes("Mojitos"));
    const bebidaSangrias = results.filter(result => result.subCategory.includes("Sangrias"));
    const bebidaGinTonic = results.filter(result => result.subCategory.includes("Gin Tonic"));
    const bebidaOtrosCoc = results.filter(result => result.subCategory.includes("Otros Cocteles"));
    const bebidaWhisky = results.filter(result => result.subCategory.includes("Whisky"));
    const bebidaRon = results.filter(result => result.subCategory.includes("Ron"));
    const bebidaTequila = results.filter(result => result.subCategory.includes("Tequila"));
    const bebidaAguardiente = results.filter(result => result.subCategory.includes("Aguardiente"));
    const bebidaOtrosShots = results.filter(result => result.subCategory.includes("Otros Shots"));
    const bebidaLicores = results.filter(result => result.subCategory.includes("Licores"));
    return (<>
        <div className='text-center py-4 text-2xl font-bold'>{title}</div>
        {bebidasCafe.length > 0 ? <CarouselDrinks results={bebidasCafe} title={"Café"} /> : null}
        {bebidasAromaticas.length > 0 ? <CarouselDrinks results={bebidasAromaticas} title={"Aromaticas"} /> : null}
        {bebidasAromaticasNat.length > 0 ? <CarouselDrinks results={bebidasAromaticasNat} title={"Aromaticas naturales"} /> : null}
        {bebidasAromaticasFrut.length > 0 ? <CarouselDrinks results={bebidasAromaticasFrut} title={"Aromaticas de frutos secos"} /> : null}
        {bebidasChocolate.length > 0 ? <CarouselDrinks results={bebidasChocolate} title={"Chocolate"} /> : null}
        {bebidasCanelazo.length > 0 ? <CarouselDrinks results={bebidasCanelazo} title={"Canelazo"} /> : null}
        {bebidaOtrasBebCal.length > 0 ? <CarouselDrinks results={bebidaOtrasBebCal} title={"Otras bebidas calientes"} /> : null}
        {bebidaSodas.length > 0 ? <CarouselDrinks results={bebidaSodas} title={"Sodas saborizadas"} /> : null}
        {bebidaGranizados.length > 0 ? <CarouselDrinks results={bebidaGranizados} title={"Granizados"} /> : null}
        {bebidaMalteadas.length > 0 ? <CarouselDrinks results={bebidaMalteadas} title={"Malteadas"} /> : null}
        {bebidaJugosNat.length > 0 ? <CarouselDrinks results={bebidaJugosNat} title={"Jugos Naturales"} /> : null}
        {bebidaGaseosas.length > 0 ? <CarouselDrinks results={bebidaGaseosas} title={"Gaseosas"} /> : null}
        {bebidaLimonadas.length > 0 ? <CarouselDrinks results={bebidaLimonadas} title={"Limonadas"} /> : null}
        {bebidaCervezas.length > 0 ? <CarouselDrinks results={bebidaCervezas} title={"Cervezas"} /> : null}
        {bebidaOtrasBebFri.length > 0 ? <CarouselDrinks results={bebidaOtrasBebFri} title={"Otras bebidas frias"} /> : null}
        {bebidaMargaritas.length > 0 ? <CarouselDrinks results={bebidaMargaritas} title={"Margaritas"} /> : null}
        {bebidaMargaritasFrappe.length > 0 ? <CarouselDrinks results={bebidaMargaritasFrappe} title={"Margaritas Frappé"} /> : null}
        {bebidaMojitos.length > 0 ? <CarouselDrinks results={bebidaMojitos} title={"Mojitos"} /> : null}
        {bebidaSangrias.length > 0 ? <CarouselDrinks results={bebidaSangrias} title={"Sangrias"} /> : null}
        {bebidaGinTonic.length > 0 ? <CarouselDrinks results={bebidaGinTonic} title={"Gin Tonic"} /> : null}
        {bebidaOtrosCoc.length > 0 ? <CarouselDrinks results={bebidaOtrosCoc} title={"Otros Cocteles"} /> : null}
        {bebidaWhisky.length > 0 ? <CarouselDrinks results={bebidaWhisky} title={"Whisky"} /> : null}
        {bebidaRon.length > 0 ? <CarouselDrinks results={bebidaRon} title={"Ron"} /> : null}
        {bebidaTequila.length > 0 ? <CarouselDrinks results={bebidaTequila} title={"Tequila"} /> : null}
        {bebidaAguardiente.length > 0 ? <CarouselDrinks results={bebidaAguardiente} title={"Aguardiente"} /> : null}
        {bebidaOtrosShots.length > 0 ? <CarouselDrinks results={bebidaOtrosShots} title={"Otros Shots"} /> : null}
        {bebidaLicores.length > 0 ? <CarouselDrinks results={bebidaLicores} title={"Licores"} /> : null}
    </>
    )
}
