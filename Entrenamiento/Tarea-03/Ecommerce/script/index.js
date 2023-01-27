import {getData} from "../helpers/getData.js";

const ropa = document.getElementById('ropa')
const accesorios = document.getElementById('accesorios')
let contenido = await getData('products');



ropa.addEventListener('click', async ()=>{
    let contenido = await getData('products');
    const filtro =  contenido.filter((value) => value.category === "ropa" );
    localStorage.setItem('filtro', JSON.stringify(filtro))
    window.location.href = '/pages/products.html'

})

accesorios.addEventListener('click', async ()=>{
    let contenido = await getData('products');
    const filtro =  contenido.filter((value) => value.category === "accesorios" );
    localStorage.setItem('filtro', JSON.stringify(filtro))
    window.location.href = '/pages/products.html'
})