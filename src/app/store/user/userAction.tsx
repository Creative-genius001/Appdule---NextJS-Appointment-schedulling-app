
import { DocumentData } from 'firebase/firestore';
import { fetchUser } from './userSlice';
import { getUserData } from '@/app/_services/user.service';
import { useAppDispatch } from '../store';

export const fetchUserData = (user: DocumentData) => {
    const dispatch =  useAppDispatch()
    console.log(user)
    if (user) {
      return dispatch(fetchUser(user));
    }
};
