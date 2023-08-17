import React from 'react'
import styles from './mainvisual.module.css'
import { Link } from 'react-router-dom'

// swiper
import { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import './styles.css';

export default function MainVisual() {
  return (
    <div id={styles.mainvisual_wrap}>
      <section id={styles.mainvisual}>
        <div id={styles.mainvisual_title_wrap}>
          <h2>WELCOME TO OOO</h2>
          <Link>JOIN</Link>
        </div>
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          loop={true}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          <SwiperSlide></SwiperSlide>
          <SwiperSlide></SwiperSlide>
          <SwiperSlide></SwiperSlide>
        </Swiper>
      </section>
    </div>
  )
}
