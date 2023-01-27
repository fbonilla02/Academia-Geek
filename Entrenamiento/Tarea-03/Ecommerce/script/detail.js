import { footerbar } from "../modules/footer.js";
import { navBar } from "../modules/navbar.js";
import {getDataById } from "../helpers/getDataById.js"
const navbarContainer = document.getElementById('navContainer')
const footerContainer = document.getElementById('containerFooter')
let sectionMain = document.getElementById('main')


document.addEventListener('DOMContentLoaded', async()=>{
    navBar(navbarContainer)
    footerbar(footerContainer)

    let idCharacter = localStorage.getItem('idCharacter');
    let infoCharacter = await getDataById(idCharacter);

    const {img, name, price, descripcion} = infoCharacter
    sectionMain.innerHTML = `
    <div class="imagen">
            <img src="${img}" alt="">
        </div>
        <div class="contenido">
            <h1>${name}</h1>
            <h3>$ ${price}</h3>
            <p>${descripcion}</p>
            <p>cantidad</p>
            <div class="cuanto">
                <input type="number" placeholder="1">
                <button>Agregar al carro</button>
            </div>
        </div>`
})


