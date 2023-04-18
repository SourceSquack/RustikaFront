import Link from 'next/link'
import React from 'react'
import {AiOutlineWhatsApp, AiOutlineInstagram} from 'react-icons/ai'
import {FaFacebook} from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className='bg-zinc-900 rounded-lg opacity-90 shadow m-4'>
      <div className='w-full max-w-screen-xl mx-auto p-4 md:py-8'>
        <div className='sm:flex sm:items-center sm:justify-between'>
          <a href='/' className='flex items-center mb-4 sm:mb-0 text-amber-700 text-2xl font-bold'>
            <img src='/images/favicon.png' alt='Logo' className='w-20 h-20' />
          </a>
          <ul className='flex flex-wrap items-center mb-6 text-sm font-medium text-amber-600 sm:mb-0'>
            <li className='mr-4'>
              <a href='/'>Inicio</a>
            </li>
            <li className='mr-4'>
              <a href='/menu'>Menú</a>
            </li>
            <li className='mr-4'>
              <a href='/reservar'>Reservar</a>
            </li>
            <li className='mr-4'>
              <a href='/contacto'>Contacto</a>
            </li>

          </ul>
        </div>
        <hr className="my-6 border-amber-400 sm:mx-auto dark:border-amber-700 lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-amber-600 sm:text-center dark:text-amber-600">© 2023 <a href="https://rustikafilandia.net/" className="hover:underline">Rustika Restaurant</a>. All Rights Reserved.
          </span>
          <div className="flex mt-4 space-x-6 sm:justify-center sm:mt-0">
            <Link href="https://www.facebook.com/RustikaFilandia" target='_blank' className="text-amber-600 hover:text-amber-800 dark:hover:text-white">
              <FaFacebook className='w-5 h-5'/>
            </Link>
            <Link href="https://www.instagram.com/rustikafilandia" target='_blank' className="text-amber-600 hover:text-amber-800 dark:hover:text-white">
              <AiOutlineInstagram className='w-5 h-5' />
            </Link>
            <Link href="https://wa.me/573157880615" target='_blank' className="text-amber-600 hover:text-amber-800 dark:hover:text-white">
              <AiOutlineWhatsApp className='w-5 h-5'/>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer