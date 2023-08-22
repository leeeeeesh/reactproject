import React, { useEffect, useState } from 'react'
import styles from './mobileproduct.module.css'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import useProducts from '../../hooks/useProducts'

import { Swiper, SwiperSlide } from 'swiper/react';



import 'swiper/css';
import 'swiper/css/free-mode';

// import './styles.css';

import { FreeMode } from 'swiper/modules';

export default function MobileProduct() {
  const mobilecategorys = [
    { id: '001', text: '전체' },
    { id: '002', text: '사료' },
    { id: '003', text: '간식' },
    { id: '004', text: '위생' },
    { id: '005', text: '의약품' }
  ]

  const [allProduct] = useProducts()

  const navigate = useNavigate()

  const [selectCategory,setSelectCategory] = useState(loadData())
  const [mobileProductItem,setMobileProductItem] = useState([])
  const [mobileWeeklyItem, setMobileWeeklyItem] = useState([])


  useEffect(()=>{
    //카테고리 데이터를 받아와서 저장
    localStorage.setItem('cate',JSON.stringify(selectCategory))
  },[selectCategory])

  function loadData(){
    //카테고리에 저장해놓은 데이터를 만든 변수에 넣고
    const data = localStorage.getItem('cate')
    return data ? JSON.parse(data) : mobilecategorys[0].text
  }

  useEffect(()=>{
    if(selectCategory==='전체'){
      setMobileProductItem(allProduct)
    }else{
      const aaab = allProduct.filter((item)=>(item.category===selectCategory))
      setMobileProductItem(aaab)
    }

  },[selectCategory,allProduct])

  const {search} = useLocation();

  // console.log(search)

  useEffect(()=>{
    if(search){
      const test = new URLSearchParams(search).get('category')

      if(test){
        setSelectCategory(test)
      }
    }

    window.scrollTo(0,0)
  },[search])

  useEffect(()=>{
    setMobileWeeklyItem(allProduct.filter((item)=>(item.isWeekly === true)))
  },[allProduct])

  

  return (
    <>
      <div id={styles.mobileproduct_wrap}>
        <section id={styles.mobileproduct}>
          <h2 className={styles.mobile_subpage_title}>상품</h2>
          <p className={styles.mobile_subpage_text}>인기 판매 상품을 확인해 보세요.</p>

          <p className={styles.mobile_subpage_sub_title}>판매상품목록</p>

          <div id={styles.mobileproduct_category_list}>
            <Swiper
              slidesPerView={3.7}
              spaceBetween={10}
              freeMode={true}
              modules={[FreeMode]}
              className="mySwiper"
            >
              {
                mobilecategorys.map((item) => (
                  <SwiperSlide key={item.id}>
                    <div className={`${styles.mobileproduct_category_cont} ${selectCategory===item.text ? styles.selected : ''}`} onClick={()=>{
                      setSelectCategory(item.text)
                    }}>
                      {item.text}
                    </div>
                  </SwiperSlide>
                ))
              }
            </Swiper>
          </div>

          <ul id={styles.mobileproduct_list}>
            {
              mobileProductItem.map((item) => (
                <li key={item.id}>
                  <Link onClick={() => { navigate(`/product/${item.id}`) }}>
                    <div className={styles.mobileproduct_img}>
                      <img src={item.image} />
                    </div>

                    <p className={styles.mobileproduct_category}>{item.category}</p>
                    <p className={styles.mobileproduct_title}>{item.title}</p>
                    <p className={styles.mobileproduct_price}>{item.price} 원</p>
                  </Link>
                </li>
              ))
            }
          </ul>

          <ul id={styles.mobileproduct_num}>
            <li className={styles.selected}>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
            <li>5</li>
          </ul>
        </section>
      </div>

      <div id={styles.mobileproduct_banner}></div>

      <div id={styles.mobile_weekly_wrap}>
        <section id={styles.mobile_weekly}>
          <h2 className={styles.mobile_weekly_title}>이번주 인기 상품</h2>

          <ul id={styles.mobile_weekly_list}>
            {
              mobileWeeklyItem.map((item)=>(
                <li onClick={() => { navigate(`/product/${item.id}`) }}>
                  <img src={item.image}/>
                  <div>
                    <p>{item.title}</p>
                    <p>{item.price}원</p>
                  </div>
                </li>
              ))
            }
          </ul>
        </section>
      </div>
    </>
  )
}
