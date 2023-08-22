import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { createSearchParams, Link, useNavigate } from 'react-router-dom'
import styles from './mobileheader.module.css'
import { gsap } from 'gsap';

import { login, logout, onUserStateChange } from '../../api/firebase';
import { useAuthContext } from '../../context/AuthContext';



export default function MobileHeader() {

  const menuList = [

    {index:0,name:'홈',pahtname:'/',subMenuList:[]},

    {index:1,name:'분양안내',pahtname:'',subMenuList:[
      {index:0,name:'분양안내',pahtname:'/'}
    ]},

    {index:2,name:'병원검색',pahtname:'',subMenuList:[
      {index:0,name:'병원검색',pahtname:'/'}
    ]},

    {index:3,name:'상품',pahtname:'',subMenuList:[
      {index:0,name:'전체',pahtname:'/product'},
      {index:1,name:'사료',pahtname:'/product'},
      {index:2,name:'간식',pahtname:'/product'},
      {index:3,name:'위생',pahtname:'/product'},
      {index:4,name:'의약품',pahtname:'/product'}
    ]},
    
    {index:4,name:'이벤트',pahtname:'',subMenuList:[
      {index:0,name:'이벤트',pahtname:'/'}
    ]},
  ]

  let closeHeight=useMemo(()=>(39),[]);

  // useRef 로 지정해줘야함
  const mobileMenuWrap = useRef();
  const mobileGrayLayer = useRef();

  useEffect(()=>{
    gsap.set(mobileGrayLayer.current,{display:'none'})
    gsap.set(mobileMenuWrap.current,{left:'-76vw'})
  },[])

  const mobileMenuWrapOpen = useCallback(()=>{
    // useRef로 지정한애는 지정한이름.current 으로 써야 사용할수있다.
    gsap.to(mobileGrayLayer.current,{display:'block'})
    gsap.to(mobileMenuWrap.current,{left:'0'})
    gsap.set('body,html',{overflow:'hidden'})
  },[])

  const mobileMenuWrapClose = useCallback(()=>{
    gsap.to(mobileMenuWrap.current, {
      left:'-76vw',
      onComplete:()=>{
        // gsap.to(mobileGrayLayer.current, {duration:0.3,display:'none'})
      }
    })
    gsap.to(mobileGrayLayer.current, {duration:0.3,display:'none'})
    gsap.set('body,html',{overflow:'visible'})
  },[])

  const [selectIndex,setSelectIndex] = useState()
  
  const {user} = useAuthContext()
  
  const navigate = useNavigate()

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
            {
              user ?
              <>
                <div id={styles.mobile_user_wrap}>
                  <p><img src={user.photoURL}/></p>
                  <p>{user.displayName} 님</p>
                </div>

                <ul id={styles.mobile_loginbtn_list}>
                  <li>
                    <button onClick={logout}>로그아웃</button>
                  </li>
                </ul>
              </>
              :
              <>
                <p>로그인 해주세요.</p>
                <ul id={styles.mobile_loginbtn_list}>
                  <li>
                    <button onClick={login}>로그인</button>
                  </li>

                  <li>
                    <button>회원가입</button>
                  </li>
                </ul>
              </>
            }
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
                    <p onClick={()=>{
                      navigate(`${item.pahtname}`)
                      mobileMenuWrapClose()
                    }}>{item.name}</p>
                    :
                    <>
                      <p>{item.name}</p>
                      <span><i className="fa-solid fa-angle-right"></i></span>
                      <ul id={styles.mobile_submenu_list}>
                        {
                          item.subMenuList.map((item)=>(
                            <li key={item.index} onClick={(e)=>{
                              e.preventDefault()
                              // navigate(`${item.pahtname}`)
                              navigate({
                                pathname:'/product',
                                search:`${createSearchParams({category: item.name})}`
                              })
                              mobileMenuWrapClose()
                            }}>
                              {item.name}
                            </li>
                          ))
                        }
                      </ul>
                    </>
                  }
                </li>
              ))
            }

          
          </ul>
        </nav>

        <div id={styles.mobile_graylayer} ref={mobileGrayLayer}></div>
      </header>
    </div>
  )
}
