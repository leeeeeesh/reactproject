import React from 'react'
import { Outlet } from 'react-router-dom'
import MobileFooter from './MobileFooter'
import MobileHeader from './MobileHeader'

export default function MobileRoot() {
  return (
    <div>
      <MobileHeader/>
      <Outlet/>
      <MobileFooter/>
    </div>
  )
}
