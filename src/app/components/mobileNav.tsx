'use client'

import React from 'react'
import Link from 'next/link'
import { PiCalendarBlank } from 'react-icons/pi'
import { RiHomeLine } from 'react-icons/ri'
import { HiMiniArrowLeft } from 'react-icons/hi2'
import { IoLogOutOutline, IoSettingsOutline } from 'react-icons/io5'
import { useRouter, usePathname } from 'next/navigation'
import '@/app/styles/navbar.css'
import { Logout } from '../services/auth.service'
import { useAppDispatch } from '../store/store'
import { reset } from '../store/auth/authSlice'


function MobileNav(props: any) {

  const pathname = usePathname()
  const router = useRouter();
  const dispatch = useAppDispatch();
  return (
    <div className='bg-[#ffffff] w-screen h-screen absolute top-0 left-0 p-6 flex flex-col justify-start z-[1000]'>
                    <div className='mb-6 flex justify-between items-center'>
                        <div onClick={() => props.closeDropDown()} className='notification mr-4 rounded-[50%] bg-lightgrey w-12 h-12 flex justify-center items-center cursor-pointer'>
                            <span className='font-medium'>
                              <HiMiniArrowLeft />
                            </span>
                        </div>
                        <button onClick={()=> router.push('/settings/profile')} className='rounded-[20px] text-[white] font-semibold bg-lightblue px-4 py-1 text-sm   '>Details</button>
                    </div>
                    <div className='mb-3'>
                      <h3 className='font-semibold text-2xl'>{props.user?.firstName} {props.user?.lastName}</h3>
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
                            <li  onClick={()=>{
                                Logout()
                                dispatch(reset())
                                router.push('auth/login')
                            }}>
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

export default MobileNav