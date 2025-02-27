import React from 'react'
import { Image } from 'next/image';

function Navbar() {
  return (
    <div className='flex h-14 items-center justify-between gap-8 px-4 sm:px-6'>
        <div className='col-start-1 col-end-3 relative w-full h-64'>
            <Image
            src ="public/Group 1.svg"
            alt= " logo "
            layout="fill" 
            objectFit="contain" 
            /> </div>
        <div className='col-span-2 col-end-7'> </div>
    </div>
  )
}

export default Navbar