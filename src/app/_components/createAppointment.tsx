'use client'
import React, { ChangeEvent } from 'react'
import '@/app/styles/createAppointment.css'
import Datepicker from './datepicker'
import { MdOutlineCancel } from 'react-icons/md'
import Timepicker from './timepicker'

function CreateAppointment(props: any) {
  return (
    <>
    <div className='absolute w-screen h-screen top-0 left-0 backdrop-brightness-50 bg-white/30 flex justify-center items-center'>
        <div className='rounded-[10px] bg-[white] px-5 py-8 lg:w-[500px] sm:w-screen h-auto text-dark  '>
            <div className='w-full flex justify-between items-center mb-5'>
                <h1 className=' font-semibold text-2xl'>Create Appointment</h1>
                <MdOutlineCancel onClick={props.showCreateAppt} className='text-[1.8rem] cursor-pointer opacity-70 ' />
            </div>
            {/* <p className='leading-snug w-[70%]'>Create a new appointment to see a doctor describing your illness in less words.</p> */}
            <form action="" className='mt-4'>
                <div className="flex flex-col">
                    <label className="text-[0.9rem] font-medium mb-1 ">Title</label>
                    <input onChange={(e: ChangeEvent<HTMLInputElement>)=> console.log(e)} type="text" placeholder="e.g Fever Symptoms" required/>
                </div>
                <div className="flex flex-col mt-3">
                    <label className="text-[0.9rem] font-medium mb-1 ">Date</label>
                    <Datepicker />
                </div>
                <div className="flex flex-col mt-3">
                    <label className="text-[0.9rem] font-medium mb-1 ">Time</label>
                    <Timepicker />
                </div>
                <div className="flex flex-col mt-3">
                    <label className="text-[0.9rem] font-medium mb-1 ">Description</label>
                    <textarea className='text-area' placeholder='minimum of 100 words' required></textarea>
                </div>
                <button className='rounded-[7px] w-full py-3 mt-3 bg-lightblue text-[white] font-medium hover:bg-[#1da5a0] transition-all ease-in-out '>Book Appointment</button>
            </form>
        </div>
    </div>  
    </>
  )
}

export default CreateAppointment