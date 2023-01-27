import React from 'react'
import { ButtonB, DivCompanie, DivDesc, DivImg, DivInfo, DivInfoContent, DivInput, DivLeader, DivMainDos, FormUno, H2, Input1, PCompanie, PText } from '../style/StylesGlobal'

export default function MainDos() {
  return (
    <DivMainDos>
        <DivCompanie>
            <PCompanie>Trusted by the world's leading companies</PCompanie>
            <DivImg>
            <img src='https://res.cloudinary.com/dixwwvzbt/image/upload/v1653617119/sprint2Reto1/HAREE_gwnk5q.png'/>
            <img src='https://res.cloudinary.com/dixwwvzbt/image/upload/v1653617119/sprint2Reto1/JOBQO_ncl1fx.png'/>
            <img src='https://res.cloudinary.com/dixwwvzbt/image/upload/v1653617119/sprint2Reto1/logo_perman_lmusgn.png'/>
            <img src='https://res.cloudinary.com/dixwwvzbt/image/upload/v1653617119/sprint2Reto1/logo_jobona_n4ycne.png'/>
            <img src='https://res.cloudinary.com/dixwwvzbt/image/upload/v1653617119/sprint2Reto1/logo_workctrl_bpued5.png'/>
            </DivImg>
        </DivCompanie>
        <DivInput>
            <H2>Search for your area of interest</H2>
            <p>Please enter your desired indrustry, job title, and skills</p>
            <FormUno>
                <Input1 placeholder='enginner, Internet and Web Industry'/>
                <ButtonB>search</ButtonB>
            </FormUno>
        </DivInput>
        
        <DivInfo>
            <DivInfoContent>
                <p>Leader of iOS engineers for mobility services</p>
                <DivLeader>
                <DivDesc>
                    <img src='https://res.cloudinary.com/dixwwvzbt/image/upload/v1653617119/sprint2Reto1/Vector_ocyjzt.svg'/>
                    <PText>California</PText>
                </DivDesc>
                <DivDesc>
                    <img src='https://res.cloudinary.com/dixwwvzbt/image/upload/v1653617119/sprint2Reto1/Vector-1_z1dlld.svg'/>
                    <PText>Engineer</PText>
                </DivDesc>
                </DivLeader>
            </DivInfoContent>
            <DivInfoContent>
                <p>Candidate for Sales Manager of HR-related services</p>
                <DivLeader>
                <DivDesc>
                    <img src='https://res.cloudinary.com/dixwwvzbt/image/upload/v1653617119/sprint2Reto1/Vector_ocyjzt.svg'/>
                    <PText>Oregon</PText>
                </DivDesc>
                <DivDesc>
                    <img src='https://res.cloudinary.com/dixwwvzbt/image/upload/v1653617119/sprint2Reto1/Vector-1_z1dlld.svg'/>
                    <PText>Sales Manager</PText>
                </DivDesc>
                </DivLeader>
            </DivInfoContent>
            <DivInfoContent>
                <p>Head of marketing for electronic payment services</p>
                <DivLeader>
                <DivDesc>
                    <img src='https://res.cloudinary.com/dixwwvzbt/image/upload/v1653617119/sprint2Reto1/Vector_ocyjzt.svg'/>
                    <PText>Florida</PText>
                </DivDesc>
                <DivDesc>
                    <img src='https://res.cloudinary.com/dixwwvzbt/image/upload/v1653617119/sprint2Reto1/Vector-1_z1dlld.svg'/>
                    <PText>Marketer</PText>
                </DivDesc>
                </DivLeader>
            </DivInfoContent>
            <DivInfoContent>
                <p>CFO of a semiconductor manufacturing company</p>
                <DivLeader>
                <DivDesc>
                    <img src='https://res.cloudinary.com/dixwwvzbt/image/upload/v1653617119/sprint2Reto1/Vector_ocyjzt.svg'/>
                    <PText>Texas</PText>
                </DivDesc>
                <DivDesc>
                    <img src='https://res.cloudinary.com/dixwwvzbt/image/upload/v1653617119/sprint2Reto1/Vector-1_z1dlld.svg'/>
                    <PText>CFO</PText>
                </DivDesc>
                </DivLeader>
            </DivInfoContent>
        </DivInfo>
    </DivMainDos>
  )
}
