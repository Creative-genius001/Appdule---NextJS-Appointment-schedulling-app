import Link from 'next/link'
import React from 'react'
import Navbar from './navbar'
import { usePathname } from 'next/navigation'
import '../styles/setting.css'

function SettingNav() {

const pathname = usePathname();

return (
    <>
            <div className=''>
                <h1 className='lg:text-[28px] sm:text-[24px] font-medium'>Settings</h1>
                <div className='flex w-full items-center mt-8 link-div'>
                <Link className={`${pathname === '/settings/profile' ? 'active' : ''}`} href='/settings/profile'>
                    <li className='link-li'>Profile</li>
                </Link>
                <Link className={`${pathname === '/settings/security' ? 'active' : ''}`} href='/settings/security'> 
                    <li className='link-li'>Password</li>
                </Link>
            </div>
        </div>
    </>
  )
}

export default SettingNav;