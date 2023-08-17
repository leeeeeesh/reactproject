import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'
import Header from './Header'

export default function Root() {
  return (
    <div>
      {/* <ul className='skipmenu_list'>
        <li></li>
      </ul> */}
      <Header/>
      <Outlet/>
      <Footer/>
    </div>
  )
}
