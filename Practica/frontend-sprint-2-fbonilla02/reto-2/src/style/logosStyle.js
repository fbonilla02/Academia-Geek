import styled from "styled-components";
import picos from '../img/pattern-hills.svg'


export const DivConteinter = styled.div `

font-size: 25px;
background-image: url(${picos});
background-position: bottom;
background-size: cover;
background-repeat: no-repeat;
display: flex;
justify-content: center;
align-items: center;
`
export const UlLogos = styled.ul`
display: flex;
gap: 20px;
justify-content: center;
`
export const List = styled.li`
margin-top: 100px;
list-style: none;
&:hover{
    color:  hsl(345, 95%, 68%);
}
`