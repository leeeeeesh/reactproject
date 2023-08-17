import React from 'react'
import { Link } from 'react-router-dom'
import styles from './maincategory.module.css'

export default function MainCategory() {
  return (
    <div id={styles.category_wrap}>
      <section id={styles.category}>
        <h2 className='maintitle'>CATEGORY</h2>
        <ul id={styles.category_list}>
          <li>
            <Link>
              <img src='./images/sale.png' />
              <p>할인</p>
            </Link>
          </li>

          <li>
            <Link>
              <img src='./images/feed.png' />
              <p>사료</p>
            </Link>
          </li>

          <li>
            <Link>
              <img src='./images/snack.png' />
              <p>간식</p>
            </Link>
          </li>

          <li>
            <Link>
              <img src='./images/hygiene.png' />
              <p>위생</p>
            </Link>
          </li>

          <li>
            <Link>
              <img src='./images/medicine.png' />
              <p>의약품</p>
            </Link>
          </li>
        </ul>
      </section>
    </div>
  )
}
