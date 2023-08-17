import React from 'react'
import styles from './mainclinic.module.css'

export default function MainClinic() {
  return (
    <div id={styles.mainclinic_wrap}>
      <section id={styles.mainclinic}>
        <h2 className='maintitle'>VET Clinic</h2>
        <p>검색창에서 고슴도치 진료가 가능한 병원을 빠르게 검색해 보세요.</p>
        <form>
          <input type='text' />
          <button>
            <i className="fa-solid fa-magnifying-glass"></i>
          </button>
        </form>
      </section>
    </div>
  )
}
