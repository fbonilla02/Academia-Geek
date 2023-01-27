import React from 'react'
import WhiteBtn from '../containers/WhiteButton'
import { ButtonG, DivCards, DivCardsCont, DivMainUno, HMain, LeftMain, PMain, PText } from '../style/StylesGlobal'

export default function MainUno() {
  return (
    <DivMainUno>
        <LeftMain>
        <HMain>We support your challenge in new areas.</HMain>
        <PMain>Our highly qualified headhunters, who have passed a rigorous screening process, will introduce you to your new career opportunity.</PMain>
        <div>
        <ButtonG>Try it Free</ButtonG>
        <WhiteBtn text="Explore" />

        </div>
        </LeftMain>

        <DivCardsCont>
            
            <DivCards>
                <img src='https://res.cloudinary.com/dixwwvzbt/image/upload/v1653617119/sprint2Reto1/Ellipse_1-1_gwqqe2.png'/>
                <h3>Felicity Belle Amis</h3>
                <p>Work Joe</p>
                <PText>Leave it to us to change jobs for designers!</PText>
            </DivCards>
            <DivCards>
                <img src='https://res.cloudinary.com/dixwwvzbt/image/upload/v1653617119/sprint2Reto1/Ellipse_1-4_xo8fsj.png'/>
                <h3>Thelma Nicks</h3>
                <p>Career Tweak</p>
                <PText>We have a marketer position for you.</PText>
            </DivCards>
            <DivCards>
                <img src='https://res.cloudinary.com/dixwwvzbt/image/upload/v1653617119/sprint2Reto1/Ellipse_1_erhfjm.png'/>
                <h3>Arman Weight</h3>
                <p>rjob</p>
                <PText>I specialize in helping engineers change jobs.</PText>
            </DivCards>
            <DivCards>
                <img src='https://res.cloudinary.com/dixwwvzbt/image/upload/v1653617119/sprint2Reto1/Ellipse_1-3_from6j.png'/>
                <h3>Arman Weight</h3>
                <p>HIGHREACH</p>
                <PText>I can help you with the medical industry.</PText>
            </DivCards>
            <DivCards>
                <img src='https://res.cloudinary.com/dixwwvzbt/image/upload/v1653617119/sprint2Reto1/Ellipse_1-5_geyxvx.png'/>
                <h3>Earl Dunst</h3>
                <p>housy</p>
                <PText>We have a number of CTO positions available.</PText>
            </DivCards>
            <DivCards>
                <img src='https://res.cloudinary.com/dixwwvzbt/image/upload/v1653617119/sprint2Reto1/Ellipse_1-2_widhhc.png'/>
                <h3>Ludovic Dane</h3>
                <p>SHIF GUYS</p>
                <PText>We specialize in construction related jobs.</PText>
            </DivCards>

        </DivCardsCont>

    </DivMainUno>
  )
}
