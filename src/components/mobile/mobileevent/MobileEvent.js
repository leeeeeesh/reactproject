import React from 'react'
import { Link } from 'react-router-dom'
import styles from './mobileevent.module.css'

export default function MobileEvent() {

  const evetnImg = [
    {index:'0',image:'./images/event_00.jpg', name:'event00'},
    {index:'1',image:'./images/event_01.jpg', name:'event01'},
    {index:'2',image:'./images/event_02.jpg', name:'event02'}
  ]
  return (
    <div id={styles.mobileevent_wrap}>
      <section id={styles.mobileevent}>
        <h2 className={styles.mobileevent_titie}>EVENT</h2>
        <Link className={styles.mobileevent_more}>더보기 <i className="fa-solid fa-angle-right"></i></Link>
        <ul id={styles.mobileevent_list}>
          {
            evetnImg.map((item)=>(
              <li key={item.index}>
                <Link>
                  <img src={item.image} alt={item.name} />
                </Link>
              </li>
            ))
          }
        </ul>
      </section>
    </div>
  )
}
