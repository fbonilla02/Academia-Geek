import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { filtroActiveSync, filtroAllSync, filtroCompletSync } from './Redux/actions/actionProducto'
import './styles/filtro.css'

export default function Filtro() {

  const dispatc = useDispatch()
  const {producto}= useSelector(store => store.productoStore)



  const allData = ()=>{
    dispatc(filtroAllSync(producto))
  }

  const activeData = ()=>{
    dispatc(filtroActiveSync())
  }
  const completeData = ()=>{
      const filtro = producto.filter(d => d.complete)
      console.log(filtro);
      dispatc(filtroCompletSync(filtro))
  }
  return (
    <div className='filtro'>
    <p className='click' onClick={allData}>All</p>
    <p className='click' onClick={activeData}>Active</p>
    <p className='click' onClick={completeData}>Completed</p>
    </div>
  )
}
