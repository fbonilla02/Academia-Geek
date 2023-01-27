import "../css/style.css";
import GetData from '../helpers/getData.js';
import ShowProductos from '../modules/showProduct.js';
import { ShowAllProductos } from "../modules/showAllProductos";
import search from "../modules/search";
import ShowLiked from "../modules/showLiked";
import ShowData from "../modules/showdata";
import DeleteData from "../helpers/DeleteData";
const contenido = document.getElementById('contenido')
const modal = document.querySelector('.modal');
const closeModal = document.querySelectorAll('.close-modal');
const infoModal = document.getElementById('infoModal')
const cart = document.getElementById('cart')
const fav = document.getElementById('fav')
//localstorage
const favLocal = JSON.parse(localStorage.getItem('fav'))
let cartLocal = JSON.parse(localStorage.getItem('cart'))
let cartaData = cartLocal ? cartLocal : [];
let favData =  favLocal ? favLocal : [];
const user = document.getElementById('User')

//nav values
const navFav = document.querySelector('.nav-fav')
const navCart = document.querySelector('.nav-cart')
const navFavid  = document.getElementById('nav-fav')
const navCardid  = document.getElementById('nav-cart')



document.addEventListener('DOMContentLoaded', async() =>{


    const products = await GetData()
    ShowProductos(products, contenido)

  //PINTAR NAV FAVORITO Y CART
  navFav.innerHTML =  favData.length;
  navCart.innerHTML = cartaData.length;



  if( !cartaData.length == 0 ){
    navCart.classList.add('active')
    navCardid.classList.add('border-green')
  }
  if(!favData.length == 0){
    navFav.classList.add('active')
    navFavid.classList.add('border-green')
  }



})

//fav

const modalfav = document.querySelector('.modalfav');
const closeModalfav = document.querySelectorAll('.close-modalfav');
const infoModalfav= document.getElementById('infoModalfav')


navFavid.addEventListener('click', ()=>{
  modalfav.classList.remove('hidden')
     
  ShowLiked(infoModalfav, favLocal)
    //CERRAR EL MODAL

    infoModalfav.addEventListener('click', ({target})=>{
      if(target.classList.contains('fa-trash-can')){
        let idcarta = Number(target.id);
        let carta = favLocal.map(e => e.id).indexOf(idcarta)

        console.log(carta);
        console.log(favLocal.splice(carta, 1));
        ShowLiked(infoModalfav, favLocal)
        localStorage.setItem('fav', JSON.stringify(favLocal))

        
      }
    })
    
  closeModalfav.forEach(close => {
    close.addEventListener('click', function (){
    modalfav.classList.add('hidden')
    location.reload()
  });
});
})


//CART
navCardid.addEventListener('click', ()=>{
  modalfav.classList.remove('hidden')
  
  ShowLiked(infoModalfav, cartLocal)

  infoModalfav.addEventListener('click', ({target})=>{
    if(target.classList.contains('fa-trash-can')){
      let idcarta = Number(target.id);
      let carta = cartLocal.map(e => e.id).indexOf(idcarta)

      console.log(carta);
      console.log(cartLocal.splice(carta, 1));
      ShowLiked(infoModalfav, cartLocal)
      localStorage.setItem('cart', JSON.stringify(cartLocal))

      
    }
  })


  closeModalfav.forEach(close => {
    close.addEventListener('click', function (){
      modalfav.classList.add('hidden')
      location.reload()
    });
  });
})


// FILTRO BOTONES
const todos = document.querySelectorAll("[id='todos']")
const filtroC = document.querySelectorAll("[id='filtroC']")

filtroC.forEach((cli) =>{

  cli.addEventListener('click', async () => {
    const products = await GetData()
    const  tipo =  cli.innerText;
    const str = tipo.replace(/[^a-zA-Z0-9]/g, '');

    if(str == 'ParkingSpeace'){
      const filtro = products.filter(dato =>  dato.ParkingSpeace == 'yes' )
      ShowProductos(filtro, contenido)
     } else if(str == 'SwimmingPool'){
      const filtro = products.filter(dato =>  dato.SwimmingPool == 'yes' )
      ShowProductos(filtro, contenido)
     }else if (str == 'PrivatSecurity') {
      const filtro = products.filter(dato =>  dato.PrivatSecurity == 'yes' )
      ShowProductos(filtro, contenido)
    }else if(str == 'MedicalCenter'){
      const filtro = products.filter(dato =>  dato.MedicalCenter == 'yes' )
      ShowProductos(filtro, contenido)
    }else if(str == 'LibraryArea'){
      const filtro = products.filter(dato =>  dato.LibraryArea == 'yes' )
      ShowProductos(filtro, contenido)
    }else if(str == 'KingSizeBeds'){
      const filtro = products.filter(dato =>  dato.KingSizeBeds == 'yes' )
      ShowProductos(filtro, contenido);
    }else if(str == 'SmartHomes'){
      const filtro = products.filter(dato =>  dato.SmartHomes == 'yes' )
      ShowProductos(filtro, contenido)
    }else if(str == 'KidsPlayland'){
      const filtro = products.filter(dato =>  dato.KidsPlayland == 'yes' )
      ShowProductos(filtro, contenido)
    }
  })
})





//SEARCH

const form = document.getElementById('formSearch')
const spanSearch = document.getElementById('spanSearch')
const input = document.getElementById('search')
//input.onkeydown = validacion;





//MODAL LOGIN
const modalnav = document.querySelector('.modalnav');
const closeModalnav = document.querySelectorAll('.close-modalnav');
const infoModalnav = document.getElementById('infoModalnav')

let cuenta = JSON.parse(localStorage.getItem('account'))
const buttonsLogin = document.getElementById('buttonsLogin')


user.addEventListener('click', ()=>{
  modalnav.classList.remove('hidden')
  
  if(cuenta == null){   buttonsLogin.innerHTML = `
  <button id="crear" type="submit" class="bg-blue-500 px-3 py-1 rounded text-white mr-1">Crear Cuenta</button>`}
  
  
  const crear = document.getElementById('crear')
  if(crear){
    crear.addEventListener('click', ()=>{
      
      const name = document.getElementById('name').value
      const email = document.getElementById('email').value
      const pass = document.getElementById('password').value
      
      const  account ={
        name: name,
        email: email,
        password: pass,
    }
    localStorage.setItem('account', JSON.stringify(account))
    alert("Se creo su cuenta exitosamente")
    location.reload()
    })
  }


  //CERRAR EL MODAL
closeModalnav.forEach(close => {
    close.addEventListener('click', function (){
      modalnav.classList.add('hidden')
      location.reload()
    });
  });
})

//Escuchar si se hace click en algun producto
addEventListener('click', async({target})=>{

    if(target.classList.contains('show-modal')){
        let id = target.id;
        const url = `https://proyecto1-sprint1.herokuapp.com/products/${id}`;
        const data = await GetData(url)
        //MODAL
          modal.classList.remove('hidden')
          //Mostrar info del modal
          ShowAllProductos(data, infoModal)
        closeModal.forEach(close => {
          close.addEventListener('click', function (){
            modal.classList.add('hidden')
          });
        });

         //agregar al local storage
          cart.addEventListener('click', ()=>{
          if (!cartaData.includes(data)){
            cartaData.push(data);
          }
            localStorage.setItem('cart', JSON.stringify(cartaData))


        })
        fav.addEventListener('click', ()=>{
          if (!favData.includes(data)  ){
            favData.push(data);
           
          }
          localStorage.setItem('fav', JSON.stringify(favData))
        })
    }
   
})


///CRUD 
const Crud = document.getElementById('Crud')
const modalCrud = document.querySelector('.modalCrud')

const closeModalcrud = document.querySelectorAll('.close-modalCrud');
const infoModalCrud = document.getElementById('infoModalCrud')

Crud.addEventListener('click', async()=>{
  modalCrud.classList.remove('hidden')
  const data = await GetData()
  ShowData(data , infoModalCrud)

  const eliminarCrud = document.querySelectorAll('.eliminar')
 //ELIMINAR
  eliminarCrud.forEach(del =>{ 
    del.addEventListener('click', ({target})=>{
      console.log(target);
      if(target.classList.contains('eliminar')){
        const id = target.id;
        DeleteData(id)
      }

    })
  })

  //EDITAR
  const editarCrud = document.querySelectorAll('.editarCrud')
  editarCrud.forEach(edit =>{
    edit.addEventListener('click', ({target})=>{
      if(target.classList.contains('editarCrud')){
        const id = target.id
        console.log(id);
      }
    })
  })

  closeModalcrud.forEach(close => {
    close.addEventListener('click', function (){
      modalCrud.classList.add('hidden')
    });
  });
})

