import React, { useEffect, useState } from 'react'
import {FaMapMarkerAlt } from "react-icons/fa"
import { Article, Button, CenterC, Deliver, ImgSlide, ImgU, InfoT, SlideDiv, To } from '../styles/mainStyle'

import special from '../img/special.png'
import hambur from '../img/hambur.png'
import stars from '../img/Stars.png'
import { MdKeyboardArrowDown } from "react-icons/md";
import { Link } from 'react-router-dom'
import GetShop from './GetComponets/GetShop'



export default function Main() {
 const [products] = GetShop([])


  return (
    <div>
      <CenterC>
      <Deliver>
      <FaMapMarkerAlt style={{fontSize: "30px", color:'ffe031'}}/>
        <div>
          <To>DELIVER TO</To>
          <p>882 Well St, New-York <MdKeyboardArrowDown/></p>
        </div>
        {/* SLIDE IMG */}
      </Deliver>
      <SlideDiv>
        <ImgSlide src={special}/>
        <ImgSlide src={special}/>
        <ImgSlide src={special}/>
        
      </SlideDiv>
      <div>
      Restaurants and Cafes
        <SlideDiv>
          <Button>All</Button>
          <Button><img src={hambur} alt='hambur'/>Fast Food</Button>
          <Button>Pizza</Button>
          <Button>All</Button>
          <Button>All</Button>
          <Button>All</Button>
        </SlideDiv>
      </div>
        {/* CONTENIDO TIENDAS */}
      <div>
      { products.map(item =>(
        <Link key={item.id} to={`/detalle/${item.id}/`}>
        <Article   >
        <ImgU src={item.imgStore} alt={item.tiendas}/>
          <InfoT>
            <p>{item.tiendas}</p>
            <img src={stars} alt='start'/>
            <p>Work time {item.workTime}</p>
            <p>Before you <b>13$</b></p>
          </InfoT>
        </Article>
        </Link>
      ))}
        {/* <Article>
        <ImgU src={rest}/>
          <InfoT>
            <p>Pardes Restaurant</p>
            <img src={stars}/>
            <p>Work time 09:23:00</p>
            <p>Before you <b>13$</b></p>
          </InfoT>
        </Article>
         */}
        </div>
      </CenterC>
    </div>
  )
}
