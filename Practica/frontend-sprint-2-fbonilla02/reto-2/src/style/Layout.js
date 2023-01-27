import styled from "styled-components";
import starts from '../img/bg-stars.svg'


export const Layout = styled.div`
text-align: center;
background-color:   hsl(235, 16%, 14%);
background-image: url(${starts});
background-position: bottom;
background-repeat: no-repeat;
height: 100vh;
width: 100vw;
color: white;
display: grid;
grid-template-rows: 1fr 1fr 1fr ;
`
export const TextH1 = styled.h1`
text-align: center;
display: flex;
justify-content: center;
align-items: center;

`