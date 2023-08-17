import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom'
import Count from '../components/count/Count'
import useProducts from '../hooks/useProducts'
import styles from './productdetail.module.css'
import regExp from '../util/regExp'
import { getProductDetail } from '../api/firebase'

export default function ProductDetail() {

  //const {productId} = useParams()

  // const [allProduct] = useProducts()


  const [price, setPrice]=useState(1)

  const addPrice = ()=>{
    setPrice(price+1)
  }

  const removePrice = ()=>{
    setPrice(price-1)
  }

  const {productId} = useParams()

  const [allProduct] = useProducts()//직접만든 훅

  const [productItem, setProductItem] = useState({})

  // const similarMap = allProduct.filter((item)=>(item.category===allProduct[`${productId}`].category && item.id !==allProduct[`${productId}`].id))
  
  const [similarMap, setSimilarMap] = useState([])

  
  

  useEffect(()=>{
    //const productItem = getProductDetail(productId)

    getProductDetail(productId).then((res)=>{  
      
      setProductItem(res)     // 주의 res.data 아님 


      const similarMap = allProduct.filter((item)=>(item.category===res.category && item.id !==res.id))
      //여기서 처음에 res.category 말고 productItem.category 로 했었는데 이러면 바뀐거를 가져오는게 아니고 밖에서 처음에 정해졌던것을 그대로 가져오는거라 바뀐값인 res를 써줘야한다. 그래야 클릭했을때 계속 바뀜
      //  &&item.id !==allProduct[`${productId}`].id
      setSimilarMap(similarMap)
    
    })    

    //setProductItem(productItem)
    // console.log(similarMap)

  },[allProduct, productId])
  // },[allProduct])



  const {pathname} = useLocation()

  useEffect(()=>{
    window.scrollTo(0,0)
  },[pathname])

  // console.log(allProduct[`${productId}`].id)

  // const similarMap = allProduct.filter((item)=>(item.category===allProduct[`${productId}`].category &&item.id !==allProduct[`${productId}`].id))

  const navigate = useNavigate()

  



  return (
    <>
      <div className={`subvisual_wrap ${styles.detail_visual}`}>
        <section className='subvisual'>
          <h2>상품</h2>
          <p>인기 판매 상품을 확인해 보세요.</p>
        </section>
      </div>

      <div id={styles.detail_wrap}>
        
         
            <section id={styles.detail}>
              <h2 className='hidden'>상품 상세페이지</h2>
              <div id={styles.detail_img}>
                <img src={productItem.image}/>
              </div>

              <div id={styles.detail_buy}>
                <p className={`${styles.detail_best} ${productItem.isBest === true && styles.on}`}>BEST</p>
                <p className={styles.detail_category}>{productItem.category}</p>
                <p className={styles.detail_title}>{productItem.title}</p>
                <p className={styles.detail_price}>{regExp.comma(productItem.price*price)}<span>원</span></p>

                <div className={styles.detail_text}>
                  <p>{productItem.text}</p>
                  <p className={styles.detail_delivery}><span>무료배송</span> &#40;상품 {regExp.comma(productItem.delivery)}원 이상 구매 시&#41;</p>
                </div>

                <div id={styles.buy_btn_wrap}>
                  <Count onAdd={addPrice} onRemove={removePrice}/>

                  <div id={styles.buy_btn}>
                    <button>구매하기</button>
                  </div>

                  <button id={styles.buy_heartbtn}>
                    <i className="fa-solid fa-heart"></i>
                  </button>
                </div>
              </div>
            </section>
          
        


        {/* <section id={styles.detail}>
          <h2 className='hidden'>상품 상세페이지</h2>
          <div id={styles.detail_img}>
            <img src='./images/item00.jpg'/>
          </div>

          <div id={styles.detail_buy}>
            <p className={styles.detail_category}>의약품</p>
            <p className={styles.detail_title}>TITLE TITLE TITLE</p>
            <p className={styles.detail_price}>1800<span>원</span></p>

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
        </section> */}
      </div>

      <div id={styles.similar_wrap}>
        <section id={styles.similar}>
          <h2>관련 상품 목록</h2>
          <ul id={styles.similar_list}>
            {

             

              similarMap.map((item)=>(
                <li key={item.id}>
                  <Link onClick={
                    ()=>{
                      navigate(`/product/${item.id}`)
                    }
                  }>
                    <img src={item.image}/>
                  </Link>
                </li>
              ))
            }
          </ul>
        </section>
      </div>

      <div id={styles.detail_content_wrap}>
        <section id={styles.detail_content}>
          <img src='/images/testcont.jpg'/>
        </section>
      </div>
    </>
  )
}





// 상품이미지 사용 링크

// https://www.coupang.com/vp/products/5625442322?itemId=9132535007&vendorItemId=76418550646&q=%EA%B3%A0%EC%8A%B4%EB%8F%84%EC%B9%98+%EC%82%AC%EB%A3%8C&itemsCount=36&searchId=659308a64857457da9e7d379e7b28406&rank=16&isAddedCart=



// https://www.coupang.com/vp/products/77909073?itemId=251822702&vendorItemId=3613783957&q=%EC%86%8C%EB%8F%99%EB%AC%BC+%EA%B0%84%EC%8B%9D&itemsCount=36&searchId=40490a11b3e94a488cb971e994eb2b79&rank=3&isAddedCart=



// https://www.coupang.com/vp/products/6865264940?itemId=16407275674&vendorItemId=83598370430&sourceType=srp_product_ads&clickEventId=a21b7ad1-0dc8-48c3-ab7c-224cbed2c061&korePlacement=15&koreSubPlacement=1&q=%EC%86%8C%EB%8F%99%EB%AC%BC+%ED%83%88%EC%B7%A8%EC%A0%9C&itemsCount=36&searchId=77edc19bf8f24e7887ad795b25ddffcc&rank=0&isAddedCart=



// https://www.coupang.com/vp/products/5398096672?itemId=8068900389&vendorItemId=75357354860&q=%EC%86%8C%EB%8F%99%EB%AC%BC+%EC%98%81%EC%96%91%EC%A0%9C&itemsCount=36&searchId=709d341da21b49a6bac22121dc8b5455&rank=12&isAddedCart=



// https://www.coupang.com/vp/products/25476012?itemId=99100671&vendorItemId=3181014563&q=%EA%B3%A0%EC%8A%B4%EB%8F%84%EC%B9%98+%EC%82%AC%EB%A3%8C&itemsCount=36&searchId=659308a64857457da9e7d379e7b28406&rank=6&isAddedCart=



// https://www.coupang.com/vp/products/6717925002?itemId=15617570955&vendorItemId=82835388101&q=%EA%B3%A0%EC%8A%B4%EB%8F%84%EC%B9%98+%EA%B0%84%EC%8B%9D&itemsCount=36&searchId=f7b7e5dee664401b9d72ae0658a759a8&rank=30&isAddedCart=



// https://www.coupang.com/vp/products/277044613?itemId=877558975&vendorItemId=5214116760&q=%EC%86%8C%EB%8F%99%EB%AC%BC+%EC%83%B4%ED%91%B8&itemsCount=36&searchId=b945ac21139242779b3ef6a0a00ed04e&rank=10&isAddedCart=




// https://www.coupang.com/vp/products/7212829114?itemId=18257864641&vendorItemId=85404437834&q=%EC%86%8C%EB%8F%99%EB%AC%BC+%EC%98%81%EC%96%91%EC%A0%9C&itemsCount=36&searchId=265921b87ab14cc6926e1ed2bfd1dfc3&rank=151&isAddedCart=



// https://www.coupang.com/vp/products/7031057194?itemId=17351925174&vendorItemId=84522243748&q=%EA%B3%A0%EC%8A%B4%EB%8F%84%EC%B9%98+%EC%82%AC%EB%A3%8C&itemsCount=36&searchId=659308a64857457da9e7d379e7b28406&rank=17&isAddedCart=




// https://www.coupang.com/vp/products/6734926986?itemId=15703021009&searchId=feed-783ae46ac6414cc0b397a84b6c5a9055-view_together_ads-P6734927293&vendorItemId=82917426701&sourceType=SDP_ADS&clickEventId=23ac6abf-de77-4d8a-9cae-4118596913c7&isAddedCart=



// https://www.coupang.com/vp/products/6429642054?itemId=13870382276&searchId=feed-ed56f2770a4547a18b33d8b266b904f5-view_together_ads-P5976717307&vendorItemId=81120260293&sourceType=SDP_ADS&clickEventId=0cca9531-5889-4ad5-8e2c-d1f7b2a2f26c&isAddedCart=




// https://www.coupang.com/vp/products/2156200884?itemId=3662407820&vendorItemId=71647832363&q=%EC%86%8C%EB%8F%99%EB%AC%BC+%EC%98%81%EC%96%91%EC%A0%9C&itemsCount=36&searchId=0a422f21dd524d88b7602ad517b55226&rank=267&isAddedCart=
