import { AppointmentData, data } from '../_data/data';
import Image from "next/image";
import Link from 'next/link';
import png1 from '../../public/assets/01.png'
import png3 from '../../public/assets/03.png'
import { FC } from "react";


interface DataProps {
  data: AppointmentData[];
}

const Table: React.FC<DataProps> = ({data}): JSX.Element  => {

    const processDate = (arg : number) => {
        let date = new Date(arg);
        return date.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});
    }

    return ( 
        <>
            <div className="w-full mt-4 bg-[white] rounded-[7px]">
                <div className="table-container w-full">
                    <table className="lg:w-[80%] sm:w-full">
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
                            {data?.map((appt)=>{
                                return(
                            <tr>
                                <td className="id">
                                    <p>{appt.id}</p>
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
                                    <span className=" text-lightblue cursor-pointer hover:underline ">Cancel</span>
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