import React from 'react'
import { Link } from 'react-router-dom'
import styles from './footer.module.css'

export default function Footer() {
  const quickMap = [
    {
      index:0,
      path:'/info',
      text:'분양안내'
    },
    {
      index:1,
      path:'/search',
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
    <div id={styles.footer_wrap}>
      <footer>
        <h2 className='hidden'>하단영역</h2>

        <div id={styles.footer_sns}>
          <h3 className='hidden'>SNS</h3>
          <img src='/images/logo.png'/>
          <ul id={styles.footer_sns_list}>
            <li><i className="fa-brands fa-instagram"></i></li>
            <li><i className="fa-brands fa-square-facebook"></i></li>
            <li><i className="fa-brands fa-twitter"></i></li>
          </ul>
        </div>

        <div id={styles.footer_contact}>
          <h3>Contact Us</h3>
          <ul id={styles.footer_contact_list}>
            <li>ddbdochi@dochi.co.kr</li>
            <li>#129, Okhyeon-ro, Nam-gu, Ulsan Metrop olitan City, 802, Ulsan Venture Building</li>
            <li>1-800-123-1234</li>
          </ul>
        </div>

        <div id={styles.footer_link}>
          <h3>Quick Link</h3>
          <ul id={styles.footer_link_list}>
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
              quickMap.map((item)=>(
                <li key={item.index}>
                  <Link to={item.path}>{item.text}</Link>
                </li>
              ))
            }
          </ul>
        </div>
      </footer>
    </div>
  )
}
