'use client'

import SettingNav from '@/app/components/settingNav';
import routeGuard from '@/app/guard/routeGuard';
import '../../../styles/setting.css'
import React from 'react'
import Navbar from '@/app/components/navbar';
import { HiOutlineSave } from "react-icons/hi";

function Page() {

const [firstName, setFirstName] = React.useState<string>('');
const [lastName, setLastName] = React.useState<string>('');

const updateUserDate = () => {

}

  return (
    <>
        <Navbar />
    <div className='bg-[#fafafa] text-dark w-[100%] pt-8 lg:px-[70px] sm:px-[20px] min-h-screen'>  
        <SettingNav />
        <div className='mt-8 link-div pb-4 flex md:flex-row sm:flex-col items-center justify-between '>
          <div>
            <h2 className='font-bold sm:text-[18px] md:text-[20px]   '>Update your profile</h2>
            <p className='font-medium text-[gray]'>Edit your details and save so that your information can stay up to date.</p>
          </div>
          <button className='flex items-center justify-center rounded-[7px] sm:w-full md:w-auto px-12 py-3 sm:mt-6 md:mt-0 bg-lightblue text-[white] font-medium hover:bg-[#1da5a0] transition-all ease-in-out '><HiOutlineSave className='mr-3 text-[1.3rem] ' />Save</button>
        </div>

        <div className='mt-4'>
          <form onSubmit={updateUserDate}>
                <div className="flex flex-col">
                    <label className="text-[0.9rem] font-medium mb-1 ">First name</label>
                    <input onChange={(e)=> setFirstName(e.target.value)} type="text" required/>
                </div>
                <div className="flex flex-col mt-3"> 
                    <label className="text-[0.9rem] font-medium mb-1 ">Last name</label>
                    <input onChange={(e)=> setLastName(e.target.value)} type="text" required/>
                </div>
            </form>
        </div>
    </div>
    </>
  )
}

export default routeGuard(Page);
