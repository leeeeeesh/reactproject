import React from 'react'
import styles from './mobileclinic.module.css'

export default function MobileClinic() {
  return (
    <div id={styles.mobileclinic_wrap}>
      <section id={styles.mobileclinic}>
        <h2 className={styles.mobileclinic_titie}>VET Clinic</h2>
        <p className={styles.mobileclinic_text}>검색창에서 고슴도치 진료가 가능한 병원을 빠르게 검색해 보세요.</p>
        <form>
          <div>
            <input type='text'/>
            <button><i className="fa-solid fa-magnifying-glass"></i></button>
          </div>
        </form>
      </section>
    </div>
  )
}
