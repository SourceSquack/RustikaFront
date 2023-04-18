
import Image from 'next/image'

export default function Loading() {
  return (
    <div className="fixed z-50 top-0 left-0 w-screen h-screen bg-zinc-900 bg-opacity-50 flex items-center justify-center">
    <div className="relative w-10 h-10">
        <Image className='absolute inset-0 m-auto' src="/favicon.png" alt="Rustika Restaurant" width={144} height={144} />
      <div className="absolute z-20 top-0 left-0 w-full h-full border-2 border-white border-opacity-100 border-top-black rounded-full animate-spin"></div>
    </div>
  </div>
  )
}

