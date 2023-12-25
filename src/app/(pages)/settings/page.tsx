'use client'

import * as React from 'react'
import { useSelector } from 'react-redux'
import { RootState, useAppDispatch } from '@/app/store/store'
import routeGuard from '@/app/guard/routeGuard'
import Navbar from '@/app/components/navbar'
import '../../styles/setting.css'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'


function Page() {
  const router = useRouter()
  React.useEffect(()=> {
    router.replace('/settings/profile')
  })

  return (
    <>
    </>
  )
}

export default routeGuard(Page);