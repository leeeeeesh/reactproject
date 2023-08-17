import React, { useState } from 'react'
import Count from '../components/count/Count'
import styles from './productdetail.module.css'

export default function ProductDetail() {
  const [price, setPrice]=useState(1)

  const addPrice = ()=>{
    setPrice(price+1)
  }

  const removePrice = ()=>{
    setPrice(price-1)
  }

  return (
    <>
      <div className='subvisual_wrap'>
        <section className='subvisual'>
          <h2>상품</h2>
        </section>
      </div>

      <div id={styles.detail_wrap}>
        <section id={styles.detail}>
          <h2 className='hidden'>상품 상세페이지</h2>
          <div id={styles.detail_img}>
            <img src='./images/item00.jpg'/>
          </div>

          <div id={styles.detail_buy}>
            <p className={styles.detail_category}>의약품</p>
            <p className={styles.detail_title}>TITLE TITLE TITLE</p>
            {/* <p className={styles.detail_price}>1,800 원</p> */}
            <p className={styles.detail_price}>{1800 * price}<span>원</span></p>

            <div className={styles.detail_text}>
              <p>Text Text Text Text Text Text Text Text Text Text</p>
            </div>

            <div id={styles.buy_btn_wrap}>
              <Count onAdd={addPrice} onRemove={removePrice}/>
              <div id={styles.buy_btn}>
                <button>구매하기</button>
              </div>
            </div>
          </div>
        </section>
      </div>

      <div id={styles.detail_content_wrap}>
        <section id={styles.detail_content}></section>
      </div>
    </>
  )
}
