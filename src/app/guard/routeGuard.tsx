import { redirect } from 'next/navigation';
import React, { useEffect } from 'react';
import { checkUserLoggedIn } from '../services/auth.service';
import { useAppDispatch } from '../store/store';
import { reset } from '../store/auth/authSlice';



export default function routeGuard(Component: any) {
  
  return (
    function WithAuth(props: any) {
      const isAuthenticated = checkUserLoggedIn()
      const dispatch = useAppDispatch()
      useEffect(() => {
        if (!isAuthenticated) {
          dispatch(reset())
          return redirect('/auth/login')
        }
      },)

      if (!isAuthenticated) {
        return null;
      }

      return <Component {...props} />
    }
  )
}