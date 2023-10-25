import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { DocumentData } from 'firebase/firestore'
import { getUserData } from '@/app/_services/user.service';
import {createAsyncThunk} from "@reduxjs/toolkit";


interface UserState {
  user: DocumentData | null,
  isLoading: boolean
  error: string,
}

const initialState: UserState = {
  user: null,
  isLoading: false,
  error: '',
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
      builder.addCase(fetchUser.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchUser.fulfilled, (state, action) => {
      state.user = action.payload,
      state.isLoading = false,
      state.error = ''
    });
    builder.addCase(fetchUser.rejected, (state, action: PayloadAction<any>) => {
      state.isLoading = false;
      state.error = action.payload 
    });
  }
})

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

export default userSlice.reducer