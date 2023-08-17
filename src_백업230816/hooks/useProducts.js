import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { getProducts } from '../api/firebase';

export default function useProducts() {
  
  const [allProduct, setAllProduct] = useState([]);

  useEffect(()=>{
    // axios.get('/data/product.json').then((res)=>{
    //   setAllProduct(res.data)
    // })

    getProducts().then((res)=>{
      setAllProduct(res)
    })

    
  }, [])

  return (
    // 컴포넌트가 아니라서 이름 대문자로 안해도댐
    // costom hook. 결국 훅도 함수다
    [allProduct]//값만 리턴, html이아니고 내가사용할 결과값만 리턴하는거
  )
}
