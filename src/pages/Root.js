import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'
import Header from './Header'
import MainWrap from './MainWrap'

export default function Root() {
  return (
    <div>
      {/* <ul className='skipmenu_list'>
        <li></li>
      </ul> */}
      <Header/>
      <MainWrap>
        <Outlet/>
      </MainWrap>
      <Footer/>
    </div>
  )
}
