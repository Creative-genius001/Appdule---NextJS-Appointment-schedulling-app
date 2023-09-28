import * as React from 'react';
import dayjs, { Dayjs } from 'dayjs';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { MobileTimePicker } from '@mui/x-date-pickers/MobileTimePicker';

function Timepicker() {

    const [time, setTime] = React.useState('')
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoContainer components={['MobileTimePicker']}>
                <MobileTimePicker
                    defaultValue={dayjs(new Date())}
                    sx={{ width: '100%'}}
                    onChange={(newValue: any) => {
                        newValue = dayjs(newValue).format('h:mm A')
                        setTime(newValue)
                        console.log(newValue)
                    }}
                />
            </DemoContainer>
    </LocalizationProvider>
  )
}

export default Timepicker