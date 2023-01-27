import styled from "styled-components";



export const DivTimer = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
gap: 20px;
`
export const ArticleTime = styled.article`
background-color: hsl(236, 21%, 26%);

color:  hsl(345, 95%, 68%);
font-weight: 700;
font-size: 20px;
padding: 20px 15px;
width: 60px;
border-radius: 10px;
box-shadow: -1px 9px 0px 0px rgba(0,0,0,0.75);

@media(min-width: 768px) {
    font-size: 50px;
    width: 100px;
}
`

export const Ptime = styled.p`
margin-top: 15px;
color: hsl(237, 18%, 59%);
font-size: 12px;
font-weight: 500;
`