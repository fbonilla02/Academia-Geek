import React from "react";
import styled from "styled-components";
import { MdKeyboardArrowRight } from "react-icons/md";

const Button = styled.button`
background-color: #f2f2f2;
border: none;
border-radius: 15px;
font-weight: 400;
width: 100%;
padding: 15px 56px;
font-size: 18px;
font-family: 'Roboto', sans-serif;
display: flex;
align-items: center;
justify-content: space-between;
cursor: pointer;
`

const Center = styled.div`
display: flex;
align-items: center;
gap: 10px;
`


const ButtonEdit = ({text = 'uwu', stile = ' ',onPress})=>{
    
    return(
        <>{
           <Button onClick={onPress}><Center>{stile} {text}</Center> <MdKeyboardArrowRight/> </Button>
        }
        </>

    )
}



export default ButtonEdit