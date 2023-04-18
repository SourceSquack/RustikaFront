import Image from 'next/image';
import banner1 from '../../public/images/mural-RK-min.png';
import banner2 from '../../public/images/logorustika.png';
import banner3 from '../../public/images/isa.jpg'
import Navbar from '@/components/Navbar';

const page = () => {
    return (
        <div className=''>
            <nav className="fixed top-0 left-0 w-full bg-transparent bg-opacity-70 h-16 z-10 transition-opacity duration-500 ease-in-out">
                <Navbar style={{ background: "rgb(24 24 27)", position: "sticky", top: "0" }} />
            </nav>
            {/* <div className={`h-1/4 flex align-middle justify-center`} >
                <video muted autoPlay loop src={"/banerAbout1.mp4"} className="h-full w-full object-cover relative" />
                <Image src={banner2} alt={"banner decoration"} className="h-[30%] w-1/2 absolute " />
            </div> */}
            <div className="mt-48 sm:px-6 
                grid md:grid-cols-1 md:px-16  lg:grid-cols-2  gap-10 lg:px-48">
                <div className="  text-zinc-900 text-center text-5xl grid gap-y-2 sm:gap-y-8">
                    <div className="  sm:row-span-4 lg:row-span-2  rounded-lg">
                        <h2 className='my-16'>SOBRE NOSOTROS</h2>
                        <p className='text-zinc-900 text-xl'>Rústika Parrilla café-bar ubicado en la salida hacia Quimbaya, cerca al mirador, a una cuadra del hospital San Vicente de Paúl. Nos encontramos abiertos desde Abril del 2021 con nueva administración, para brindarles un servicio ameno y familiar.</p>
                        <br />
                        <p className='text-zinc-900 text-xl mb-0'>Comprometidos con la calidad de los alimentos, los sabores, la presentación, música y bebidas con y sin licor. Con un equipo de trabajo capacitado e íntegro donde prima el buen servicio y la calidad, es un sitio remodelado totalmente, desde su estructura, concepto, menú, talento humano y administración, que busca la armonía entre un ambiente acogedor y del disfrute de todos.</p>

                    </div>
                    <div className=" sm:row-span-0 lg:row-span-1  rounded-lg mb-9 mt-0">
                        <Image src={banner1} alt={"banner decoration2"} className='h-full w-full object-cover' />
                    </div>

                </div>
                <div className=" text-white text-center text-5xl  rounded-lg flex justify-center">
                    <Image src={banner3} alt={"banner decoration3"} className="h-[90%] w-[90%] object-cover m-auto rounded-lg" />
                </div>
            </div>
        </div >
    );
};

export default page; 