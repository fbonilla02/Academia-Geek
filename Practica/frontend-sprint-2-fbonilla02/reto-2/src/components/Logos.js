import React from "react"
import { FaFacebookSquare, FaPinterest, FaInstagram } from 'react-icons/fa';
import { DivConteinter, List, UlLogos } from "../style/logosStyle";
export default function Logos(){
    return (
        <DivConteinter>
        <UlLogos>
            <List><FaFacebookSquare  /></List>
            <List><FaPinterest /></List>
            <List><FaInstagram /></List>
            </UlLogos>
        </DivConteinter>
    )

}