import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import {
  configureStore,
  createListenerMiddleware,
  TypedStartListening,
  TypedAddListener,
  ListenerEffectAPI,
  addListener,
  combineReducers,
} from '@reduxjs/toolkit'
import { appointmentSlice } from './appointment/appointmentSlice'
import { userSlice } from './user/userSlice'
import { authSlice } from './auth/authSlice'
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const listenerMiddlewareInstance = createListenerMiddleware({
  onError: () => console.error,
})

const persistConfig = {
  key: 'root',
  storage,
};

const rootReducer = combineReducers({
  auth: authSlice.reducer,           
  user: userSlice.reducer, 
  appointments: appointmentSlice.reducer,  
});

const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = configureStore({
  reducer: persistedReducer,
  // devTools: process.env.NODE_ENV !== "production",
  middleware: (gDM) => gDM().concat().prepend(listenerMiddlewareInstance.middleware),
})

const persistor = persistStore(store)

export { store, persistor }


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