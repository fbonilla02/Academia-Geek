import { getData } from "../helpers/getData.js";
import { footerbar } from "../modules/footer.js";
import { navBar } from "../modules/navbar.js";
import { showCards } from "../modules/showCards.js";
const navbarContainer = document.getElementById('navContainer')
const footerContainer = document.getElementById('containerFooter')
const form = document.getElementById('form')
const tarjetCon = document.getElementById('card')


form.addEventListener('submit', async (e)=>{
    e.preventDefault();
    let nameU = document.getElementById('name').value;
    let correo = document.getElementById('correo').value;
    let tarjeta = document.getElementById('tarjeta').value;
    let vencimiento = document.getElementById('vencimiento').value;
    let cvv = document.getElementById('cvv').value;

    if(nameU === '' || correo === '' || tarjeta === '' || vencimiento === '' || cvv === ''){
        Swal.fire(
            'valor vacio',
            'No llenaste todos los campos',
            'warning'
          )
    }else{
        const tarjetaN = {
            name: nameU,
            correo: correo,
            tarjeta: tarjeta,
            expiration: vencimiento,
            cvv: cvv
        }
      
    
        fetch('https://ecommerce-fbonilla.herokuapp.com/infoBuy',{
            method: 'POST',
            body: JSON.stringify(tarjetaN),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        }).then(async () =>{
            alert('se agrego bien')
            window.location.reload();
        })
        .catch(() =>{
            alert("Hubo un error")
        })
        
    }

   

})

document.addEventListener('DOMContentLoaded', async ()=>{
    navBar(navbarContainer)
    footerbar(footerContainer)

    let data = await getData('infoBuy')
    showCards(data, tarjetCon)
})


document.addEventListener('click', ({target}) => {
    if(target.classList.contains('button')){
        let id = target.id;
        fetch(`https://ecommerce-fbonilla.herokuapp.com/infoBuy/${id}`, {
            method: "DELETE",
            header:{
                "Content-type": "application/json"
            }
        })
        .then(() => {
            alert("Elemento eliminado");
            window.location.reload();
        })
    }
})