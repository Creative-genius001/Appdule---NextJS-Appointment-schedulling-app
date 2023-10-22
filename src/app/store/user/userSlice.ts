import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { DocumentData } from 'firebase/firestore'
import { fetchUser } from './userAction'


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
  extraReducers: {
    [fetchUser.fulfilled.type]: (state, action: PayloadAction<DocumentData>) => {
      state.user = action.payload,
      state.isLoading = false,
      state.error = '' 
    },
    [fetchUser.pending.type]: (state, action: PayloadAction<DocumentData>) => {
      state.isLoading = true
    },
    [fetchUser.rejected.type]: (state, action: PayloadAction<string>) => {
      state.isLoading = false,
      state.error = action.payload 
    }
  }
})

export default userSlice.reducer