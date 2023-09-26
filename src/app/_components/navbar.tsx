'use client'

import React, { useState } from 'react'
import '../styles/navbar.css'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { FiBell } from 'react-icons/fi'
import { IoIosArrowDown } from 'react-icons/io'
import { PiCalendarBlank } from 'react-icons/pi'
import { RiHomeLine } from 'react-icons/ri'
import { IoSettingsOutline, IoLogOutOutline } from 'react-icons/io5'
import { useRouter } from 'next/navigation'

function Navbar() {

    const pathname = usePathname()
    const router = useRouter();
    const[dropDown, setDropDown] = useState<boolean>(false)

    return (
            <div className='bg-[white] w-screen h-[130px] px-20 py-8 flex justify-between items-center'>
                <div className="logo-div">
                    <span className='font-bold text-[2.4rem] text-lightblue'>Appdule</span>
                </div>
                <div className='flex justify-start items-center mr-4'>
                    <div className='notification mr-3 rounded-[50%] bg-lightgrey w-12 h-12 flex justify-center items-center'>
                        <FiBell />
                    </div>
                    <div onClick={()=> setDropDown(!dropDown)} className='flex justify-start items-center hover:bg-darkSecondary rounded-[7px] cursor-pointer py-2 px-4 transition-all ease-in-out'>
                        <div className='notification mr-4 rounded-[50%] bg-lightgrey w-12 h-12 flex justify-center items-center'>
                            <span className='font-medium'>OI</span>
                        </div>
                        <div className='flex justify-start items-center'>
                            <span className='mr-2'>Ovie Ighosuakpo</span>
                            <IoIosArrowDown />
                        </div>
                    </div>
                </div>

                {dropDown && (
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
     
                )}           
            </div>
    )
}

export default Navbar