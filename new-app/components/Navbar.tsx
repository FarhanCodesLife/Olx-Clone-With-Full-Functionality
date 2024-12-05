import Image from 'next/image'
import React from 'react'
import logo from '@/public/assets/olx-logo.png'
import { IoCarSportOutline } from "react-icons/io5";
import { PiBuildingApartmentFill } from "react-icons/pi";

const Navbar = () => {
  return (
    <>
    <div className='p-4 justify-start items-center flex gap-7'>
    <div>
        <Image
          src={logo}
          alt="OLX Logo"
          className="dark:invert"
          width={60}
          height={60}
          priority
        />
    </div>
    
    <div className='flex gap-2 items-center'>
        <div className='bg-slate-300 p-2 rounded-full'>
        <IoCarSportOutline className='text-2xl' />
        </div>
        Moters
        </div>
    <div className='flex gap-2 items-center'>
    <div className='bg-slate-300 p-2 rounded-full'>
        <PiBuildingApartmentFill className='text-2xl' />
        </div>
        
        Property
        </div>

    </div>
    </>
  )
}

export default Navbar