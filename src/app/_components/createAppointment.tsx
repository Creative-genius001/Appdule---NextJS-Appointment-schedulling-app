'use client'

import React, { FormEvent, useEffect } from 'react'
import '@/app/styles/createAppointment.css'
import Datepicker from './datepicker'
import { MdOutlineCancel } from 'react-icons/md'
import { User } from '../models/user.model'
import { useSelector } from 'react-redux'
import { RootState } from '../store/store'
import dayjs, { Dayjs } from 'dayjs';

function CreateAppointment(props: any) {

    const { uid } = useSelector((state: RootState) => state.auth);
    const[title, setTitle] = React.useState<string | null>(null)
    const[time, setTime] = React.useState<string | null>(null)
    const[date, setDate] = React.useState<string | null>(null)
    const[description, setDescription] = React.useState<string>('')

    const getDateAndTime = (data: any) => {
        const dateFormatted = dayjs(data).format('ddd, MMMM D');
        const timeFormatted = dayjs(data).format('HH:mmA');
        setDate(dateFormatted);
        setTime(timeFormatted)
    }

    const handleSubmit = async(e: FormEvent<HTMLFormElement>) =>{
        e.preventDefault();
        if(date == null && time == null && title == null) return;
        const request = {
            user_id: uid,
            title,
            date,
            time,
            description
        }
        props.createAppt(request)
        props.showCreateAppt();  
    }

  return (
    <>
    <div className='fixed w-screen h-screen top-0 left-0 backdrop-brightness-50 bg-white/30 flex justify-center items-center'>
        <div className='rounded-[10px] bg-[white] sm:px-4 md:px-5 py-8 lg:w-[500px] sm:w-[90%] h-auto text-dark  '>
            <div className='w-full flex justify-between items-center mb-5'>
                <h1 className=' font-semibold text-2xl'>Create Appointment</h1>
                <MdOutlineCancel onClick={props.showCreateAppt} className='text-[1.8rem] cursor-pointer opacity-70 ' />
            </div>
            <form onSubmit={handleSubmit} className='mt-4'>
                <div className="flex flex-col">
                    <label className="text-[0.9rem] font-medium mb-1 ">Title</label>
                    <input onChange={(e)=> setTitle(e.target.value)} type="text" placeholder="e.g Fever Symptoms" required/>
                </div>
                <div className="flex flex-col mt-3"> 
                    <label className="text-[0.9rem] font-medium mb-1 ">Date</label>
                    <Datepicker getDateAndTime={getDateAndTime} /> 
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