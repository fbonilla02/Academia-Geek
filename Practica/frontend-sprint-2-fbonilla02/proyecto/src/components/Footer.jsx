import React from 'react'
import { FooterDiv, Lista, Ulfooter } from '../styles/FooterStyle'
import { AiOutlineHome, AiOutlineSearch, AiOutlineHistory } from "react-icons/ai";
import { BsPerson } from "react-icons/bs";
import { Link } from 'react-router-dom';
export default function Footer() {
  return (
    <FooterDiv>
        <Ulfooter>
            <Lista><Link to='/'><AiOutlineHome/></Link></Lista>
            <Lista><Link to='/'><AiOutlineSearch/></Link></Lista>
            <Lista><Link to='/AllData'><AiOutlineHistory/></Link></Lista>
            <Lista><Link to='/Profile'><BsPerson/></Link></Lista>
        </Ulfooter>
    </FooterDiv>
  )
}
