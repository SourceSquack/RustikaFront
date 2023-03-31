
import React from 'react'
import Image from 'next/image'

const loading = () => {
  return (
    <div className="fixed z-50 top-0 left-0 w-full h-full bg-zinc-900 bg-opacity-50 flex items-center justify-center">
    <div className="relative w-10 h-10">
        <Image className='absolute inset-0 m-auto' loading={loading} src="/images/favicon.png" alt="Rustika Restaurant" width={144} height={144} />
      <div className="absolute top-0 left-0 w-full h-full border-2 border-white border-opacity-100 border-top-black rounded-full animate-spin"></div>
    </div>
  </div>
  
  )
}

export default loading