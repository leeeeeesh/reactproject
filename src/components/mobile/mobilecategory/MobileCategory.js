import React from 'react'
import { Link, createSearchParams } from 'react-router-dom'
import styles from './mobilecategory.module.css'

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';

// import './styles.css';

// import required modules
import { FreeMode } from 'swiper/modules';

export default function MobileCategory() {

  const mobileCategoryMap = [
    { id: '001', text: '전체' },
    { id: '002', text: '사료' },
    { id: '003', text: '간식' },
    { id: '004', text: '위생' },
    { id: '005', text: '의약품' }
  ]

  return (
    <div id={styles.mobilecategory_wrap}>
      <section id={styles.mobilecategory}>
        <h2 className={styles.mobilecategory_titie}>CATEGORY</h2>

        {/* <ul id={styles.mobilecategory_list}>
          {
            mobileCategoryMap.map((item)=>(
              <li key={item.id}>
                <Link>{item.text}</Link>
              </li>
            ))
          }
        </ul> */}

        <Swiper
          slidesPerView={3.7}
          spaceBetween={10}
          freeMode={true}
          modules={[FreeMode]}
          className="mySwiper"
        >
          {
            mobileCategoryMap.map((item)=>(
              <SwiperSlide>
                <div className={styles.mobilecategory_list}>
                  <Link to={{pathname:'/product', search:`${createSearchParams({category: item.text})}`}}>{item.text}</Link>
                </div>
              </SwiperSlide>
            ))
          }
        </Swiper>
      </section>
    </div>
  )
}
