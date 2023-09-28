import * as React from 'react';
import dayjs, { Dayjs } from 'dayjs';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';

function Datepicker() {

    const [date, setDate] = React.useState<string>('');

    return(
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoContainer components={['DatePicker']}>
                <MobileDatePicker
                    defaultValue={dayjs(new Date())}
                    sx={{width: '100%', borderColor: 'red'}}
                    onChange={(newValue: any) => {
                        newValue = dayjs(newValue).format('DD/MM/YYYY')
                        setDate(newValue)
                        console.log(date)
                    }}
                />
            </DemoContainer>
        </LocalizationProvider>
    );
}

export default Datepicker