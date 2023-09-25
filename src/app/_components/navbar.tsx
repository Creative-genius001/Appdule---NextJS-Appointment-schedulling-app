'use client'

import React from 'react'
import '../styles/navbar.css'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

function Navbar() {

    const pathname = usePathname()
    return (
            <div className='nav-container w-[230px] absolute right-[100px] top-[100px] rounded-[10px]'>
            <div className='py-2'>
                <ul>
                    <li>
                        <Link className={`${pathname === '/home' ? 'active' : ''}`} href='/home'>
                            My Dashboard
                        </Link>
                    </li>
                    <li>
                        <Link className={`${pathname === '/appointments' ? 'active' : ''}`} href='/appointments'>
                            Appointments
                        </Link>
                    </li>
                    <li><Link className={`${pathname === '/settings' ? 'active' : ''}`} href='/settings'>
                            Settings
                        </Link></li>
                    <li>Logout</li>
                </ul>
            </div>
            </div>
    )
}

export default Navbar