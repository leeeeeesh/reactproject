import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import useProducts from '../hooks/useProducts';
import styles from './product.module.css'
import regExp from '../util/regExp'

export default function Product() {

  // const [allProduct,setAllProduct] = useState([]);

  // useEffect(()=>{
  //   axios.get('./data/product.json').then((res)=>{
  //     setAllProduct(res.data)
  //   })
  // }, [])
  const [allProduct] = useProducts()//직접만든 훅

  const categorys = [
    // 순번같은거 필요할때 index
    // 카테고리 이름도 json파일과 같아야 잘 걸러낼수잇음
    // 한글도 가능하지만 영문으로 해주는게 좋음
    {index:0,text:'전체'},
    {index:1,text:'사료'},
    {index:2,text:'간식'},
    {index:3,text:'위생'},
    {index:4,text:'의약품'}
  ]

  const [selectCategory,setSelectCategory] = useState(loadData())
  //객체라서 text속성을 가져오기위해 이렇게 씀 => categorys[0].text
  // console.log(selectCategory)

  const [categoryItems, setCategoryItems] = useState([])




  //**** localStorage ****
  useEffect(()=>{
    localStorage.setItem('aaa', JSON.stringify(selectCategory))
  }, [selectCategory])

  function loadData(){
    const data = localStorage.getItem('aaa')
    // console.log(Boolean(data))
    return data ? JSON.parse(data) : categorys[0].text
  }


  useEffect(()=>{
    if(selectCategory === '전체'){
      setCategoryItems(allProduct)
    }else{
      const categoryItems = allProduct.filter((item)=>(item.category===selectCategory))
      setCategoryItems(categoryItems)
    }
  }, [selectCategory,allProduct])

  const navigate = useNavigate()

  const [weeklyItem, setWeeklyItem] = useState([])

  useEffect(()=>{
    setWeeklyItem(allProduct.filter((item)=>(item.isWeekly===true)))
  }, [allProduct])


  const {search} = useLocation() //현재 위치를 search에 넣어줌

  


  useEffect(() => { // 메인에서 선택한 카테고리 보여줌 
    if (search) { //search값이 있으면 실행하라는뜻. useEffect에 [search]써서 search값이 바뀔때마다 실행하는것이기때문에 여기선 if문을 안써도 상관없지만 search값이 없을수도있으니 우선 쓰는거
      const ct = decodeURIComponent(new URLSearchParams(search).get('category'))
       // serch 전체값을 받아와서 category 속성값만 얻어내는 약속된 객체함수 
      //  decodeURIComponent 는 값이 한글이라서 쓴거
      if (ct) {
        setSelectCategory(ct);
      }
    }

    window.scrollTo(0,0)
  }, [search])




  return (
    <>
      <div className={`subvisual_wrap ${styles.product_visual}`}>
        <section className='subvisual'>
          <h2>상품</h2>
          <p>인기 판매 상품을 확인해 보세요.</p>
        </section>
      </div>

      <div id={styles.product_wrap}>
        <section id={styles.product}>
          {/* <h2 className='hidden'>판매상품목록</h2> */}
          <h2 className='maintitle'>판매상품목록</h2>
          <ul id={styles.product_category}>
            {
              categorys.map((item)=>(
                <li key={item.index} onClick={()=>{
                  setSelectCategory(item.text)
                }}>
                  <Link className={`${selectCategory===item.text&&styles.selected}`}>{item.text}</Link>
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
              categoryItems.map((item)=>(
                <li key={item.id}>
                  <Link onClick={
                    ()=>{
                      navigate(`/product/${item.id}`)
                    }
                  }>
                    <div className={styles.product_list_img}>
                      <img src={item.image}/>
                    </div>
                    <p className={styles.product_list_category}>{item.category}</p>
                    <p className={styles.product_list_title}>{item.title}</p>
                    <p className={styles.product_list_text}>{regExp.comma(item.price)}<span>원</span></p>
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

      <div id={styles.product_banner_wrap}>
        {/* TEST BANNER */}
      </div>

      <div id={styles.product_weekly_wrap}>
        <section id={styles.product_weekly}>
          <h2 className='maintitle'>이번주 인기 상품</h2>

          <ul id={styles.product_weekly_list}>
            {
              weeklyItem.map((item)=>(
                <li key={item.id}>
                  <Link onClick={
                    ()=>{
                      navigate(`/product/${item.id}`)
                    }
                  }>
                    <img src={item.image}/>
                    <div className={styles.product_weekly_box}>
                      <p>{item.title}</p>
                      <p>{regExp.comma(item.price)}<span>원</span></p>
                    </div>
                  </Link>
                </li>
              ))
            }
            
          </ul>
        </section>
      </div>
    </>
  )
}
