'use client'

import React, { FormEvent, useEffect } from 'react'
import '@/app/styles/createAppointment.css'
import Datepicker from './datepicker'
import { MdOutlineCancel } from 'react-icons/md'
import Timepicker from './timepicker'
import { createAppointment } from '../_services/appointment.service'
import { User } from '../models/user.model'

function CreateAppointment(props: any) {

    const[title, setTitle] = React.useState<string>('')
    const[uid, setUid] = React.useState<string>('')
    const[time, setTime] = React.useState<string>('')
    const[date, setDate] = React.useState<string>('')
    const[description, setDescription] = React.useState<string>('')

    useEffect(()=> {
        const res: any = localStorage.getItem("utk");
        if(res != null){
            const User : User = JSON.parse(res);
            setUid(User.user_id)
        }

    },[])

    const getTime = (time: string) =>{
        setTime(time)
    }
    const getDate = (date: string) =>{
        setDate(date)
    }

    const handleSubmit = async(e: FormEvent<HTMLFormElement>) =>{
        e.preventDefault();
        const request = {
            user_id: uid,
            title,
            date,
            time,
            description
        }
        props.createAppt(request)
        
    }

  return (
    <>
    <div className='absolute w-screen h-screen top-0 left-0 backdrop-brightness-50 bg-white/30 flex justify-center items-center'>
        <div className='rounded-[10px] bg-[white] px-5 py-8 lg:w-[500px] sm:w-screen h-auto text-dark  '>
            <div className='w-full flex justify-between items-center mb-5'>
                <h1 className=' font-semibold text-2xl'>Create Appointment</h1>
                <MdOutlineCancel onClick={props.showCreateAppt} className='text-[1.8rem] cursor-pointer opacity-70 ' />
            </div>
            {/* <p className='leading-snug w-[70%]'>Create a new appointment to see a doctor describing your illness in less words.</p> */}
            <form onSubmit={handleSubmit} className='mt-4'>
                <div className="flex flex-col">
                    <label className="text-[0.9rem] font-medium mb-1 ">Title</label>
                    <input onChange={(e)=> setTitle(e.target.value)} type="text" placeholder="e.g Fever Symptoms" required/>
                </div>
                <div className="flex flex-col mt-3">
                    <label className="text-[0.9rem] font-medium mb-1 ">Date</label>
                    <Datepicker getDate={getDate} />
                </div>
                <div className="flex flex-col mt-3">
                    <label className="text-[0.9rem] font-medium mb-1 ">Time</label>
                    <Timepicker getTime={getTime} />
                </div>
                <div className="flex flex-col mt-3">
                    <label className="text-[0.9rem] font-medium mb-1 ">Description</label>
                    <textarea onChange={(e)=> setDescription(e.target.value)} className='text-area' placeholder='minimum of 100 words' required></textarea>
                </div>
                <button className='rounded-[7px] w-full py-3 mt-3 bg-lightblue text-[white] font-medium hover:bg-[#1da5a0] transition-all ease-in-out '>Book Appointment</button>
            </form>
        </div>
    </div>  
    </>
  )
}

export default CreateAppointment