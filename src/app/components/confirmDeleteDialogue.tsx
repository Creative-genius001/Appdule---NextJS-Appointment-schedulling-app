import { deleteAppointment } from '../services/appointment.service';
import {  MdClear } from 'react-icons/md'

const ConfirmDialogueBox: React.FC<any> = (props) => {
    
    return (
        <div className='absolute md:top-[40%] md:left-[40%] sm:top-[20%] sm:left-[4%] '>
            <div className='flex flex-col shadow-xl justify-center items-center sm:w-[300px] md:w-[350px] h-auto p-5 rounded-[6px] bg-[white] '>
                <div className='w-full flex justify-between items-center'>
                    <p className='md:text-[1.2rem] sm:text-base font-bold text-[#272727] '>Delete?</p>
                    <MdClear onClick={props.closeDialogue} className="md:text-[1.3rem] sm:text-[1.1rem] cursor-pointer" />
                </div>
                <p className='mt-2 md:text-base sm:text-sm '>Are you sure you want to delete this appointment? Actions carried out cannot be undone!</p>
                <div className='flex w-full gap-4 mt-3'>
                    <button onClick={()=> {
                        deleteAppointment(props.id)
                        props.closeDialogue
                    }} className='bg-[#e64646] w-full rounded-[6px] md:text-base sm:text-sm p-2 text-[white]'>Delete</button>
                </div>
            </div>
        </div>
    )
}


export default ConfirmDialogueBox;