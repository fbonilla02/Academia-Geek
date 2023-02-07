import React from 'react'
import styled from 'styled-components'


const CardsContainer = styled.div`
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  border-radius: 10px;
  max-width: 10rem;
  box-shadow:1px 2px 5px rgb(0,0,0,0.3);
`
const P2 = styled.p`
  font-weight: 300;
  font-size: 12px;
  padding: 10px 0;
  text-align: center;
  color: #666666;
`
const NameH3 = styled.h3`
  font-size: 14px;
  margin-top: 10px;
`


export default function CardsPeople({img, name, job, description}) {
  return (
   <CardsContainer>
     
    <img src={img} alt={name} />
    <NameH3 >{name}</NameH3>
    <span style={{fontWeight:'lighter', fontSize: '12px'}} >{job}</span>
    <P2>{description}</P2>
    
   </CardsContainer>
  )
}
