import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../store'
import { DocumentData } from 'firebase/firestore'
import { User } from '@/app/models/user.model'


interface UserState {
  user: DocumentData | null,
  error: '',
}

const initialState: UserState = {
  user: null,
  error: '',
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    fetchUser: (state, action: PayloadAction<DocumentData>) => {
      state.user = action.payload
    }
  },
})

export const { fetchUser } = userSlice.actions

// export const selectUser = (state: RootState) => state.user.user;

export default userSlice.reducer