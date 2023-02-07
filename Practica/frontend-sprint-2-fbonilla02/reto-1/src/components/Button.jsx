import React from 'react'
import styled from 'styled-components'



const ButtonStyled = styled.button.attrs(props =>({
  color: props.color || '#000',
  border:  props.border || '#CCCCCC' ,
  backgroundColor: props.backgroundColor || '#fff'
}))`
  padding: 8px 15px;
  border-radius: 5px;
  color:  ${props => props.color};
  border: solid 1px ${props => props.border};
  background-color: ${props => props.backgroundColor};
`



export default function Button({text, color, border, backgroundColor }) {
  return (
    <ButtonStyled color={color} backgroundColor={backgroundColor} border={border}>{text}</ButtonStyled>
  )
}
