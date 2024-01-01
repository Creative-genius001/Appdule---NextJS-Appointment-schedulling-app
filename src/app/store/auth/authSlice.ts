import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import * as Auth from '@/app/services/auth.service'
import handleError from "@/app/utils/errorhandler";
import { createUser } from "@/app/services/user.service";


export interface AuthState {
  authToken: string | null;
  status: boolean,
  uid: string | null,
  loading: boolean;
  error: string
}


const initalState: AuthState = {
  authToken: null,
  status: false,
  uid: null,
  loading: false,
  error: "",
};


export const authSlice = createSlice({
  name: "auth",
  initialState: initalState,
  reducers: {
    reset: () => initalState
  },

  extraReducers: (builder) => {
     builder.addCase(register.pending, (state) => {
      state.loading = true;
      state.error = ''
    });
    builder.addCase(register.fulfilled, (state) => {
      state.loading = false;
      state.status = true;
    });
    builder.addCase(register.rejected, (state, action: PayloadAction<any>) => {
      state.loading = false;
      state.error = action.payload;
    });
    builder.addCase(login.pending, (state) => {
      state.loading = true;
      state.error = ''
    });
    builder.addCase(login.fulfilled, (state, action) => {
      state.loading = false;
      state.status = true;
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

export const register = createAsyncThunk(
  "auth-register",
  async (formData: {email: string, password: string, firstName: string, lastName: string}, thunkAPI) => {
    try {
        const response = await Auth.Signup(formData.email, formData.password)
        if(!response){
            return thunkAPI.rejectWithValue("Unknown error occurred");
        }
        const User = {
            user_id: response.user.uid,
            firstName: formData.firstName,
            lastName: formData.lastName,
            email: response.user.email,
            updatedAt: new Date().toISOString(),
            createdAt: new Date().toISOString()
        }
        await createUser(User)
        return null;
    } catch (error: any) {
        const errorMessgae = handleError(error)
        return thunkAPI.rejectWithValue(errorMessgae);
    }
  }
);

export const { reset } = authSlice.actions;

export default authSlice.reducer;