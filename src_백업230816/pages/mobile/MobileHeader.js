import React from 'react'
import { Link } from 'react-router-dom'
import styles from './mobileheader.module.css'

export default function MobileHeader() {
  return (
    <div id={styles.mobile_header_wrap}>
      <header>
        <h1 className='hidden'>모바일헤더</h1>
        <p id={styles.mobile_menu}>
          <img src='./images/mobile/mobile_menu.png'/>
        </p>

        <Link id={styles.mobile_header_login}><i className="fa-regular fa-user"></i></Link>
      </header>
    </div>
  )
}
