import { footerbar } from "../modules/footer.js";
import { navBar } from "../modules/navbar.js";
import {getData} from "../helpers/getData.js";
import {printShop } from "../helpers/printShop.js"
const navbarContainer = document.getElementById('navContainer')
const footerContainer = document.getElementById('containerFooter')
const main = document.getElementById('main');
const uno = document.getElementById('uno');
const dos = document.getElementById('dos')
const info = JSON.parse(localStorage.getItem('filtro'))
const color = info.every((value) => value.category === "ropa")



//pintar el que se selecciono anteriormente

if(color == true){
    uno.classList.add('textoR')
}else{
    dos.classList.add('textoR')
}


document.addEventListener('DOMContentLoaded', async ()=>{
    navBar(navbarContainer)
    footerbar(footerContainer)
    let contenido = await getData('products ');

    //filtrar textos
    uno.addEventListener('click', ()=>{
        const filtro =  contenido.filter((value) => value.category === "ropa" );
        uno.classList.add('textoR')
        dos.classList.remove('textoR')
        printShop(filtro, main)
    })

    dos.addEventListener('click', ()=>{
        const filtro =  contenido.filter((value) => value.category === "accesorios" );
        dos.classList.add('textoR')
        uno.classList.remove('textoR')
        printShop(filtro, main)
    })

    printShop(info, main)
})

document.addEventListener('click', ({target}) =>{
    if(target.classList.contains('video')){
        let id = target.id;
        localStorage.setItem('idCharacter', id)

        window.location.href = '../pages/detail.html'
    }

})



