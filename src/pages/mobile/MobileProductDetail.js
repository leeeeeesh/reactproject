import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getProductDetail } from '../../api/firebase'
import Count from '../../components/count/Count'
import useProducts from '../../hooks/useProducts'
import regExp from '../../util/regExp'
import styles from './mobileproductdetail.module.css'

export default function MobileProductDetail() {
  
  const [moDetailCount, setMoDetailCount] = useState(1)

  const removeMoCount = ()=>{
    if(moDetailCount>1){
      setMoDetailCount(moDetailCount-1)
    }
  }

  const addMoCount = ()=>{
    setMoDetailCount(moDetailCount+1)
  }

  const { productId } = useParams()

  const [allProduct] = useProducts()

  const [productItem, setProductItem] = useState({})
  
  const [mobileSimilarMap,setMobileSimilarMap] = useState([])

  useEffect(()=>{
    getProductDetail(productId).then((res) => {
      setProductItem(res)

      const mobileSimilarItem = allProduct.filter((item)=>(item.category === res.category && item.id !== res.id))
      setMobileSimilarMap(mobileSimilarItem)
    })

  },[allProduct,productId])

  return (
    <>
      <div id={styles.mobiledetail_wrap}>
        <section id={styles.mobiledetail}>
          <h2 className='hidden'>모바일상품페이지</h2>
          <div id={styles.mobiledetail_img}>
            <img src={productItem.image}/>
          </div>

          <p className={styles.mobiledetail_category}>{productItem.category}</p>
          <p className={styles.mobiledetail_title}>{productItem.title}</p>
          
          <div className={styles.mobiledetail_text_wrap}>
            <p>{productItem.text}</p>
            <p><span>무료배송</span> (상품 19,800원 이상 구매 시)</p>
          </div>

          <p className={styles.mobiledetail_price}>{regExp.comma(productItem.price*moDetailCount)} 원</p>

          {/*  */}

          <div id={styles.buy_wrap}>
            <button id={styles.mobile_buy_heartbtn}>
              <i className="fa-solid fa-heart"></i>
            </button>
            
            <div id={styles.mobile_buy_count}>
              <button onClick={removeMoCount}>-</button>
              <p>{moDetailCount}</p>
              <button onClick={addMoCount}>+</button>
            </div>

            <button id={styles.mobile_buybtn}>구매하기</button>
          </div>
        </section>
      </div>

      <div id={styles.mobile_similar_wrap}>
        <section id={styles.mobile_similar}>
          <h2 className={styles.mobile_similar_titie}>관련상품목록</h2>

          <ul id={styles.mobile_similar_list}>
            {
              mobileSimilarMap.map((item)=>(
                <li>
                  <img src={item.image}/>
                </li>
              ))
            }
          </ul>

        </section>
      </div>

      <div id={styles.mobiledetail_explain_wrap}>
        <section id={styles.mobiledetail_explain}>
          <h2 className='hidden'>모바일 상품설명</h2>
          <img src={productItem.detailImg}/>
        </section>
      </div>
    </>
  )
}
