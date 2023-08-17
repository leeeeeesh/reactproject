import React from 'react'
import { Link } from 'react-router-dom'
import styles from './mainevent.module.css'

export default function MainEvent() {
  return (
    <div id={styles.event_wrap}>
      <section id={styles.event}>
        <h2 className='maintitle'>EVENT</h2>
        <ul id={styles.event_list}>
          <li>
            <Link>
              <img src='./images/event_00.jpg' />
            </Link>
          </li>

          <li>
            <Link>
              <img src='./images/event_01.jpg' />
            </Link>
          </li>

          <li>
            <Link>
              <img src='./images/event_02.jpg' />
            </Link>
          </li>
        </ul>

        <Link id={styles.event_more}>더보기</Link>
      </section>
    </div>
  )
}
