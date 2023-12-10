import {createAsyncThunk} from "@reduxjs/toolkit";
import { getAppointments, createAppointment } from '@/app/services/appointment.service';
import { AppointmentRequest } from "@/app/models/appointment.model";

export const fetchAppointments = createAsyncThunk('appointment/fetchAppointments', async(uid: string, thunkAPI) =>{
  try {
    const response = await getAppointments(uid)
    console.log(response)
    return response;
  } catch (error) {
    return thunkAPI.rejectWithValue('error in fetching appointments')
  }
})

export const createAppointmentEffect = createAsyncThunk('appointment/createAppointment', async(data: AppointmentRequest, thunkAPI) =>{
  try {
    const response = await createAppointment(data)
    return response;
  } catch (error) {
    return thunkAPI.rejectWithValue('An error occcured try again')
  }
})
