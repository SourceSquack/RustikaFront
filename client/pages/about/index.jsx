import Image from 'next/image';
import banner1 from '../../public/images/mural-RK-min.png';
import banner2 from '../../public/images/logorustika.png';
import banner3 from '../../public/images/isa.jpg'

const page = () => {
    return (
        <div className='h-screen'>
            <div className={`h-1/4 flex align-middle justify-center`} >
                <video muted autoPlay loop src={"/banerAbout1.mp4"} className="h-full w-full object-cover relative" />
                <Image src={banner2} alt={"banner decoration"} className="h-[30%] w-1/2 absolute " />
            </div>
            <div className=" h-3/4 mt-16 sm:px-6 
                grid md:grid-cols-1 md:px-16  lg:grid-cols-2  gap-10 lg:px-48">
                <div className=" text-white text-center text-5xl grid gap-y-2 ">
                    <div className="  sm:row-span-4 lg:row-span-3 ">
                        <h2 className='my-16'>SOBRE NOSOTROS</h2>
                        <p className='decoration-slate-50 text-2xl'>Rústika Parrilla café-bar ubicado en la salida hacia Quimbaya, cerca al mirador, a una cuadra del hospital San Vicente de Paúl. Nos encontramos abiertos desde Abril del 2021 con nueva administración, para brindarles un servicio ameno y familiar.</p>
                        <br />
                        <p className='decoration-slate-50 text-2xl'>Comprometidos con la calidad de los alimentos, los sabores, la presentación, música y bebidas con y sin licor. Con un equipo de trabajo capacitado e íntegro donde prima el buen servicio y la calidad, es un sitio remodelado totalmente, desde su estructura, concepto, menú, talento humano y administración, que busca la armonía entre un ambiente acogedor y del disfrute de todos.</p>
                    </div>
                    <div className=" sm:row-span-0 lg:row-span-1 ">
                        <Image src={banner1} alt={"banner decoration2"} className='h-full w-full object-cover' />
                    </div>
                </div>
                <div className=" text-white text-center text-5xl">
                    <Image src={banner3} alt={"banner decoration3"} className="h-full w-full object-cover" />
                </div>
            </div>
        </div >
    );
};

export default page; 