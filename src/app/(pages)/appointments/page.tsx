'use client'

import * as React from 'react'
import Table from '@/app/components/table';
import { useEffect } from 'react';
import { getAppointments } from '@/app/services/appointment.service';
import { BsFillCalendarMinusFill } from 'react-icons/bs'
import Loader from '@/app/components/loader';
import { RootState, useAppDispatch } from '@/app/store/store';
import { useSelector } from 'react-redux';
import routeGuard from '@/app/guard/routeGuard';
import { AppointmentModel } from '@/app/models/appointment.model';
import Navbar from '@/app/components/navbar';
                                                                                                                                                                                                                                                                                                                                       

const Page = () => {
  const[data, setData] = React.useState<AppointmentModel[]>([])
  const[loading, setLoading] = React.useState<boolean>(true)
  const[fetchData, setFetchData] = React.useState<boolean>(true)
  const { uid } = useSelector((state: RootState) => state.auth);
  const dispatch = useAppDispatch();

  React.useEffect(()=>{

  const fetchAppointmentData = async()=> {
    if(!uid){
      console.error('An error occured while fetching uid')
      return
    }
    if(fetchData == true){ 
      const res = await getAppointments(uid);
        if(res?.length === 0){
          setLoading(false)
        }
        setLoading(false)
        setData(res)
        setFetchData(false)
        // dispatch(fetchAppointments(res));
      }
    }

    fetchAppointmentData();
  },[uid,fetchData])

    return ( 
        <>
            <Navbar />
            <div className='bg-darkSecondary min-h-screen  pt-8 lg:px-[70px] sm:px-[20px] w-screen'>
              <h1 className='lg:text-[28px] sm:text-xl font-medium'>All Appointments</h1>
                  <div className='appt-container  mt-8'>
                    {loading ? <Loader /> : ''}
                    {(data?.length === 0 && !loading ) && (
                      <div className='w-full bg-[white] p-16 mt-4 flex flex-col justify-center items-center'>
                        <BsFillCalendarMinusFill className="text-[#858585] text-[4rem] " />
                        <p className='mt-3 sm:text-base md:text-xl text-[#858585] text-center leading-snug'>You have not booked any appointment</p>
                      </div>
                    )}
                    {(data?.length > 0 && !loading ) && <Table setFetchData={setFetchData} data={data}/>}
                  </div>
            </div>      
        </> 
        );
}
 
export default routeGuard(Page);