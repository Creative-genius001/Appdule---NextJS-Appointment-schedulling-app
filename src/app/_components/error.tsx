import React from 'react'
import { MdOutlineErrorOutline } from 'react-icons/md'

function Error(props: {error: string}) {
  return (
    <div className='sm:px-4 md:px-0 lg:w-1/2 sm:w-full'>
      <div className=' bg-[#d42a2ad3] py-3 w-full flex justify-center items-center rounded-[6px] '>
        <MdOutlineErrorOutline className="text-[2rem] text-[white] " />
        <span className='ml-4 text-[#ffffff] text-xl '>{props.error}</span>
      </div>
    </div> 
  )
}

export default Error