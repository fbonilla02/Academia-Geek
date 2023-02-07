import React from 'react'
import styled from 'styled-components'
import List from '../components/List'

const UlCompanies = styled.ul`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 30px;
    list-style: none;
    padding: 20px;
    gap: 40px;
    font-weight: 300;
    
    @media(max-width: 768px){
        display: grid;
        grid-template-columns: 1fr 1fr;
        justify-items: center;
        
    }
`


export default function CompaniesList() {
  return (

    <UlCompanies>
        <li >Trusted by the world's <br/> leading companies</li>
        <List img='https://res.cloudinary.com/dz6w87mmx/image/upload/v1675704220/Aerial/HAREE_czyrvw.png' alt='Haree' />
        <List img='https://res.cloudinary.com/dz6w87mmx/image/upload/v1675704220/Aerial/JOBQO_l0n45x.png' alt='Jobqo'/>
        <List img='https://res.cloudinary.com/dz6w87mmx/image/upload/v1675704220/Aerial/logo_perman_tiefam.png' alt='perman'/>
    <List img='https://res.cloudinary.com/dz6w87mmx/image/upload/v1675704220/Aerial/logo_jobona_cenbp3.png' alt='jobona'/>
        <List img='https://res.cloudinary.com/dz6w87mmx/image/upload/v1675704220/Aerial/logo_workctrl_vinqra.png' alt='workctrl'/>

    </UlCompanies>
  )
}
