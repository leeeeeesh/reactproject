import React from 'react'
import { Link } from 'react-router-dom'
import styles from './mainitem.module.css'

export default function MainItem() {
  return (
    <div id={styles.mainitem_wrap}>
      <section id={styles.mainitem}>
        <h2 className='maintitle'>BEST ITEM</h2>
        <ul id={styles.mainitem_list}>
          <li>
            <Link>
              <div className={styles.mainitem_img}>
                <img src='./images/item00.jpg' />
              </div>
              <p className={styles.mainitem_title}>Title</p>
              <p className={styles.mainitem_text}>text text text text text</p>
            </Link>
          </li>

          <li>
            <Link>
              <div className={styles.mainitem_img}>
                <img src='./images/item01.jpg' />
              </div>
              <p className={styles.mainitem_title}>Title</p>
              <p className={styles.mainitem_text}>text text text text text</p>
            </Link>
          </li>

          <li>
            <Link>
              <div className={styles.mainitem_img}>
                <img src='./images/item02.jpg' />
              </div>
              <p className={styles.mainitem_title}>Title</p>
              <p className={styles.mainitem_text}>text text text text text</p>
            </Link>
          </li>

          <li>
            <Link>
              <div className={styles.mainitem_img}>
                <img src='./images/item03.jpg' />
              </div>
              <p className={styles.mainitem_title}>Title</p>
              <p className={styles.mainitem_text}>text text text text text</p>
            </Link>
          </li>

          <li>
            <Link>
              <div className={styles.mainitem_img}>
                <img src='./images/item04.jpg' />
              </div>
              <p className={styles.mainitem_title}>Title</p>
              <p className={styles.mainitem_text}>text text text text text</p>
            </Link>
          </li>

          <li>
            <Link>
              <div className={styles.mainitem_img}>
                <img src='./images/item05.jpg' />
              </div>
              <p className={styles.mainitem_title}>Title</p>
              <p className={styles.mainitem_text}>text text text text text</p>
            </Link>
          </li>

          <li>
            <Link>
              <div className={styles.mainitem_img}>
                <img src='./images/item06.jpg' />
              </div>
              <p className={styles.mainitem_title}>Title</p>
              <p className={styles.mainitem_text}>text text text text text</p>
            </Link>
          </li>

          <li>
            <Link>
              <div className={styles.mainitem_img}>
                <img src='./images/item07.jpg' />
              </div>
              <p className={styles.mainitem_title}>Title</p>
              <p className={styles.mainitem_text}>text text text text text</p>
            </Link>
          </li>
        </ul>

        <Link id={styles.mainitem_more}>더보기</Link>
      </section>
    </div>
  )
}
