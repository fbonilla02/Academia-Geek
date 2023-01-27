import { footerbar } from "../modules/footer.js";
import { navBar } from "../modules/navbar.js";
import { getData } from "../helpers/getData.js";
const footerContainer = document.getElementById('containerFooter')
const navbarContainer = document.getElementById('navContainer')
const totalid = document.getElementById('totalmain')
document.addEventListener('DOMContentLoaded', async ()=>{
navBar(navbarContainer)
footerbar(footerContainer)

    const datos = await getData('products')

    totalid.innerHTML = ""
    datos.forEach(element => {
        const {img, name, price, id } = element
    totalid.innerHTML += `
    <section class="contenido">
    <img id="${id}" src="${img}" class="video" alt="">
    <div class="dellates" >
    <p>${name}</p>
    <p></p>
    <p></p>
    </div>
    <div class="subtotal">
        <p>precio:</p>
        <p>$${price}</p>
        <button class="buttonDelete" id="${id}" >Eliminar</button>
    </div>
</section>`;
    });

document.addEventListener('click',({target})=>{
    if(target.classList.contains('buttonDelete')){
        let id = target.id;
        fetch(`https://ecommerce-fbonilla.herokuapp.com/products/${id}`,{
            method: "DELETE",
            header:{
                "content-type": "application/json"
            }
        })
        .then(()=>{
            alert("Elemento Eliminado")
            window.location.reload()
        })
    }

})
});

document.addEventListener('click', ({target}) =>{
    if(target.classList.contains('video')){
        let id = target.id;
        localStorage.setItem('idCharacter', id)

        window.location.href = '../pages/detail.html';
    }

})