import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import useProducts from '../../../hooks/useProducts'
import styles from './mobileitem.module.css'

export default function MobileItem() {

  const [allProduct] = useProducts()

  const [mobileBestItems, setMobileBestItems] = useState([])

  const navigate = useNavigate()

  useEffect(()=>{
    // const filteredItems=allProduct.filter((item, index)=>(item.isBest===true && index < 2))
    // 위에한것처럼 지금은 그냥 순서대로 꺼내는거라 index로 해도 상관없는데
    // 아래처럼 splice 을 쓰면 위에 index처럼 앞에 순서대로 끌어오는게아니고 아무데서나 다 잘라서 끌어올수있어서 더 좋다
    const filteredItems=allProduct.filter((item)=>(item.isBest===true))

    filteredItems.splice(2)

    setMobileBestItems(filteredItems)

  },[allProduct])


  return (
    <div id={styles.mobileitem_wrap}>
      <section id={styles.mobileitem}>
        <h2 className={styles.mobileitem_titie}>BEST ITEM</h2>
        <Link className={styles.mobileitem_more}>더보기 <i className="fa-solid fa-angle-right"></i></Link>

        <ul id={styles.mobileitem_list}>
          {
            mobileBestItems.map((item)=>(
              <li>
                <Link onClick={()=>{navigate(`/product/${item.id}`)}}>
                  <div className={styles.mobileitem_img}>
                    <img src={item.image}/>
                  </div>

                  <p className={styles.mobileitem_category}>{item.category}</p>
                  <p className={styles.mobileitem_title}>{item.title}</p>
                  <p className={styles.mobileitem_price}>{item.price} 원</p>
                </Link>
              </li>
            ))
          }
        </ul>
      </section>
    </div>
  )
}
