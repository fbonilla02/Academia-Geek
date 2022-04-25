import { contenido } from "../data/data.js";
import { mostrarContenido } from "./contenido.js";


const content = document.getElementById('content');


mostrarContenido( content, contenido);

const videoDescription = document.getElementById('container');

videoDescription.innerHTML = ""
    contenido.forEach(function(value){
        const { avatar, channel, date, img, nameVideo, views  } = value
        videoDescription.innerHTML = `
        <video preload="auto" class="video" poster="${img}" controls>
        <source src="../videos/wos-Arrancamelo.mp4">
    </video>
    <div class="description-container">
        <img src="${avatar}" alt="avatar" class="channel"></a>
        <p>${nameVideo}</p>
        <p>${channel}</p>
        <p>${views} vistas - ${date}</p>
    </div>`;
    });
