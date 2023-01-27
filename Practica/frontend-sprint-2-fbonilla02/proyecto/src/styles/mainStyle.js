import styled from "styled-components";

export const CenterC = styled.div`
padding: 20px 10px;


`
export const Deliver = styled.div`
display: flex;
align-items: center;

`
export const To = styled.p`
font-size: 12px;
color: #ffe031;
`
export const ImgSlide = styled.img`
margin: 0px 10px;
`

export const SlideDiv = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    padding-left: 28px;
    margin: 10px 0px;
    height: 80px;
    width: 100%;
    overflow-x: auto;/*auto hidden*/
    overscroll-behavior-x: contain;
    scroll-snap-type: x proximity;
`

export const Button = styled.button`
    background-color: #f2f2f2;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 8px;
    border-radius: 5px;
    color: #6C6C6C;
    border: 0px;
    padding: 10px;
    min-width: 120px;
`

export const ImgU = styled.img`
clip-path: polygon(0% 0%,100% 0%,75% 100%,0% 100%);
border-top-right-radius: 25px;

`
export const Article = styled.article`
display: flex;
padding: 0px 10px;
margin-top: 20px;
justify-content: space-evenly;
cursor: pointer;
text-decoration: none;
`
export const InfoT = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: flex-start;
`
export const SecPro = styled.section`
display: grid;
grid-template-columns: repeat(auto-fill, minmax(min(100%, 10rem), 1fr));
margin-top: 20px;
gap: 20px;
`
export const ArtDiv = styled.article`

display: flex;
flex-direction: column;


`
