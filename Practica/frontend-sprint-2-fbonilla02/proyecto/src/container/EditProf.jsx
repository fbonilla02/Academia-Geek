import React from 'react'
import Profile from '../img/Profileimg.png'
import { CenterPro, LogoDiv, ProfileBut } from '../styles/ProfileStyle'
import ButtonYellow from '../components/ButtonYellow'
import {BsFillPencilFill } from "react-icons/bs"
import styled from 'styled-components'
export default function EditProf() {
  return (
    <div>
<CenterPro>
        <LogoDiv>
            <img src={Profile}/>
            <p>Jenny Wilson</p>
        </LogoDiv>

        <ProfileBut>
            
            <Input placeholder='Jenny Wilson' disabled />
            <Input placeholder='Jennywilson@gmail.com' disabled />
            <Input placeholder='+1 000 112 33 33'  disabled/>
            <Input placeholder='03.05.1995' disabled />
            
        <ButtonYellow text='Save'/>
        </ProfileBut>
    </CenterPro>
    </div>
  )
}

export const Input = styled.input`
    padding: 10px;
    

`


