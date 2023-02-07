import React from 'react'
import styled from 'styled-components'



const JobsDiv = styled.div`
padding: 20px;
box-shadow:1px 2px 5px rgb(0,0,0,0.3);
border-radius: 5px;
gap: 20px;
display: flex;
flex-direction: column;
max-width: 300px;
text-align: center;

`
const H6 = styled.h6`
font-size: 16px;
font-weight: 300;
`

export default function Jobs({text, address, job}) {
  return (
    <JobsDiv>
    <H6>{text}</H6>
    <div style={{display: 'flex', justifyContent: 'space-around', alignItems:'center'}}>
        <p><img style={{paddingRight :'10px'}} src='https://res.cloudinary.com/dz6w87mmx/image/upload/v1675704220/Aerial/Vector_bftcai.svg' alt='icon address'/>{address}</p>
        <p><img style={{paddingRight :'10px'}} src='https://res.cloudinary.com/dz6w87mmx/image/upload/v1675704220/Aerial/Vector-1_iylyro.svg' alt='icon jobs'/>{job}</p>
    </div>
    </JobsDiv>
  )
}
