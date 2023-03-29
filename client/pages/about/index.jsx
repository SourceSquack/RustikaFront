import s from './index.module.css';
import Image from 'next/image';
import banner1 from '../../public/images/AboutBG.gif';
import banner2 from '../../public/images/mural-RK-min.png';

const page = () => {
    return (
        <div className='h-screen'>
            <div className='bg-slate-100 h-1/4  text-red text-center text-5xl'>
                <Image src={banner1} alt={"banner decoration"} width-300 height="150" />
                <Image src={banner2} alt={"banner decoration"} width-300 height="150" />
            </div>
            <div className=" h-3/4 mt-4
                grid md:grid-cols-1 md:px-16  lg:grid-cols-2  gap-6 lg:px-48">
                <div className=" text-white text-center text-5xl grid gap-y-3 ">
                    <div className="  sm:row-span-4 lg:row-span-3 bg-red-500">
                        descripcion
                    </div>
                    <div className=" sm:row-span-0 lg:row-span-1 bg-red-900">
                        imagen corta
                    </div>
                </div>
                <div className="bg-blue-500 text-white text-center text-5xl">
                    imagen Larga Baner
                </div>
            </div>
        </div>
    );
};

export default page;