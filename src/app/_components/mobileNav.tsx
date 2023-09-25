'use client'

import React from 'react'
import Link from 'next/link'
import { MdOutlineSettings } from 'react-icons/md'
import { TbSmartHome, TbListDetails } from 'react-icons/tb'
import '@/app/styles/navbar.css'


function MobileNav() {
  return (
    <div className='bg-[white] fixed bottom-0 left-0 w-screen flex justify-between items-center px-6 py-4'>
        <div>
            <Link href='/home'><span id='nav-icon'><TbSmartHome /></span></Link>
        </div>
        <div>
            <Link href='/appointments'><span id='nav-icon'><TbListDetails /></span></Link>
        </div>
        <div>
            <Link href='/settings'><span id='nav-icon'><MdOutlineSettings /></span></Link>
        </div>
    </div>
  )
}

export default MobileNav