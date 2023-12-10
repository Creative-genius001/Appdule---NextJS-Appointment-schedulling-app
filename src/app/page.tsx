'use client'

import { useEffect } from 'react'
import { checkUserLoggedIn } from './services/auth.service'
import { useRouter } from 'next/navigation'


export default function Home() {
  const router = useRouter();

  useEffect(()=>{
    const isAuthenticated = checkUserLoggedIn();
    if(isAuthenticated){
      router.push('/home')
    }
    else{
      router.push('/auth/login')
    }
  })
  return ( <>
  </> )
}
