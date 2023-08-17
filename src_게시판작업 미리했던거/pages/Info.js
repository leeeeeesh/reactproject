import React from 'react'
import { Link } from 'react-router-dom'
import styles from './info.module.css'

export default function Info() {
  return (
    <>
      <div className='subvisual_wrap'>
        <section className='subvisual'>
          <h2>분양안내</h2>
        </section>
      </div>

      <div id={styles.inquiry_wrap}>
        <section id={styles.inquiry}>
          <h2 className='maintitle'>매장분양 문의하기</h2>
          <div id={styles.inquiry_content}>
            <div id={styles.inquiry_img}></div>

            <div id={styles.inquiry_text}>
              <p>택배분양은 하지않으며 매장 방문분양만 가능합니다.<br/>
                분양교육 후 &#40;핸들링방법/ 배변훈련법/ 목욕법 등&#41; 분양합니다.<br/>
                고슴도치 분양시 최소 30분~1시간정도 소요되기때문&#40;분양교육, 용품설명 등&#41;<br/>
                매장 마감시간 30분전에는 도착하셔야 분양이 가능합니다.
              </p>
              <Link>문의하기</Link>
            </div>
          </div>
        </section>
      </div>

      <div id={styles.race_wrap}>
        <section id={styles.race}>
          <h2 className='maintitle'>고슴도치 종류</h2>
          <ul id={styles.race_list}>
            <li>
              <img src='./images/race_00.jpg'/>
              <p>스탠다드</p>
            </li>
            
            <li>
              <img src='./images/race_01.jpg'/>
              <p>플라티나</p>
            </li>

            <li>
              <img src='./images/race_02.jpg'/>
              <p>화이트초코</p>
            </li>

            <li>
              <img src='./images/race_03.jpg'/>
              <p>스노우샴페인</p>
            </li>

            <li>
              <img src='./images/race_04.jpg'/>
              <p>알비노</p>
            </li>
          </ul>
        </section>
      </div>

      <div id={styles.compensate_wrap}>
        <section id={styles.compensate}>
          <h2 className='maintitle'>분양안내 &#38; 보상규정</h2>
          <p className={styles.compensate_redtext}>&#42; 동물은 환불&#47;교환이 불가하므로 신중히 생각하신후 입양해주세요. &#42;</p>

          <p>건강상태 확인/예방접종	&#40;고슴도치-레볼루션	&#41;을 해서 분양해드리지만, 환경변화에 민감한 소동물이기에 생각 못한 변수가 있을수있습니다.<br/>
          입양 후 3일이내 페사시 동종의 다른아이로 재분양 &#47; 7일이내 폐사시 50&#37;의 분양비로 재분양 해드립니다.
          </p>

          <p>보상 제외 조건</p>

          <p>
            text text text text text text text text text text text text text text text text text text text 
          </p>
        </section>
      </div>
    </>
  )
}
