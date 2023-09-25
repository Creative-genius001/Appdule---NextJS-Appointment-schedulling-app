import React from 'react'
import { BiCalendarPlus } from 'react-icons/bi'
import Link from 'next/link'
// import RouteGuard from '@/guard/routeGuard'
import Table from '@/app/_components/table'
import { AppointmentData, data } from '@/app/_data/data'

function Page() {
  return (
    <div className='bg-[#fcfcfc] pt-8 lg:px-[70px] sm:px-[20px] min-h-screen'>
      <div>
        <h1 className='font-semibold lg:text-4xl sm:text-2xl'>Welcome, Ovie Ighosuakpo</h1>
        <p className='text-[#585858] mt-2'>Create health appointments so that you can be attended to on arrival</p>
      </div>

      {/* Schedule appointment */}

      <div className='main-card w-full h-[250px] bg-[#ffffff] flex flex-col justify-center items-center mt-4 rounded-[6px]'>
        <Link href={'/create'}>
          <button className='button bg-lightblue sm:px-4 md:px-6 py-4 text-[white] flex items-center justify-center sm:text-base  md:text-lg rounded-[6px]'>
            <BiCalendarPlus className='md:text-[30px] sm:text-[20px] ' /><span className='ml-3 font-semibold'>Book Appointment</span>
          </button>
        </Link>
        <span className='mt-2'>You have 1 upcoming appointments</span>
      </div>

      {/* Appointment Schedule Tables */}
      <div className='main-card w-full h-auto bg-[#ffffff] mt-8 rounded-[6px] p-8'>
        <h1 className='lg:text-2xl sm:text-lg font-medium'>Upcomming Appointments</h1>

        <div className='appt-container'>
          <Table data={data}/>
        </div>
      </div>

    </div>
  )
}

export default Page;