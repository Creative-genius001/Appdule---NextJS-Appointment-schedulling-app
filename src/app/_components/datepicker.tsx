'use client';

import * as React from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import 'react-datepicker/dist/react-datepicker-cssmodules.css';



function Datepicker(props: any) {

    const [date, setDate] = React.useState<any>('');
    return(

        <DatePicker
         selected={date} 
         onChange={(data) =>{
            setDate(data)
            props.getDateAndTime(data)
         }}
         minDate={new Date()} 
        showTimeSelect
        timeFormat="HH:mm"
        timeIntervals={15}
        timeCaption="time"
        dateFormat="MMMM d, yyyy h:mm aa"
         />
    );
}

export default Datepicker