'use client'
import React, { ChangeEvent } from 'react'
import '@/app/styles/createAppointment.css'
import Datepicker from './datepicker'

function CreateAppointment() {
  return (
    <>
    <div className='absolute w-screen h-screen top-0 left-0 backdrop-brightness-50 bg-white/30 flex justify-center items-center'>
        <div className='rounded-[10px] bg-[white] px-5 py-8 w-[500px] h-auto text-dark  '>
            <h1 className=' font-semibold text-2xl mb-5'>Create Appointment</h1>
            {/* <p className='leading-snug w-[70%]'>Create a new appointment to see a doctor describing your illness in less words.</p> */}
            <form action="" className='mt-4'>
                <div className="flex flex-col">
                    <label className="text-[0.9rem] font-medium mb-1 ">Title</label>
                    <input onChange={(e: ChangeEvent<HTMLInputElement>)=> console.log(e)} type="text" placeholder="e.g Fever Symptoms"></input>
                </div>
                <div className="flex flex-col mt-3">
                    <label className="text-[0.9rem] font-medium mb-1 ">Date</label>
                    <Datepicker />
                </div>
                <div className="flex flex-col mt-3">
                    <label className="text-[0.9rem] font-medium mb-1 ">Time</label>
                    <Datepicker />
                </div>
                <div className="flex flex-col mt-3">
                    <label className="text-[0.9rem] font-medium mb-1 ">Description</label>
                    <textarea className='text-area'></textarea>
                </div>
            </form>
        </div>
    </div>  
    </>
  )
}

export default CreateAppointment