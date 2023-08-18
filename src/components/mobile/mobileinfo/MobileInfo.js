import React from 'react'
import { Link } from 'react-router-dom'
import styles from './mobileinfo.module.css'

export default function MobileInfo() {
  return (
    <div id={styles.mobileinfo_wrap}>
      <section id={styles.mobileinfo}>
        <h2 className={styles.mobileinfo_titie}>분양안내</h2>
        <Link className={styles.mobileinfo_more}>더보기 <i className="fa-solid fa-angle-right"></i></Link>
        <p>4~8주 도치 분양합니다.매주 분양하는 도치들의 종자/성별이 다르기때문에 고객센터로 문의후 방문 부탁드립니다.
            택배분양은 하지않으며 매장 방문분양만 가능합니다.
            분양교육후 	&#40;핸들링방법/배변훈련법/목욕법 등&#41; 분양합니다.
        </p>
      </section>
    </div>
  )
}
