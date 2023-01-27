import React from "react";
import styled from "styled-components";


const Button = styled.button`
background-color: #ffe031;
border: none;
border-radius: 20px;
font-weight: 400;
width: ${props => props.fullWidth ? "100%" : "auto"};
padding: 18px 56px;
font-size: 16px;
font-family: 'Roboto', sans-serif;
`



const ButtonYellow = ({text = 'next', stile = false})=>{
    return(
        <>{
            stile
                ?
                <Button fullWidth>{text}</Button>
                :
                <Button>{text}</Button>
        }

        </>
        
    )
}



export default ButtonYellow