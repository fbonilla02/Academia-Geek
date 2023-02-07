import React, { useState } from 'react'
import styled from 'styled-components'
import Button from '../components/Button'


 const NavbarStyled = styled.header`
    padding: 20px 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`
 const NavStyled = styled.nav`
    display: flex;
`
  const Ul = styled.ul`
    display: flex;
    align-items: center;
    list-style: none;
    padding: 0px ;
    margin:  0 20px;
    
`

  const LiNav = styled.li`
    padding: 0px 10px;
    font-weight: 300;
`
  const Hambur = styled.div`
    display: block;
    @media(min-width: 768px){
      display: none;
    }
  `


export default function Navbar() {
  const [isMobileToggled, setIsMobileToggled] = useState(false)
  console.log(isMobileToggled);
  return (
    <NavbarStyled isMobileToggled={isMobileToggled}>
    <img src='https://res.cloudinary.com/dz6w87mmx/image/upload/v1675704220/Aerial/logo_rlqi0p.png' alt='logo Aerial' />
    <NavStyled>
    {isMobileToggled ? ('') : ''}
        <Ul>
            <LiNav>Job Search</LiNav>
            <LiNav>About</LiNav>
            <LiNav>Pricing</LiNav>
            <LiNav>Contact</LiNav>
        </Ul>
        <Ul>
            <LiNav><Button text="Log in"  /> </LiNav>
            <LiNav><Button text="Try it Free" color= "#fff" backgroundColor='#24B26B' border='#24B26B'/></LiNav>
        </Ul>
        
    </NavStyled><Hambur onClick={()=> setIsMobileToggled(!isMobileToggled)}>
          <img src='https://res.cloudinary.com/dz6w87mmx/image/upload/v1675790860/Aerial/menu_hamburger_svmbco.svg' alt='logo hambur'/>
        </Hambur>
    </NavbarStyled>
  )
}
