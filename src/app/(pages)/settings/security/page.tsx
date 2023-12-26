'use client'

import SettingNav from '@/app/components/settingNav';
import routeGuard from '@/app/guard/routeGuard';
import '../../../styles/setting.css'
import React from 'react'
import Navbar from '@/app/components/navbar';
import { HiOutlineSave } from "react-icons/hi";

function Page() {

const [password, setPassword] = React.useState<string>('');
const [confirmPassword, setConfirmPassword] = React.useState<string>('');

const updateUserDate = () => {

}

  return (
    <>
        <Navbar />
        <div className='bg-[#fafafa] text-dark w-[100%] pt-8 lg:px-[70px] sm:px-[20px] min-h-screen'>  
            <SettingNav />
        <div className='mt-8 link-div pb-4 flex md:flex-row sm:flex-col items-center justify-between '>
          <div>
            <h2 className='font-bold sm:text-[18px] md:text-[20px]  '>Update your password</h2>
            <p className='font-medium text-[gray]'>Change your password and confirm via email.</p>
          </div>
          <button className='flex items-center justify-center rounded-[7px] sm:w-full md:w-auto py-3 px-12 sm:mt-6 md:mt-0 bg-lightblue text-[white] font-medium hover:bg-[#1da5a0] transition-all ease-in-out '><HiOutlineSave className='mr-3 text-[1.3rem] ' />Change</button>
        </div>

        <div className='mt-4'>
          <form onSubmit={updateUserDate}>
                <div className="flex flex-col">
                    <label className="text-[0.9rem] font-medium mb-1 ">New Password</label>
                    <input onChange={(e)=> setPassword(e.target.value)} type="text" required/>
                </div>
                <div className="flex flex-col mt-3"> 
                    <label className="text-[0.9rem] font-medium mb-1 ">Confirm Password</label>
                    <input onChange={(e)=> setConfirmPassword(e.target.value)} type="text" required/>
                </div>
            </form>
        </div>
    </div>
    </>
  )
}

export default routeGuard(Page);
