import React from 'react'
import GetShop from './GetComponets/GetShop'
import { Link, useParams } from 'react-router-dom'
import { ArtDiv, Article, CenterC, ImgU, InfoT,  SecPro } from '../styles/mainStyle';
import stars from '../img/Stars.png'

export default function Product() {
  const [products] = GetShop([])
  const {id} = useParams()

 
    const tienda = products.filter(data => data.id === id)

    const xd = products.find(data => data.id === id )?.products
    const cosa = (id)=>{
      const uwu = xd.find(data => data.id === id)
      console.log(uwu);
      localStorage.setItem('plato', JSON.stringify([uwu]))
    }
    return (
    <CenterC>
 { tienda?.map(item =>(
        <Article  key={item.id} >
        <ImgU  src={item.imgStore} alt={item.tiendas}/>
          <InfoT>
            <p>{item.tiendas}</p>
            <img src={stars} alt={item.tienda} />
            <p>Work time {item.workTime}</p>
            
          </InfoT>
        </Article>
      ))}
    <SecPro>
         {xd?.map((item) => (
            <Link key={item.id} to={`/detalle/${id}/${item.id}`} onClick={()=>{ cosa(item.id)}}>
            
            <ArtDiv  key={item.id}>
                <img src={item.img} alt={item.name}/>
                <p>{item.name}</p>
                <p>$ {item.price} </p>
        </ArtDiv>
        </Link>
         )) }
      </SecPro>

    </CenterC>
  )
}