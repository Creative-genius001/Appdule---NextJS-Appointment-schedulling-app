'use client'

import * as React from 'react'
import { BiCalendarPlus } from 'react-icons/bi'
import Link from 'next/link'
// import RouteGuard from '@/guard/routeGuard'
import Table from '@/app/_components/table'
import { AppointmentData, data } from '@/app/_data/data'
import Navbar from '../../_components/navbar'
import MobileNav from '../../_components/mobileNav'
import CreateAppointment from '../../_components/createAppointment'
import Sidenav from '../../_components/sidenav'

function Page() {

  const [createBtn, setCreateBtn] = React.useState<boolean>(false)
  const showCreateAppt = () => {
    setCreateBtn(!createBtn)
  }

  return (
    <div className='bg-[#fafafa] text-dark w-screen pt-8 lg:px-[70px] sm:px-[20px] min-h-screen'>
      {/* Schedule appointment */}
      {/* <Navbar /> */}
      {/* <MobileNav /> */}
      { createBtn && <CreateAppointment showCreateAppt={showCreateAppt} /> }
      {/* <h1 className='font-semibold text-[1.8rem]'>Home</h1> */}
      <div className='main-card w-full h-[250px] bg-[#ffffff] flex flex-col justify-center items-center mt-4 rounded-[6px]'>
          <button onClick={showCreateAppt} className='bg-lightblue hover:bg-[#1da5a0] sm:px-4 md:px-6 py-4 text-[white] flex items-center justify-center sm:text-base  md:text-lg rounded-[12px] transition-all ease-in-out'>
            <BiCalendarPlus className='md:text-[30px] sm:text-[20px] ' /><span className='ml-3 font-semibold md:text-base sm:text-sm'>Book Appointment</span>
          </button>
      </div>

      {/* Appointment Schedule Tables */}
      <div className='main-card w-full h-auto bg-[#ffffff] mt-8 rounded-[6px] lg:p-8 sm:px-4 sm:py-8'>
        <h1 className='lg:text-2xl sm:text-lg font-medium'>Upcomming Appointments</h1>

        <div className='appt-container'>
          <Table data={data}/>
        </div>
      </div>

    </div>
  )
}

export default Page;