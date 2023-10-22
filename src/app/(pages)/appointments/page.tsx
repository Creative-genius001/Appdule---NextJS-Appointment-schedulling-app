'use client'

import * as React from 'react'
import Table from '@/app/_components/table';
import type { ColumnsType } from 'antd/es/table';
import { data } from '../../_data/data';
import { useEffect } from 'react';
import { getAppointments } from '@/app/_services/appointment.service';
import { BsFillCalendarMinusFill } from 'react-icons/bs'
import { DocumentData } from 'firebase/firestore';
import Loader from '@/app/_components/loader';
import { RootState, useAppDispatch } from '@/app/store/store';
import { fetchAppointmentData } from '@/app/store/appointment/appointmentActions';
import { fetchAppointments } from '@/app/store/appointment/appointmentSlice';
import { useSelector } from 'react-redux';
import routeGuard from '@/app/_guard/routeGuard';
                                                                                                                                                                                                                                                                                                                                       

const Page = () => {
  // const[data, setData] = React.useState<DocumentData[]>([])
  const[loading, setLoading] = React.useState<boolean>(true)

  const dispatch = useAppDispatch();
  
  const data = useSelector((state: RootState) => state.appointments.appointment);

  React.useEffect(()=>{

    const fetchAppointmentData = async()=> {
      const store: any = localStorage.getItem('utk');
      const uid = (JSON.parse(store)).user_id

      const res = await getAppointments(uid);
      if(res?.length === 0){
        setLoading(false)
      }
      setLoading(false)
      dispatch(fetchAppointments(res));
    }

    fetchAppointmentData();
  },[])

    return ( 
        <>
            <div className='bg-darkSecondary min-h-screen  pt-8 lg:px-[70px] sm:px-[20px] w-screen'>
              <h1 className='lg:text-2xl sm:text-xl font-medium'>All Appointments</h1>
                  <div className='appt-container'>
                    {loading ? <Loader /> : ''}
                    {(data?.length === 0 && !loading ) && (
                      <div className='w-full bg-[white] p-16 mt-4 flex flex-col justify-center items-center'>
                        <BsFillCalendarMinusFill className="opacity-50 text-[4rem] " />
                        <p className='mt-3 font-medium sm:text-base md:text-xl opacity-50 text-center leading-snug'>You have not booked any appointment</p>
                      </div>
                    )}
                    {(data?.length > 0 && !loading ) && <Table data={data}/>}
                  </div>
            </div>      
        </> 
        );
}
 
export default routeGuard(Page);