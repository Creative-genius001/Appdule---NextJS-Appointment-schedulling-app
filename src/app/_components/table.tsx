import { MdDeleteOutline } from 'react-icons/md'
import { AppointmentModel } from '../models/appointment.model';
import { DocumentData } from 'firebase/firestore';



const Table: React.FC<DocumentData> = ({data}): JSX.Element  => {
    console.log(data)

    return ( 
        <>
            <div className="w-full mt-4 bg-[white] rounded-[7px]">
                <div className="table-container lg:w-[100%] sm:w-full">
                    <table className="">
                        <thead>
                            <tr>
                                <td>Appointment ID</td>
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
                                    <span className=" text-lightblue cursor-pointer text-[1.5rem]"><MdDeleteOutline /></span>
                                </td>
                            </tr>
                                )
                            })}
                        </tbody>
                    </table>
            </div>

            </div>

        </>
     );
}
 
export default Table;