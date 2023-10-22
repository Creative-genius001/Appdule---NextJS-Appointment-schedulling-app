
import { DocumentData } from 'firebase/firestore';
import { getUserData } from '@/app/_services/user.service';
import {createAsyncThunk} from "@reduxjs/toolkit";

export const fetchUser = createAsyncThunk('user/fetchUser', async(uid: string, thunkAPI) =>{
  try {
    const response = await getUserData(uid)
    localStorage.setItem('utk', JSON.stringify(response));
    return response;
  } catch (error) {
    return thunkAPI.rejectWithValue('error in fetching user')
  }
})