import { redirect, useRouter } from 'next/navigation';
import React, { useEffect } from 'react';
import { checkUserLoggedIn } from '../_services/auth.service';


export default function routeGuard(Component: any) {
  return (
    function WithAuth(props: any) {
      const isAuthenticated = checkUserLoggedIn()
      console.log(isAuthenticated);

      useEffect(() => {
        if (!isAuthenticated) {
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