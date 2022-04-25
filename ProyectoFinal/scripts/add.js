import {contenido } from '../data/data.js'
const form = document.getElementById('form');

let nuevoVideo = JSON.parse(localStorage.getItem('video'));

form.onsubmit = (e) =>{
    e.preventDefault();
const name = document.getElementById('name').value;
const publicado = document.getElementById('publisher').value;
const views = document.getElementById('views').value;
const date = document.getElementById('date').value;
const poster = document.getElementById('poster').value;
const categoria = document.getElementById('category').value;
let todo = document.querySelectorAll('input')
let contenidoNuevo =  JSON.parse(localStorage.getItem('NewVideo'));
let nuevoContent = contenidoNuevo ? contenidoNuevo : []
        if (name === '' || publicado === '' || views === '' || date === '' || poster === '' || categoria === '' ) {
            Swal.fire(
                'Advertencia!',
                'No has rellenado todos los campos!',
                'warning'
                )
        }else{
            Swal.fire(
                'Bien Hecho!',
                'Ya quedo guarda tu información!',
                'success'
            )
            const newArray1 = []
            todo.forEach(element => newArray1.push(element.value))

            let carta = Object.keys(contenido[0])
            let xd = {};
            carta.forEach((key, i) => xd[key] = newArray1[i]);
            console.log(xd);
            
            nuevoContent.push(xd)
            localStorage.setItem('NewVideo', JSON.stringify(nuevoContent))
        }
}

// let carta = Object.keys(contenido[0])
// console.log(carta);

