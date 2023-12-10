import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../store'
import { AppointmentModel } from '@/app/models/appointment.model'
import { createAppointmentEffect, fetchAppointments } from './appointmentActions'


interface AppointmentState {
  appointment: AppointmentModel[] | null,
  error: string,
  isLoading: boolean
}

const initialState: AppointmentState = {
  appointment: null,
  error: '',
  isLoading: false
}

export const appointmentSlice = createSlice({
  name: 'appointment',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchAppointments.fulfilled.type]: (state, action: PayloadAction<AppointmentModel[]>) => {
      state.appointment = action.payload,
      state.isLoading = false,
      state.error = '' 
    },
    [fetchAppointments.pending.type]: (state) => {
      state.isLoading = true
    },
    [fetchAppointments.rejected.type]: (state, action: PayloadAction<string>) => {
      state.isLoading = false,
      state.error = action.payload 
    },
    [createAppointmentEffect.fulfilled.type]: (state) => {
      state.isLoading = false,
      state.error = '' 
    },
    [createAppointmentEffect.pending.type]: (state) => {
      state.isLoading = true,
      state.error = '' 
    },
    [createAppointmentEffect.rejected.type]: (state, action: PayloadAction<string>) => {
      state.isLoading = false,
      state.error = action.payload 
    },
  }
})

export const selectAppointment = (state: RootState) => state.appointments.appointment;

export default appointmentSlice.reducer