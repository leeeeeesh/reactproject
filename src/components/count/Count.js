import React, { useState } from 'react'
import styles from './count.module.css'

export default function Count({onAdd,onRemove}) {
  const [testCount, setTestCount]=useState(1)

  const addCount = ()=>{
    setTestCount(testCount+1)
    onAdd()
  }

  const removeCount = ()=>{
    if(testCount>1){
      setTestCount(testCount-1)
      onRemove()
    }
  }

  return (
    <div id={styles.buy_count}>
      <button onClick={removeCount}>-</button>
      <p>
        {testCount}
      </p>
      <button onClick={addCount}>+</button>
    </div>
  )
}
