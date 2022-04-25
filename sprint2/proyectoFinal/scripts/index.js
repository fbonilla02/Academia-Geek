import { contenido } from "../data/data.js";
import { leak } from "./leak.js";
import { mostrarContenido } from "./contenido.js";


const content = document.getElementById('content');


//botones leak
const btnLeak = document.getElementById('btnLeak');
leak(contenido,btnLeak)

//contenido
mostrarContenido( content, contenido);


const todos = document.getElementById('todos')
    todos.addEventListener('click', (e) =>{
        
        mostrarContenido( content, contenido);
    });
const programacion = document.getElementById('programacion')
    programacion.addEventListener('click', (e) =>{
        const filtro =  contenido.filter((value) => value.category === "programacion" );
        console.log(filtro);
        content.innerHTML = '';
        filtro.forEach((value)=>{
                    const { avatar, channel, date, img, nameVideo, views  } = value
                    content.innerHTML +=`
                    <article class="video-container">
                    <a href="../pages/video.html"><img src="${img}" alt="video" class="video"></a>
                    <div class="description-container">
                        <img src="${avatar}" alt="avatar" class="channel">
                        <p>${nameVideo}</p>
                        <p>${channel}</p>
                        <p>${views}- ${date}</p>
                    </div>
                </article>
                    `;
                })
    });
    const juegos = document.getElementById('juegos')
    juegos.addEventListener('click', () => {
        const filtro =  contenido.filter((value) => value.category === "juegos" );
        console.log(filtro);
        content.innerHTML = '';
        filtro.forEach((value)=>{
                    const { avatar, channel, date, img, nameVideo, views  } = value
                    content.innerHTML +=`
                    <article class="video-container">
                    <a href="../pages/video.html"><img src="${img}" alt="video" class="video"></a>
                    <div class="description-container">
                        <img src="${avatar}" alt="avatar" class="channel">
                        <p>${nameVideo}</p>
                        <p>${channel}</p>
                        <p>${views}- ${date}</p>
                    </div>
                </article>
                    `;
                })
    })
    const musica = document.getElementById('musica')
    musica.addEventListener('click', () =>{
        const filtro =  contenido.filter((value) => value.category === "musica" );
        console.log(filtro);
        content.innerHTML = '';
        filtro.forEach((value)=>{
                    const { avatar, channel, date, img, nameVideo, views  } = value
                    content.innerHTML +=`
                    <article class="video-container">
                    <a href="../pages/video.html"><img src="${img}" alt="video" class="video"></a>
                    <div class="description-container">
                        <img src="${avatar}" alt="avatar" class="channel">
                        <p>${nameVideo}</p>
                        <p>${channel}</p>
                        <p>${views}- ${date}</p>
                    </div>
                </article>
                    `;
                })
    })

