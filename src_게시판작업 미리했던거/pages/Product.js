import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import styles from './product.module.css'

export default function Product() {
  // 함수일때 ㄴㄴ
  // 변수로 사용할때만 useEffect를 사용하면됨

  const allCategory = [
    {
      index:0,
      menu:"전체"
    },
    {
      index:1,
      menu:"사료"
    },
    {
      index:2,
      menu:"간식"
    },
    {
      index:3,
      menu:"위생"
    },
    {
      index:4,
      menu:"의약품"
    },
  ]

  const [selectCategory,setSelectCategory] = useState('전체')

  const changeCategory = (test)=>{
    setSelectCategory((prev)=>(test))
  }

  const [allProduct, setAllProduct]= useState([])

  useEffect(()=>{
    axios.get('./data/product.json').then((res)=>{
      setAllProduct(res.data)
      // console.log(allProduct)
    })
  },[])

  const filter = ddd(allProduct,selectCategory)
  
  function ddd(allProduct,selectCategory){
    if(selectCategory==='전체'){
      return allProduct;
    }else{
      return(
        allProduct.filter((item)=>(item.category===selectCategory))
      )
    }
  }

  return (
    <>
      <div className='subvisual_wrap'>
        <section className='subvisual'>
          <h2>상품</h2>
        </section>
      </div>

      <div id={styles.product_wrap}>
        <section id={styles.product}>
          {/* <h2 className='hidden'>판매상품목록</h2> */}
          <h2 className='maintitle'>판매상품목록</h2>
          <ul id={styles.product_category}>
            
            {
              allCategory.map((item)=>(
                <li key={item.index}>
                  <Link className={`${selectCategory===item.menu&&styles.selected}`} onClick={()=>{
                    changeCategory(item.menu)
                  }}>{item.menu}</Link>
                </li>
              ))
            }

            {/* <li>
              <Link className={styles.selected}>전체</Link>
            </li>

            <li>
              <Link>할인</Link>
            </li>
            
            <li>
              <Link>사료</Link>
            </li>
            
            <li>
              <Link>간식</Link>
            </li>
            
            <li>
              <Link>위생</Link>
            </li>
            
            <li>
              <Link>의약품</Link>
            </li> */}
          </ul>

          <ul id={styles.product_list}>
            
            {
              // selectCategory==="전체"?
              // allProduct.map((item)=>(
              //   <li key={item.id}>
              //     <Link>
              //       <div className={styles.product_list_img}>
              //         <img src={item.image}/>
              //       </div>
              //       <p className={styles.product_list_category}>{item.category}</p>
              //       <p className={styles.product_list_title}>{item.title}</p>
              //       <p className={styles.product_list_text}>{item.price}</p>
              //     </Link>
              //   </li>
              // ))
              // :<div>test</div>

              // allProduct.map((item)=>(
              filter.map((item)=>(
                <li key={item.id}>
                  <Link to='/productdetail'>
                    <div className={styles.product_list_img}>
                      <img src={item.image}/>
                    </div>
                    <p className={styles.product_list_category}>{item.category}</p>
                    <p className={styles.product_list_title}>{item.title}</p>
                    <p className={styles.product_list_text}>{item.price}</p>
                  </Link>
                </li>
              ))

            }


            {/* <li>
              <Link to='/productdetail'>
                <div className={styles.product_list_img}>
                  <img src="./images/item00.jpg"/>
                </div>
                <p className={styles.product_list_category}>의약품</p>
                <p className={styles.product_list_title}>TITLETITLETITLETITLE</p>
                <p className={styles.product_list_text}>1,800원</p>
              </Link>
            </li>

            <li>
              <Link>
                <div className={styles.product_list_img}>
                  <img src="./images/item01.jpg"/>
                </div>
                <p className={styles.product_list_category}>의약품</p>
                <p className={styles.product_list_title}>TITLETITLETITLETITLE</p>
                <p className={styles.product_list_text}>1,800원</p>
              </Link>
            </li>

            <li>
              <Link>
                <div className={styles.product_list_img}>
                  <img src="./images/item02.jpg"/>
                </div>
                <p className={styles.product_list_category}>의약품</p>
                <p className={styles.product_list_title}>TITLETITLETITLETITLE</p>
                <p className={styles.product_list_text}>1,800원</p>
              </Link>
            </li>

            <li>
              <Link>
                <div className={styles.product_list_img}>
                  <img src="./images/item03.jpg"/>
                </div>
                <p className={styles.product_list_category}>의약품</p>
                <p className={styles.product_list_title}>TITLETITLETITLETITLE</p>
                <p className={styles.product_list_text}>1,800원</p>
              </Link>
            </li>

            <li>
              <Link>
                <div className={styles.product_list_img}>
                  <img src="./images/item04.jpg"/>
                </div>
                <p className={styles.product_list_category}>의약품</p>
                <p className={styles.product_list_title}>TITLETITLETITLETITLE</p>
                <p className={styles.product_list_text}>1,800원</p>
              </Link>
            </li>

            <li>
              <Link>
                <div className={styles.product_list_img}>
                  <img src="./images/item05.jpg"/>
                </div>
                <p className={styles.product_list_category}>의약품</p>
                <p className={styles.product_list_title}>TITLETITLETITLETITLE</p>
                <p className={styles.product_list_text}>1,800원</p>
              </Link>
            </li>

            <li>
              <Link>
                <div className={styles.product_list_img}>
                  <img src="./images/item06.jpg"/>
                </div>
                <p className={styles.product_list_category}>의약품</p>
                <p className={styles.product_list_title}>TITLETITLETITLETITLE</p>
                <p className={styles.product_list_text}>1,800원</p>
              </Link>
            </li>

            <li>
              <Link>
                <div className={styles.product_list_img}>
                  <img src="./images/item07.jpg"/>
                </div>
                <p className={styles.product_list_category}>의약품</p>
                <p className={styles.product_list_title}>TITLETITLETITLETITLE</p>
                <p className={styles.product_list_text}>1,800원</p>
              </Link>
            </li>
            
            <li>
              <Link>
                <div className={styles.product_list_img}>
                  <img src="./images/item00.jpg"/>
                </div>
                <p className={styles.product_list_category}>의약품</p>
                <p className={styles.product_list_title}>TITLETITLETITLETITLE</p>
                <p className={styles.product_list_text}>1,800원</p>
              </Link>
            </li>

            <li>
              <Link>
                <div className={styles.product_list_img}>
                  <img src="./images/item01.jpg"/>
                </div>
                <p className={styles.product_list_category}>의약품</p>
                <p className={styles.product_list_title}>TITLETITLETITLETITLE</p>
                <p className={styles.product_list_text}>1,800원</p>
              </Link>
            </li>

            <li>
              <Link>
                <div className={styles.product_list_img}>
                  <img src="./images/item02.jpg"/>
                </div>
                <p className={styles.product_list_category}>의약품</p>
                <p className={styles.product_list_title}>TITLETITLETITLETITLE</p>
                <p className={styles.product_list_text}>1,800원</p>
              </Link>
            </li>

            <li>
              <Link>
                <div className={styles.product_list_img}>
                  <img src="./images/item03.jpg"/>
                </div>
                <p className={styles.product_list_category}>의약품</p>
                <p className={styles.product_list_title}>TITLETITLETITLETITLE</p>
                <p className={styles.product_list_text}>1,800원</p>
              </Link>
            </li> */}
            
          </ul>

          <div id={styles.product_btn_wrap}>
            <ul id={styles.product_num}>
              <li>
                <Link className={styles.selected}>1</Link>
              </li>
              <li>
                <Link>2</Link>
              </li>
              <li>
                <Link>3</Link>
              </li>
              <li>
                <Link>4</Link>
              </li>
              <li>
                <Link>5</Link>
              </li>
            </ul>
          </div>
        </section>
      </div>
    </>
  )
}
