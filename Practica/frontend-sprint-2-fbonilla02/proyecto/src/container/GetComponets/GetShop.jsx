import axios from 'axios'
import  { useEffect } from 'react'
import { useState } from 'react'

export default function GetShop() {
    const [products, setProduct] = useState([])
    useEffect(() =>{
      axios.get('https://proyect2-etapa2.herokuapp.com/tiendas')
      .then(
        res =>{
          setProduct(res.data)
        }
      )
      .catch(err =>{
        
      })
    },[])
  return [products]
}
