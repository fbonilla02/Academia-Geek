import { contenido } from "../data/data.js";
import { leak } from "./leak.js";
import { mostrarContenido } from "../module/contenido.js";


const content = document.getElementById('content');
const xd = JSON.parse(localStorage.getItem('xd'))

let videoNuevo = JSON.parse(localStorage.getItem('newVideo'))

//carga todo el contenido 
window.onload = () => {
    mostrarContenido( content, contenido);

}


//botones leak
const btnLeak = document.getElementById('btnLeak');
leak(contenido,btnLeak)

//contenido


//validacion si existe algun dato en localStorage que se llame newVideo
if (videoNuevo !== null) {
    //muestro el video nuevo
    contenido.push(videoNuevo)
}



const todos = document.getElementById('todos')

    todos.addEventListener('click', () =>{

        mostrarContenido( content, contenido);
    });


//tener info del video seleccionado
document.addEventListener('click', ({target}) =>{
    if (target.classList.contains('video')) {
        
        let idCarta = target.id;
        let carta = contenido.find(item => item.id == idCarta);
        localStorage.setItem('Reproduciendo', JSON.stringify([carta]))
        let indice = contenido.indexOf(carta);
        console.log(indice);
        contenido.splice(indice, 1);
        mostrarContenido(content, contenido)
        localStorage.setItem('xd', JSON.stringify(contenido))
        console.log(indice);
    }
})
;


//filtro

    //programacion
const programacion = document.getElementById('programacion')
    programacion.addEventListener('click', () =>{

        const filtro =  contenido.filter((value) => value.category === "programacion" );
        mostrarContenido(content, filtro)
    });

    const juegos = document.getElementById('juegos')
    juegos.addEventListener('click', () => {
        const filtro =  contenido.filter((value) => value.category === "juegos" );
        console.log(filtro);

        mostrarContenido(content, filtro)

    })
    const musica = document.getElementById('musica')
    musica.addEventListener('click', () =>{
        const filtro =  contenido.filter((value) => value.category === "musica" );
        console.log(filtro);

        mostrarContenido(content, filtro)

    })

