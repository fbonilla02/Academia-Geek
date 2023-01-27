
import React from "react"
import styled from "styled-components"


export const ButtonW = styled.button`
    padding:  10px 15px;
    background-color: #fff;
    border: 1px solid #ccc;
    border-radius: 8px;
    margin-left: 4px;
`

const WhiteBtn = ({text = "hola"}) =>{
    return(
        <>

            <ButtonW>{text}</ButtonW>
        </>

    )
}

export default WhiteBtn;