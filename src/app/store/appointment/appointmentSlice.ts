import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../store'
import { AppointmentModel } from '@/app/models/appointment.model'
import { DocumentData } from 'firebase/firestore'


interface AppointmentState {
  appointment: DocumentData | null,
  error: '',
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
  reducers: {
    fetchAppointments: (state, action: PayloadAction<DocumentData>) => {
      state.isLoading = true;
      state.appointment = action.payload
    }
  },
})

export const { fetchAppointments } = appointmentSlice.actions

export const selectAppointment = (state: RootState) => state.appointments.appointment;

export default appointmentSlice.reducer