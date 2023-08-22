import React from 'react'
import { Link } from 'react-router-dom'

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, Pagination } from 'swiper/modules';
import './mobilevisualslide.css';


import styles from './mobilevisual.module.css'

export default function MobileVisual() {

  return (
    <div id={styles.mobilevisual_wrap}>
      <section id={styles.mobilevisual} className="mobilevisual">
        <div id={styles.mobilevisual_title_wrap}>
          <h2>WELCOME TO OOO</h2>
          <Link>JOIN</Link>
        </div>

        {/* <div id={styles.mobilevisual_slide_wrap}></div> */}

        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          loop={true}
          // autoplay={{
          //   delay: 3000,
          //   disableOnInteraction: false,
          // }}
          pagination={{
            clickable: true,
          }}
          modules={[Autoplay, Pagination]}
          className='mySwiper'
        >
          <SwiperSlide><div className={styles.mainvisual_img01}></div></SwiperSlide>
          <SwiperSlide><div className={styles.mainvisual_img02}></div></SwiperSlide>
          <SwiperSlide><div className={styles.mainvisual_img03}></div></SwiperSlide>
        </Swiper>

      </section>
    </div>
  )
}
