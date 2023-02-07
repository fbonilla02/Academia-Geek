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

    @media(max-width: 768px){
      display: ${props => props.isMobileToggled ? 'none' : 'flex'};
      position: absolute;
      
      width: 100%;
      top: 60px;
      left: 0;
      flex-direction: column;
      justify-content: center;
      height: calc(100vh - 77px);
      background-color: #f0efe9;
      border-top: 1px solid black;
    }
`
  const Ul = styled.ul`
    display: flex;
    flex-direction:  ${props => props.isMobileToggled ? 'row' : 'column'};
    align-items: center;
    list-style: none;
    padding: 0px ;
    margin: ${props => props.isMobileToggled ? '0 20px' : '20px'}  ;
    gap:  ${props => props.isMobileToggled ? '20px' : '1.5rem'};
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
    <NavbarStyled >
    <img src='https://res.cloudinary.com/dz6w87mmx/image/upload/v1675704220/Aerial/logo_rlqi0p.png' alt='logo Aerial' />
    <Hambur onClick={()=> setIsMobileToggled(!isMobileToggled)}>
          <img src='https://res.cloudinary.com/dz6w87mmx/image/upload/v1675790860/Aerial/menu_hamburger_svmbco.svg' alt='logo hambur'/>
        </Hambur>
    <NavStyled isMobileToggled={isMobileToggled}>
        <Ul isMobileToggled={isMobileToggled}>
            <li>Job Search</li>
            <li>About</li>
            <li>Pricing</li>
            <li>Contact</li>
        </Ul>
        <Ul isMobileToggled={isMobileToggled}>
            <li ><Button text="Log in"  /> </li>
            <li><Button text="Try it Free" color= "#fff" backgroundColor='#24B26B' border='#24B26B'/></li>
        </Ul>
        
    </NavStyled>
    
    </NavbarStyled>
  )
}
