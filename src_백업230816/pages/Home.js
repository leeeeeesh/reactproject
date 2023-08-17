import React from 'react'
import styles from './home.module.css'

import MainVisual from '../components/mainvisual/MainVisual';
import MainInfo from '../components/maininfo/MainInfo';
import MainClinic from '../components/mainclinic/MainClinic';
import MainCategory from '../components/maincategory/MainCategory';
import MainItem from '../components/mainitem/MainItem';
import MainEvent from '../components/mainevent/MainEvent';

export default function Home() {
  return (
    <div>
      {/* 비주얼 */}
      <MainVisual/>

      {/* 분양안내 */}
      <MainInfo/>

      {/* VET Clinic */}
      <MainClinic/>

      {/* CATEGORY */}
      <MainCategory/>

      {/* BEST ITEM */}
      <MainItem/>

      {/* EVENT */}
      <MainEvent/>
    </div>
  )
}
