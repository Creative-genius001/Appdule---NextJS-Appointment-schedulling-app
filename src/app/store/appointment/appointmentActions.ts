
import { fetchAppointments } from './appointmentSlice';
import { getUserData } from '@/app/_services/user.service';

export const fetchAppointmentData = (uid: string) => async (dispatch: any) => {
  try {
        const data = await getUserData(uid)

    if (data) {
      dispatch(fetchAppointments(data));
    }
  } catch (error) {
    console.error('Error fetching user data:', error);
  }
};
