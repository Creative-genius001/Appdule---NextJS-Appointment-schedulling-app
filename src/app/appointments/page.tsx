import Table from '@/app/_components/table';
import type { ColumnsType } from 'antd/es/table';
import { data } from '../_data/data';
import { useEffect } from 'react';
                                                                                                                                                                                                                                                                                                                                       

const Page = () => {
  //   useEffect(() => {
  //   // Construct the URL with query parameters
  //   const searchParams = new URLSearchParams({
  //     id: '640a5310ebca7c98fc270d02',
  //   });
  //   const url = `http://localhost:5000/profil?${searchParams}`;

  //   // Make a request to the API
  //   fetch(url)
  //     .then(response => response.json())
  //     .then(data => {
  //       // Handle the API response
  //       console.log(data);
  //     });
  // }, []);


    return ( 
    <>
        <div className='bg-darkSecondary h-screen  pt-8 lg:px-[70px] sm:px-[20px] w-screen'>
           <h1 className='lg:text-2xl sm:text-lg font-medium'>All Appointments</h1>
              <div className='appt-container'>
                <Table data={data}/>
              </div>
        </div>      
    </> 
        );
}
 
export default Page;