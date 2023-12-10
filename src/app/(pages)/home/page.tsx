'use client'

import * as React from 'react'
import { BiCalendarPlus } from 'react-icons/bi'
import Table from '@/app/_components/table'
import CreateAppointment from '../../_components/createAppointment'
import { getUpcomingAppointment } from '@/app/services/appointment.service'
import { useSelector } from 'react-redux'
import { RootState, useAppDispatch } from '@/app/store/store'
import routeGuard from '@/app/guard/routeGuard'
import SnackBar from '@/app/_components/snackBar'
import { fetchUser } from '@/app/store/user/userSlice'
import { createAppointmentEffect } from '@/app/store/appointment/appointmentActions'
import Navbar from '@/app/_components/navbar'
import { BsFillCalendarMinusFill } from 'react-icons/bs'


function Page() {

  interface AppointmentRequest {
    user_id: string;
    title: string;
    date: string;
    time: string;
    description: string;
  }

  const { user } = useSelector((state: RootState) => state.user);
  const { error, isLoading } = useSelector((state: RootState) => state.appointments);
  const { uid } = useSelector((state: RootState) => state.auth);
  const [createAppointmentBtn, setCreateAppointmentBtn] = React.useState<boolean>(false)
  const [open, setOpen] = React.useState<boolean>(false)
  const [data, setData] = React.useState<any>([])
  const dispatch = useAppDispatch();
  const showCreateAppointmentComponent = () => {
    setCreateAppointmentBtn(!createAppointmentBtn)
  }

  const handleClose = (event: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };

  const handleCreateAppointment = async(data: AppointmentRequest) => {
    try {
      const res = await dispatch(createAppointmentEffect(data));  
        if(!res){
            console.error('error')
            return;
        }
        setOpen(true)
        setCreateAppointmentBtn(false)
    } catch (error) {
        console.error('error')
    }
  }



  React.useEffect(()=>{
    const fetchUpcomingAppointments = async()=> {
      if(uid){
        const res = await getUpcomingAppointment(uid)
        setData(res) 
      }
    }
    fetchUpcomingAppointments();
  },[data, uid])

  React.useEffect(()=>{
    if(!user){
      if(uid){
        dispatch(fetchUser(uid))
      }
    }
  },[dispatch, uid, user])

  return (
    <>
      <SnackBar msg={'Created Successfully'} open={open} close={handleClose}/>
      <Navbar />
      <div className='bg-[#fafafa] text-dark w-[100%] pt-8 lg:px-[70px] sm:px-[20px] min-h-screen'>
      { createAppointmentBtn && <CreateAppointment showCreateAppt={showCreateAppointmentComponent} loading={isLoading} createAppt={handleCreateAppointment} /> }
      <div className='main-card w-full h-[250px] bg-[#ffffff] flex flex-col justify-center items-center mt-4 rounded-[6px]'>
          <button onClick={showCreateAppointmentComponent} className='bg-lightblue hover:bg-[#1da5a0] sm:px-4 md:px-6 py-4 text-[white] flex items-center justify-center sm:text-base  md:text-lg rounded-[12px] transition-all ease-in-out'>
            <BiCalendarPlus className='md:text-[30px] sm:text-[20px] ' /><span className='ml-3 font-semibold md:text-base sm:text-sm'>Book Appointment</span>
          </button>
      </div>
      <div className='main-card w-full h-auto bg-[#ffffff] mt-8 rounded-[6px] lg:p-8 sm:px-4 sm:py-8'>
        <h1 className='lg:text-2xl sm:text-lg font-medium'>Upcomming Appointments</h1>

        <div className='appt-container'>
          {(data?.length === 0 ) && (
            <div className='w-full bg-[white] px-8 py-16 mt-4 flex flex-col justify-center items-center'>
              <BsFillCalendarMinusFill className="text-[#858585] text-[4rem] " />
              <p className='mt-3 sm:text-base md:text-xl text-[#858585] text-center leading-snug'>You do not have any upcoming appointments</p>
            </div>
          )}
          { data?.length > 0 && <Table data={data}/>}
        </div>
      </div>

      </div>
    </>
  )
}

export default routeGuard(Page);