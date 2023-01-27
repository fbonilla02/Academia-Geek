import { footerbar } from "../modules/footer.js";
import { navBar } from "../modules/navbar.js";
const navbarContainer = document.getElementById('navContainer')
const footerContainer = document.getElementById('containerFooter')
let form = document.getElementById('form')

navBar(navbarContainer)
footerbar(footerContainer)


form.addEventListener('submit', (e)=>{
    e.preventDefault();

    let nameU = document.getElementById('name').value;
    let precio = document.getElementById('precio').value;
    let descrip = document.getElementById('descri').value;
    let imgF = document.getElementById('img').value;
    let categoria = document.getElementById('categoria').value;


    let objProduct = {
        name: nameU,
        price: precio,
        description: descrip,
        img: imgF,
        category: categoria
    }


    fetch('https://ecommerce-fbonilla.herokuapp.com/products',{
        method: 'POST',
        body: JSON.stringify(objProduct),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    }).then(res =>{
        alert("Datos guardados")
        setTimeout(() => {  window.location.reload() }, 1000);
    })
    .catch(() =>{
        alert("Hubo un error")
    })
})