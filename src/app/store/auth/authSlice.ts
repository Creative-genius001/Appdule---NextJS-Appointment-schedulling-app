import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import * as Auth from '@/app/_services/auth.service'
import handleError from "@/app/utils/errorhandler";


export interface AuthState {
  authToken: string | null;
  uid: string | null,
  loading: boolean;
  error: string
}


const initalState: AuthState = {
  authToken: null,
  uid: null,
  loading: false,
  error: "",
};


export const authSlice = createSlice({
  name: "auth",
  initialState: initalState,
  reducers: {},

  extraReducers: (builder) => {
    builder.addCase(login.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(login.fulfilled, (state, action) => {
      state.loading = false;
      state.authToken = action.payload.accessToken;
      state.uid = action.payload.uid;
    });
    builder.addCase(login.rejected, (state, action: PayloadAction<any>) => {
      state.loading = false,
      state.error = action.payload;
    });
  },
});

export const login = createAsyncThunk(
  "auth-login",
  async (formData: {email: string, password: string}, thunkAPI) => {
    try {
        const response = await Auth.Login(formData.email, formData.password)
        if(!response){
            return thunkAPI.rejectWithValue("Unknown error occurred");
        }
        const uid = response.uid
        const accessToken = response.accessToken
        return {
            uid,
            accessToken
        };
    } catch (error: any) {
        const errorMessgae = handleError(error)
        return thunkAPI.rejectWithValue(errorMessgae);
    }
  }
);

export default authSlice.reducer;