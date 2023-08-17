import axios, { all } from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import useProducts from '../../hooks/useProducts';
import styles from './mainitem.module.css'

export default function MainItem() {

  // const [allProduct,setAllProduct] = useState([]);

  // useEffect(()=>{
  //   axios.get('./data/product.json').then((res)=>{
  //     setAllProduct(res.data)
  //   })
  // }, [])
  const [allProduct] = useProducts()//직접만든 훅

  const [bestItems, setBestItems] = useState([])

  // 위에 useEffect랑 같이해도되는데 같이안하고 따로하는이유는
  useEffect(()=>{
    // json파일에 isBest가 true인애들만 가져오겠다는뜻
    // allProduct.filter((item)=>(item.isBest===true))
    setBestItems(allProduct.filter((item)=>(item.isBest===true)));
  },[allProduct]) //allProduct가 바뀔때마다 bestitem을 뽑아내라는뜻

  const navigate = useNavigate()

  return (
    <div id={styles.mainitem_wrap}>
      <section id={styles.mainitem}>
        <h2 className='maintitle'>BEST ITEM</h2>
        <ul id={styles.mainitem_list}>
          {
            bestItems.map((item)=>(
              <li key={item.id}>
                <Link onClick={()=>{navigate(`/product/${item.id}`)}}>
                  <div className={styles.mainitem_img}>
                    <img src={item.image} />
                  </div>
                  <p className={styles.mainitem_category}>{item.category}</p>
                  <p className={styles.mainitem_title}>{item.title}</p>
                  <p className={styles.mainitem_text}>{item.price} <span>원</span></p>
                </Link>
              </li>
            ))
          }

          {/* <li>
            <Link>
              <div className={styles.mainitem_img}>
                <img src='./images/item00.jpg' />
              </div>
              <p className={styles.mainitem_title}>Title</p>
              <p className={styles.mainitem_text}>text text text text text</p>
            </Link>
          </li>

          <li>
            <Link>
              <div className={styles.mainitem_img}>
                <img src='./images/item01.jpg' />
              </div>
              <p className={styles.mainitem_title}>Title</p>
              <p className={styles.mainitem_text}>text text text text text</p>
            </Link>
          </li>

          <li>
            <Link>
              <div className={styles.mainitem_img}>
                <img src='./images/item02.jpg' />
              </div>
              <p className={styles.mainitem_title}>Title</p>
              <p className={styles.mainitem_text}>text text text text text</p>
            </Link>
          </li>

          <li>
            <Link>
              <div className={styles.mainitem_img}>
                <img src='./images/item03.jpg' />
              </div>
              <p className={styles.mainitem_title}>Title</p>
              <p className={styles.mainitem_text}>text text text text text</p>
            </Link>
          </li>

          <li>
            <Link>
              <div className={styles.mainitem_img}>
                <img src='./images/item04.jpg' />
              </div>
              <p className={styles.mainitem_title}>Title</p>
              <p className={styles.mainitem_text}>text text text text text</p>
            </Link>
          </li>

          <li>
            <Link>
              <div className={styles.mainitem_img}>
                <img src='./images/item05.jpg' />
              </div>
              <p className={styles.mainitem_title}>Title</p>
              <p className={styles.mainitem_text}>text text text text text</p>
            </Link>
          </li>

          <li>
            <Link>
              <div className={styles.mainitem_img}>
                <img src='./images/item06.jpg' />
              </div>
              <p className={styles.mainitem_title}>Title</p>
              <p className={styles.mainitem_text}>text text text text text</p>
            </Link>
          </li>

          <li>
            <Link>
              <div className={styles.mainitem_img}>
                <img src='./images/item07.jpg' />
              </div>
              <p className={styles.mainitem_title}>Title</p>
              <p className={styles.mainitem_text}>text text text text text</p>
            </Link>
          </li> */}
        </ul>

        <Link id={styles.mainitem_more}>더보기</Link>
      </section>
    </div>
  )
}
