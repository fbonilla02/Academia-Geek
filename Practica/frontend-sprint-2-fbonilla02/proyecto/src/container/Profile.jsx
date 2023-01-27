import React from 'react'
import ButtonEdit from '../components/ButtonEdit'
import { CenterPro, LogoDiv, ProfileBut } from '../styles/ProfileStyle'
import { BsPerson,BsGlobe,BsTelephone } from "react-icons/bs";
import { TbWallet } from "react-icons/tb";
import { IoLocationSharp } from "react-icons/io5";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import profile from "../img/Profileimg.png"
import { useNavigate } from 'react-router-dom';



export default function Profile() {
    const BsPersona = <BsPerson/>
    const card = <TbWallet/>
    const leng = <BsGlobe/>
    const loc = <IoLocationSharp />
    const Faq = <AiOutlineQuestionCircle />
    const tel = <BsTelephone />
    let navigate = useNavigate();
  const editProfile = () =>{
    let path = `EditProfile`;
    navigate(path);
  }
  const payment = ()=>{let path = `EditPayment`; navigate(path)
  }
  const lenguage = ()=>{let path = `Lenguage`;navigate(path)
  }
  const location = () => {let path = `Location`; navigate(path)}
  const faq = () =>{let path = `Faq`; navigate(path)}
  const supp = () =>{let path = `supp`; navigate(path)}
  return (

<div>
    <CenterPro>
        <LogoDiv>
            <img src={profile}/>
            <p>Jenny Wilson</p>
        </LogoDiv>

       <ProfileBut>
       
            <ButtonEdit onPress={editProfile} stile={BsPersona} text='Acount edit'/>
            <ButtonEdit onPress={payment} stile={card} text='Payment'/>
            <ButtonEdit onPress={lenguage}  stile={leng} text='Lenguage'/>
            <ButtonEdit onPress={location} stile={loc} text='Location'/>
            <ButtonEdit onPress={faq}  stile={Faq} text='FAQ'/>
            <ButtonEdit onPress={supp} stile={tel} text='Support'/>
       </ProfileBut>

    </CenterPro>
</div>
  )
}
