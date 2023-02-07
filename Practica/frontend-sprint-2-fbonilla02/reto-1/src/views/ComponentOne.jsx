import React from 'react'
import styled from 'styled-components'
import Button from '../components/Button'
import CardsPeople from '../components/CardsPeople'

const FirstContainer = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 30px;
  gap: 30px;
  @media(max-width: 768px){
    grid-template-columns: 1fr;
  }
`
const H1 = styled.h1`
  font-weight: bold;
  font-size: 56px;
  @media(max-width: 768px){
    text-align: center;
  }
`
const P1 = styled.p`
  font-weight: 300;
  font-size: 16px;
  padding: 20px 10px;
  @media(max-width: 768px){
    text-align: center;
  }
`
const CardsGrid = styled.div`
display: grid;
grid-template-columns: repeat(auto-fill, minmax(min(100%, 10rem), 1fr));
gap: 10px;
justify-items: center;
`
const ContainerButtons  = styled.div`
  display: flex;
  gap: 0px 20px;

  @media(max-width: 768px){
    justify-content: center;
  }
`


export default function ComponentOne() {
  return (
    <FirstContainer>
      <div style={{display: 'flex', flexDirection:'column', justifyContent: 'center' }}>
        <H1>We support your challenge in new areas</H1>
        <P1>Our highly qualified headhunters, who have passed a rigorous
        screening process, will introduce you to your new career
        opportunity</P1>
        <ContainerButtons >
          <Button color= "#fff" backgroundColor='#24B26B' border='#24B26B' text='Try it Free' />
          <Button  text='Explore' />
        </ContainerButtons>
      </div>
      <CardsGrid>
          <CardsPeople img='https://res.cloudinary.com/dz6w87mmx/image/upload/v1675704219/Aerial/Ellipse_1-1_mei88w.png' name="Felicity Belle Amis" job="Work Joe" description="Leave it to us to change jobs for designers!"/>
          <CardsPeople img='https://res.cloudinary.com/dz6w87mmx/image/upload/v1675704219/Aerial/Ellipse_1-4_kxwqno.png' name="Thelma Nicks" job="Career Tweak" description="We have a marketer position for you."/>
          <CardsPeople img='https://res.cloudinary.com/dz6w87mmx/image/upload/v1675704219/Aerial/Ellipse_1_zgunmh.png' name="Arman Weight" job="rjob" description="I specialize in helping engineers change jobs."/>
          <CardsPeople img='https://res.cloudinary.com/dz6w87mmx/image/upload/v1675704219/Aerial/Ellipse_1-3_ir8tu9.png' name="Arman Weight" job="HIGHREACH" description="I can help you with the medical industry."/>
          <CardsPeople img='https://res.cloudinary.com/dz6w87mmx/image/upload/v1675704219/Aerial/Ellipse_1-5_vftwhz.png' name="Earl Dunst" job="housy" description="We have a number of CTO positions available."/>
          <CardsPeople img='https://res.cloudinary.com/dz6w87mmx/image/upload/v1675704219/Aerial/Ellipse_1-2_gljgjn.png' name="Ludovic Dane" job="SHIF GUYS" description="We specialize in construction related jobs."/>
      </CardsGrid>
    </FirstContainer>
  )
}
