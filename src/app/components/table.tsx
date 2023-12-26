import { MdDeleteOutline, MdClear } from 'react-icons/md'
import { AppointmentModel } from '../models/appointment.model';
import { DocumentData } from 'firebase/firestore';
import ConfirmDialogueBox from './confirmDeleteDialogue';
import { useState } from 'react';



const Table: React.FC<DocumentData> = (props): JSX.Element  => {

    const {data, setFetchData} = props;
    const [confirmDelete, setConfirmDelete] =  useState<boolean>(false)
    const [appointmentID, setAppointmentID] =  useState<string>('')
    const closeDialogue = () =>{
        setFetchData(true)
        setConfirmDelete(false)
    }

    return ( 
        <>
            <div className="w-full mt-4 bg-[#ffffff] rounded-[7px]">
                <div className="table-container lg:w-[100%] sm:w-full">
                    <table className="">
                        <thead>
                            <tr>
                                <td>Appointment ID</td>
                                <td>Title</td>
                                <td>Date</td>
                                <td>Time</td>
                                <td>Status</td>
                                <td>Action</td>
                            </tr>
                        </thead>
                        <tbody>
                            {data?.map((appt: AppointmentModel, index: number)=>{
                                return(
                            <tr key={index}>
                                <td className="id">
                                    <p>{appt.appointment_id}</p>
                                </td>
                                <td className="title">
                                    <p>{appt.title}</p>
                                </td>
                                <td className="date">
                                    <p>{appt.date}</p>
                                </td>
                                <td className="time">
                                    <p>{appt.time}</p>
                                </td>
                                <td className="status completed">
                                    <p>{appt.status}</p>
                                </td>
                                <td className="action">
                                    <span onClick={() =>{ 
                                        setConfirmDelete(true)
                                        setAppointmentID(appt.appointment_id) 
                                        }} 
                                        className=" text-lightblue cursor-pointer text-[1.5rem]"
                                        >
                                            <MdDeleteOutline />
                                        </span>
                                </td>
                            </tr>
                                )
                            })}
                        </tbody>
                    </table>
            </div>
                {confirmDelete && <ConfirmDialogueBox closeDialogue={closeDialogue} id={appointmentID} />}
            </div>

        </>
     );
}
 
export default Table;