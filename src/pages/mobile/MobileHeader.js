import React, { useCallback, useMemo, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import styles from './mobileheader.module.css'
import { gsap } from 'gsap';

export default function MobileHeader() {

  const menuList = [

    {index:0,name:'홈',pahtname:'/',subMenuList:[]},

    {index:1,name:'분양안내',pahtname:'/',subMenuList:[
      {index:0,name:'submenu',pahtname:'/'},
      {index:1,name:'submenu',pahtname:'/'},
      {index:2,name:'submenu',pahtname:'/'}
    ]},

    {index:2,name:'병원검색',pahtname:'/',subMenuList:[
      {index:0,name:'submenu',pahtname:'/'},
      {index:1,name:'submenu',pahtname:'/'},
      {index:2,name:'submenu',pahtname:'/'}
    ]},

    {index:3,name:'상품',pahtname:'/',subMenuList:[
      {index:0,name:'submenu',pahtname:'/'},
      {index:1,name:'submenu',pahtname:'/'},
      {index:2,name:'submenu',pahtname:'/'}
    ]},
    
    {index:4,name:'이벤트',pahtname:'/',subMenuList:[
      {index:0,name:'submenu',pahtname:'/'},
      {index:1,name:'submenu',pahtname:'/'},
      {index:2,name:'submenu',pahtname:'/'}
    ]},
  ]

  let closeHeight=useMemo(()=>(39),[]);

  // useRef 로 지정해줘야함
  const mobileMenuWrap = useRef();
  const mobileGrayLayer = useRef();

  const mobileMenuWrapOpen = useCallback(()=>{
    // useRef로 지정한애는 지정한이름.current 으로 써야 사용할수있다.
    gsap.to(mobileGrayLayer.current,{display:'block'})
    gsap.to(mobileMenuWrap.current,{left:'0'})
  },[])

  const mobileMenuWrapClose = useCallback(()=>{
    gsap.to(mobileMenuWrap.current, {
      left:'-76vw',
      onComplete:()=>{
        gsap.to(mobileGrayLayer.current, {duration:0.3,display:'none'})
      }
    })
  },[])

  const [selectIndex,setSelectIndex] = useState()
  console.log(selectIndex)

  return (
    <div id={styles.mobile_header_wrap}>
      <header>
        <h1 className='hidden'>모바일헤더</h1>
        <p id={styles.mobile_menu_open} onClick={mobileMenuWrapOpen}>
          <img src='./images/mobile/mobile_menu.png'/>
        </p>

        <Link id={styles.mobile_header_login}><i className="fa-regular fa-user"></i></Link>

        <nav id={styles.mobile_menu} ref={mobileMenuWrap}>
          <h2 className='hidden'>모바일메뉴</h2>

          <p id={styles.mobile_menu_close} onClick={mobileMenuWrapClose}>
            <i className="fa-solid fa-xmark"></i>
          </p>
          
          <div id={styles.mobile_login_wrap}>
            <p>로그인 해주세요.</p>
            <ul id={styles.mobile_loginbtn_list}>
              <li>
                <button>로그인</button>
              </li>

              <li>
                <button>회원가입</button>
              </li>
            </ul>
          </div>

          <ul id={styles.mobile_menu_list}>
            {
              menuList.map((item)=>(
                <li key={item.index} className={item.index===selectIndex && `${styles.selected}`} style={item.index===selectIndex ? {height:closeHeight+(closeHeight*item.subMenuList.length)}:{height:closeHeight}} onClick={()=>{
                  if(item.index===selectIndex){
                    setSelectIndex(null)
                  }else(
                    setSelectIndex(item.index)
                  )
                }}>
                  {
                    item.subMenuList.length<1 ?
                    <p>{item.name}</p>
                    :
                    <>
                      <p>{item.name}</p>
                      <span><i className="fa-solid fa-angle-right"></i></span>
                      <ul id={styles.mobile_submenu_list}>
                        {
                          item.subMenuList.map((item)=>(
                            <li key={item.index}>
                              <Link>{item.name}</Link>
                            </li>
                          ))
                        }
                      </ul>
                    </>
                  }
                </li>
              ))
            }

            {/* <li>
              <p>홈</p>
            </li>
            <li>
              <p>분양안내</p>
              <span><i className="fa-solid fa-angle-right"></i></span>
              <ul id={styles.mobile_submenu_list}>
                <li>
                  <Link>submenu</Link>
                </li>
                <li>
                  <Link>submenu</Link>
                </li>
                <li>
                  <Link>submenu</Link>
                </li>
              </ul>
            </li>
            <li>
              <p>병원검색</p>
              <span><i className="fa-solid fa-angle-right"></i></span>
            </li>
            <li>
              <p>상품</p>
              <span><i className="fa-solid fa-angle-right"></i></span>
            </li>
            <li>
              <p>이벤트</p>
              <span><i className="fa-solid fa-angle-right"></i></span>
            </li> */}
          </ul>
        </nav>

        <div id={styles.mobile_graylayer} ref={mobileGrayLayer}></div>
      </header>
    </div>
  )
}
