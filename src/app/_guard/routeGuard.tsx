import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react';

function RouteGuard({ children }: any){
         const router = useRouter();
         const getUserToken = async () => {
            const isAuthenticated = localStorage.getItem('utk');

            if (!isAuthenticated) {
                console.log('No token');
                return router.push('/auth/login');
            }
            };

            useEffect(() => {
              getUserToken();
            }, []);

            return children;
  }

export default RouteGuard;