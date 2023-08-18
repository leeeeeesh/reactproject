import React from 'react'
import { Link } from 'react-router-dom'
import styles from './mobilevisual.module.css'

export default function MobileVisual() {
  return (
    <div id={styles.mobilevisual_wrap}>
      <section id={styles.mobilevisual}>
        <div id={styles.mobilevisual_title_wrap}>
          <h2>WELCOME TO OOO</h2>
          <Link>JOIN</Link>
        </div>

        <div id={styles.mobilevisual_slide_wrap}></div>
      </section>
    </div>
  )
}
