import React from 'react'
import { MdOutlineErrorOutline } from 'react-icons/md'

function Error(props: {error: string}) {
  return (
    <div className='absolute right-0 top-4 bg-[#ff2d2de8] py-6 w-[350px] flex justify-center items-center '>
        <MdOutlineErrorOutline className="text-[2rem] text-[white] " />
        <span className='ml-4 text-[white] text-xl '>{props.error}</span>
    </div>
  )
}

export default Error