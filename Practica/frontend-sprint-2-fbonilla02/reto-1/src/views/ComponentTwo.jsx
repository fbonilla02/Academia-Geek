import React from 'react'
import styled from 'styled-components'
import Button from '../components/Button'
import Jobs from '../components/Jobs'

const JobsContainer = styled.section`
display: flex;
margin: 40px 0px;
justify-content: center;
gap: 10px;
@media(max-width: 768px){
  flex-direction: column;
}

`
const Center = styled.div`
display: flex;
flex-direction: column;
align-items: center;
text-align: center;

`

const Psearch = styled.p`
padding: 20px 0px;
color: #666666;
line-height: 110%;
`
const Input = styled.input`
    height: 35px;
    width: 50%;
    margin-right: 4px;
    background-image: url(https://res.cloudinary.com/dz6w87mmx/image/upload/v1675721008/Aerial/search_btu2ho.svg);
    background-position: 10px center;
    background-repeat: no-repeat;
    padding: 10px 5px 10px 20px;
    text-indent: 20px;
   

`
const Form = styled.form`
    display: flex;
    width: 100%;
    justify-content: center;
  

`


export default function ComponentTwo() {
  return (
    <Center>
    <h2 style={{fontWeight:'400', fontSize:'32px'}}>Search for your area of interest</h2>
    <Psearch>Please enter your desired indusrty, job title, and skills</Psearch>
    <Form >
        <Input placeholder=' engineer, Internet and Web industry' />
        <Button color='#fff' border='#333' backgroundColor='#333' text='Search'/>
        
    </Form>
    <JobsContainer>
        <Jobs text='Leader of iOS engineers for mobility 
        services' address='California' job='Engineer' />

        <Jobs text='Candidate for Sales Manager of HR-related services' address='Oregon' job='Sales Manager' />

        <Jobs text='Head of marketing for electronic payment services' address='Florida' job='Marketer' />

        <Jobs text='CFO of a semiconductor manufacturing company' address='Texas' job='CFO' />
    </JobsContainer>
    </Center>
  )
}
