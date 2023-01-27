import React from 'react'
import { DivCont } from '../styles/Detail'


export default function Detail() {

   const plato = JSON.parse(window.localStorage.getItem('plato'));
  console.log(plato);
  
  

  return (
    
    <DivCont>
    {plato.map(item => (
     <div key={item.id}>
     <img  src={item.img} alt='si'/>
      <p>{item.name}</p>
      <p>{item.descripcion}</p>
     </div>
    ))}
    </DivCont>
  )
}

