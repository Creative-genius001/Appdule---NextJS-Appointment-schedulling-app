'use client';

import * as React from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import 'react-datepicker/dist/react-datepicker-cssmodules.css';
import dayjs, { Dayjs } from 'dayjs';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
// import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';

function Datepicker(props: any) {

    const [date, setDate] = React.useState<any>('');
    // const ExampleCustomInput = React.forwardRef(({ value, onClick }, ref) => (
    // <button className="example-custom-input" onClick={onClick} ref={ref}>
    //   {value}
    // </button>
    // ));
    return(

        <DatePicker
         selected={date} 
         onChange={(data) => setDate(data)}
         minDate={new Date()} 
        showTimeSelect
        timeFormat="HH:mm"
        timeIntervals={15}
        timeCaption="time"
        dateFormat="MMMM d, yyyy h:mm aa"
         />
    );

    // return(
    //     <LocalizationProvider dateAdapter={AdapterDayjs}>
    //         <DemoContainer components={['MobileDatePicker']}>
    //             <MobileDatePicker
    //                 className='datepicker'
    //                 defaultValue={dayjs(new Date())}
    //                 sx={{ width: '100%'}}
    //                 onChange={(newValue: any) => {
    //                     newValue = dayjs(newValue).format('dddd, MMMM D, YYYY')
    //                     console.log(newValue)
    //                     props.getDate(newValue)
    //                 }}
    //             />
    //         </DemoContainer>
    //     </LocalizationProvider>
    // );
}

export default Datepicker