'use client'

import React from 'react'
import Link from 'next/link'
import { FiBell } from 'react-icons/fi'
import { IoIosArrowDown } from 'react-icons/io'
import { PiCalendarBlank } from 'react-icons/pi'
import { RiHomeLine } from 'react-icons/ri'
import { HiMiniArrowLeft } from 'react-icons/hi2'
import { IoSettingsOutline, IoLogOutOutline } from 'react-icons/io5'
import { useRouter, usePathname } from 'next/navigation'
import '@/app/styles/navbar.css'

function DesktopNav(props: any) {

    const pathname = usePathname()
    const router = useRouter();

  return (
    <div className='drop-down bg-[white] w-[400px] h-[350px] rounded-[12px] absolute top-24 right-16 p-6 flex flex-col justify-start'>
                    <div className='mb-6 flex justify-between items-center'>
                        <h3 className='font-semibold text-lg'>Ovie Ighosuakpo</h3>
                        <button onClick={()=> router.push('/settings/profile')} className='rounded-[20px] text-[white] font-semibold bg-lightblue px-4 py-1 text-sm   '>Details</button>
                    </div>
                    <div>
                         <ul>
                            <li>
                                <Link className={`${pathname === '/home' ? 'active' : ''}`} href='/home'>
                                <div id='link'>
                                    <RiHomeLine className="text-[1.4rem] " />
                                    <span>Home</span>
                                </div>
                                </Link>
                            </li>
                            <li>
                                <Link className={`${pathname === '/appointments' ? 'active' : ''}`} href='/appointments'>
                                <div id='link'>
                                    <PiCalendarBlank className="text-[1.4rem] " />
                                    <span>Appointments</span>
                                </div>
                                </Link>
                            </li>
                            <li><Link className={`${pathname === '/settings' ? 'active' : ''}`} href='/settings'>
                                <div id='link'>
                                    <IoSettingsOutline className="text-[1.4rem] "/>
                                    <span>Settings</span>
                                </div>
                                </Link>
                            </li>
                            <li>
                                <div id='link'>
                                    <IoLogOutOutline className="text-[1.6rem] " />
                                    <span>Logout</span>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
  )
}

export default DesktopNav