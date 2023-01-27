import React from 'react'
import WhiteBtn from '../containers/WhiteButton'
import { ButtonG, DivNav, LiNav, NavbarStyled, UlNav } from '../style/StylesGlobal'

export default function Navbar() {
  return (
    <NavbarStyled>
        <img src='https://res.cloudinary.com/dixwwvzbt/image/upload/v1653617119/sprint2Reto1/logo_iqmebr.png'/>
      <DivNav>
        <UlNav>

          <LiNav>Job Search</LiNav>
          <LiNav>About</LiNav>
          <LiNav>Pricing</LiNav>
          <LiNav>Contact</LiNav>

        </UlNav>
        <DivNav>
        
        <WhiteBtn text="Log in" />
            <ButtonG> Try it Free</ButtonG>

        </DivNav>
      </DivNav>
    </NavbarStyled>
  )
}
