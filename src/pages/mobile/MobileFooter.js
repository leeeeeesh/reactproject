import React from 'react'
import styles from './mobilefooter.module.css'

export default function MobileFooter() {
  return (
    <div id={styles.mobile_footer_wrap}>
      <footer>
        <h2 className='hidden'>하단영역</h2>

        <div id={styles.mobile_footer_sns}>
          <h3 className='hidden'>SNS</h3>
          <img src='./images/logo.png' alt='로고이미지'/>

          <ul id={styles.mobile_sns_list}>
            <li><i className="fa-brands fa-instagram"></i></li>
            <li><i className="fa-brands fa-square-facebook"></i></li>
            <li><i className="fa-brands fa-twitter"></i></li>
          </ul>
        </div>

        <div id={styles.mobile_footer_contact}>
          <h3>Contact Us</h3>
          
          <ul>
            <li>ddbdochi@dochi.co.kr</li>
            <li>#129, Okhyeon-ro, Nam-gu, Ulsan Metrop olitan City, 
                802, Ulsan Venture Building</li>
            <li>1-800-123-1234</li>
          </ul>
        </div>
      </footer>
    </div>
  )
}
