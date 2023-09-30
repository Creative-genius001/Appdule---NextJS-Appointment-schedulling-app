'use client'

import * as React from 'react'
import Table from '@/app/_components/table';
import type { ColumnsType } from 'antd/es/table';
import { data } from '../../_data/data';
import { useEffect } from 'react';
import { getAppointments } from '@/app/_services/appointment.service';
import { AppointmentModel } from '@/app/models/appointment.model';
import { DocumentData } from 'firebase/firestore';
import Loader from '@/app/_components/loader';
                                                                                                                                                                                                                                                                                                                                       

const Page = () => {
  const[data, setData] = React.useState<DocumentData>()

  React.useEffect(()=>{
    const fetchAppointmentData = async()=> {
      const store: any = localStorage.getItem('utk');
      const uid = (JSON.parse(store)).user_id
      console.log(uid)

      const res = await getAppointments(uid)
      setData(res)
    }

    fetchAppointmentData();
  },[])

    return ( 
        <>
            <div className='bg-darkSecondary h-screen  pt-8 lg:px-[70px] sm:px-[20px] w-screen'>
              <h1 className='lg:text-2xl sm:text-lg font-medium'>All Appointments</h1>
                  <div className='appt-container'>
                    {!data ? <Loader /> : <Table data={data}/>}
                  </div>
            </div>      
        </> 
        );
}
 
export default Page;