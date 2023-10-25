
import { DocumentData } from 'firebase/firestore';
import { getUserData } from '@/app/_services/user.service';
import {createAsyncThunk} from "@reduxjs/toolkit";

export const fetchUser = createAsyncThunk('user/fetchUser', async(uid: string, thunkAPI) =>{
  const user = localStorage.getItem('utk')
  if(!user){
    try {
    const response = await getUserData(uid)
    localStorage.setItem('utk', JSON.stringify(response));
    return response;
  } catch (error) {
    return thunkAPI.rejectWithValue('error in fetching user')
  }  
  }
  const USER = JSON.parse(user)
  return USER;
 
})