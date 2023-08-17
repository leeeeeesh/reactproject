import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import styles from './header.module.css'
// import './header.css'

export default function Header() {


  // const navigate=useNavigate()



  const headerMap = [
    {
      index:0,
      path:'/info',
      text:'분양안내'
    },
    {
      index:1,
      path:'/clinic',
      text:'병원검색'
    },
    {
      index:2,
      path:'/product',
      text:'상품'
    },
    {
      index:3,
      path:'/event',
      text:'이벤트'
    },
  ]





  return (
    <div id={styles.header_wrap}>
      <header>
        <h1 id={styles.logo}>
          <Link to='/'>logo</Link>
          {/* <img src='./images/logo.png'/> */}
        </h1>

        <nav id={styles.mainmenu}>
          <h2 className='hidden'>메인메뉴</h2>
          <ul id={styles.mainmenu_list}>
            {/* <li>
              <Link to='/info'>분양안내</Link>
            </li>
            <li>
              <Link to='/search'>병원검색</Link>
            </li>
            <li>
              <Link to='/product'>상품</Link>
            </li>
            <li>
              <Link to='/event'>이벤트</Link>
            </li> */}

            {
              headerMap.map((item)=>(
                <li key={item.index}>
                  <Link to={item.path}>{item.text}</Link>
                </li>
              ))
            }
          </ul>
        </nav>
        
        {/* <button id={styles.login_btn} onClick={navigate('/login')}>
          <Link to='/login'>
            <i className="fa-regular fa-user"></i>
          </Link>
        </button> */}
        <button id={styles.login_btn}>
          <Link to='/login'>
            <i className="fa-regular fa-user"></i>
          </Link>
        </button>
      </header>
    </div>
  )
}
