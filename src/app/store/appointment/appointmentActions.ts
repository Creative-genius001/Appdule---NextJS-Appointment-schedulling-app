import {createAsyncThunk} from "@reduxjs/toolkit";
import { getAppointments } from '@/app/services/appointment.service';

export const fetchAppointments = createAsyncThunk('appointment/fetchAppointments', async(uid: string, thunkAPI) =>{
  try {
    const response = await getAppointments(uid)
    console.log(response)
    return response;
  } catch (error) {
    return thunkAPI.rejectWithValue('error in fetching appointments')
  }
})
