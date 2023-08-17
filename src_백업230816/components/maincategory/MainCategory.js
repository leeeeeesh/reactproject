import React from 'react'
import { Link, createSearchParams } from 'react-router-dom'
import styles from './maincategory.module.css'

export default function MainCategory() {

  const categoryMap = [
    {id:'0',text:'전체',image:'./images/all.png'},
    {id:'1',text:'사료',image:'./images/feed.png'},
    {id:'2',text:'간식',image:'./images/snack.png'},
    {id:'3',text:'위생',image:'./images/hygiene.png'},
    {id:'4',text:'의약품',image:'./images/medicine.png'}
  ]

  return (
    <div id={styles.category_wrap}>
      <section id={styles.category}>
        <h2 className='maintitle'>CATEGORY</h2>
        <ul id={styles.category_list}>
          {
            categoryMap.map((item)=>(
              <li key={item.id}>
                <Link to={{ pathname: `/product`, search: `?${createSearchParams({ category: item.text })}`}}>
                  <img src={item.image} />
                  <p>{item.text}</p>
                </Link>
              </li>
            ))
          }

          {/* <li>
            <Link to={{pathname:`/product`, search: `?${createSearchParams({ category: '전체'})}`}}>
              <img src='./images/all.png' />
              <p>전체</p>
            </Link>
          </li>

          <li>
            <Link to={{ pathname: `/product`, search: `?${createSearchParams({ category: '사료' })}`}}>
              <img src='./images/feed.png' />
              <p>사료</p>
            </Link>
          </li>

          <li>
            <Link to={{ pathname: `/product`, search: `?${createSearchParams({ category: '간식' })}`}}>
              <img src='./images/snack.png' />
              <p>간식</p>
            </Link>
          </li>

          <li>
            <Link to={{ pathname: `/product`, search: `?${createSearchParams({ category: '위생' })}`}}>
              <img src='./images/hygiene.png' />
              <p>위생</p>
            </Link>
          </li>

          <li>
            <Link to={{ pathname: `/product`, search: `?${createSearchParams({ category: '의약품' })}`}}>
              <img src='./images/medicine.png' />
              <p>의약품</p>
            </Link>
          </li> */}
        </ul>
      </section>
    </div>
  )
}
