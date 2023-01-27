import React from 'react'
import './styles/listStyle.css'
import { RiCheckLine, RiCloseFill } from "react-icons/ri";
import { useDispatch, useSelector } from 'react-redux';
import { actionCompletSync, actionDeleteSync } from './Redux/actions/actionProducto';

export default function Lista() {

    const {producto}= useSelector(store => store.productoStore)
    const dispatch = useDispatch()
    
    const handleCheck = (complete)=>{
      dispatch(actionCompletSync(complete))
    }

    const handleDelete = (dato)=>{
      dispatch(actionDeleteSync(dato))
    }
  return (
    <div>
    <ul className='listas'>

      {producto.map((prod, index)=>(
        <li className='liValue' key={index}>
        <span className={prod.complete ? 'Icon-check--active' : 'check'}   onClick={()=>(handleCheck(prod.id))}><RiCheckLine/></span>
        <p  className={prod.complete ? 'TodoItem-p--complete' : 'text'} >{prod.valor}</p>{

        }
        
        <button className='cruz' onClick={()=>(handleDelete(prod.id))}><RiCloseFill/></button>
      </li>
      ))}
      <div className='total'>
        <p>{Object.keys(producto).length} items</p>
        <p className='click' >Clear Complete</p>
      </div>
      </ul>
     
    </div>
  )
}
