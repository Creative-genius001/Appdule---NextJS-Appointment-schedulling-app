import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import {
  configureStore,
  createListenerMiddleware,
  TypedStartListening,
  TypedAddListener,
  ListenerEffectAPI,
  addListener,
} from '@reduxjs/toolkit'
import { appointmentSlice } from './appointment/appointmentSlice'
import { userSlice } from './user/userSlice'
import { authSlice } from './auth/authSlice'

const listenerMiddlewareInstance = createListenerMiddleware({
  onError: () => console.error,
})

const store = configureStore({
  reducer: {
    appointments: appointmentSlice.reducer,
    user: userSlice.reducer,
    auth: authSlice.reducer,
  },
  // devTools: process.env.NODE_ENV !== "production",
  middleware: (gDM) => gDM().concat().prepend(listenerMiddlewareInstance.middleware),
})

export { store }


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export type AppListenerEffectAPI = ListenerEffectAPI<RootState, AppDispatch>

export type AppStartListening = TypedStartListening<RootState, AppDispatch>
export type AppAddListener = TypedAddListener<RootState, AppDispatch>

export const startAppListening =
  listenerMiddlewareInstance.startListening as AppStartListening
export const addAppListener = addListener as AppAddListener

export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector