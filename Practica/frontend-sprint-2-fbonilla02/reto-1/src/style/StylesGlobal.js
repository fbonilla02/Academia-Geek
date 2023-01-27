import styled from "styled-components"



export const NavbarStyled = styled.nav`
    height: 50px;
    display: flex;
    padding: 0px 20px;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;
    @media(min-width: 768px) {
        justify-content: space-between;
    }
`;
export const UlNav = styled.ul`
    display: none;
    gap: 30px;
    @media(min-width: 768px) {
        display: flex;
    }
`

export const LiNav = styled.li`
    list-style: none;
`


export const DivNav = styled.nav`
display: flex;
gap: 20px;
align-items: center;

`
export const PText = styled.p`
font-weight: 300;
`

export const DivMainUno = styled.div`
display: grid;

padding: 50px 50px;
gap: 10px;

background-image: url('https://res.cloudinary.com/dixwwvzbt/image/upload/v1653696353/sprint2Reto1/Vector_1_uy2sjk.svg');
    background-repeat: no-repeat;
    background-position:  right;
    @media(min-width: 768px) {
        grid-template-columns: 1fr 1fr;
        
    }
`

export const HMain = styled.h1`
font-size: 40px;
margin-bottom: 10px;
`
export const PMain = styled.p`
margin-bottom: 10px;
`
export const LeftMain = styled.div`
padding: 0px 30px;
display: flex;
flex-direction: column;
justify-content: center;

`

export const DivCardsCont = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(min(100%, 15rem), 1fr));
    gap: 20px;
    @media(min-width: 768px) {
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr;
}
`

export const DivCards = styled.div `
padding: 20px 10px;
background-color: white;
display: grid;
justify-items: center;
text-align: center;
border-radius: 10px;
filter: drop-shadow(0 4px 3px rgb(0 0 0 / 0.07)) drop-shadow(0 2px 2px rgb(0 0 0 / 0.06));`

export const DivMainDos = styled.div`
background-color: #fafafa;
padding: 20px 50px;
@media(min-width: 768px) {
    padding: 20px 10px;
}
`
export const DivCompanie = styled.div`
display: flex;
flex-direction: column;
gap: 20px;
margin: 20px 0px;
justify-content: center;
align-content: center;
@media(min-width: 768px) {
    flex-direction: row;
}
`

export const PCompanie = styled.p`
text-align: center;
@media(min-width: 768px) {
    width: 200px;
}
`

export const DivImg = styled.div`
display: flex;
flex-direction: column;
align-items: center;
gap: 20px;
@media(min-width: 768px) {
    flex-direction: row;
}
`
export const H2 = styled.h2`
font-size: 30px;
font-weight: 300;
`
export const Input1 = styled.input`
margin-top: 20px;
padding:  10px 15px;
 @media(min-width: 768px){
    padding:  10px 15px;
    width: 300px;
    margin-right: 10px;
    margin-top: 0px;
}
`


export const DivInput = styled.div`
display: flex;
flex-direction: column;
align-items: center;
`
export const FormUno = styled.form`
display: flex;
flex-direction: column;
align-items: center;

@media(min-width: 768px){
    flex-direction: row;
    margin-top: 10px;
}
`

export const DivInfo = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(min(100%, 15rem), 1fr));
    place-items: center;
    padding: 30px 0px;
    gap: 20px;
    

`
export const DivInfoContent = styled.div`
display: flex;
flex-direction: column;
background-color: white;
filter: drop-shadow(0 4px 3px rgb(0 0 0 / 0.07)) drop-shadow(0 2px 2px rgb(0 0 0 / 0.06));
border-radius: 10px;
padding: 15px;
text-align: center;
align-items: center;
`

export const DivLeader = styled.div`
display: flex;
margin-top: 20px;
gap: 15px;

`
export const DivDesc = styled.div`
display: flex;
gap: 2px;
align-items: center;
`

// BUTTONS
export const ButtonW = styled.button`
    padding:  10px 15px;
    background-color: #fff;
    border: 1px solid #ccc;
    border-radius: 8px;
`

export const ButtonG = styled.button`
padding:  10px 15px;
    background-color: #24b26b;
    border: 1px solid #ccc;
    border-radius: 8px;
    color: white;
`
export const ButtonB = styled.button`
 padding:  10px 20px;
    background-color: #333333;
    border: 1px solid #ccc;
    border-radius: 5px;
    color: #fff;
`

