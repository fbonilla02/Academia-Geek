import { contenido } from "../data/data.js"
import { mostrarContenido } from "../module/contenido.js"

const vidlist = JSON.parse(localStorage.getItem('Reproduciendo'))
const xd = JSON.parse(localStorage.getItem('xd'))


const rightVideos = document.getElementById('right-videos')
rightVideos.innerHTML = ""
xd.forEach(function(value){

    const { avatar, channel, date, img, nameVideo, views, video, id  } = value
    rightVideos.innerHTML += `
    <article class="video-container">
    <a href="../pages/video.html"> <img src="${img}" alt="video" class="video" id="${id}"></a>
            <div class="description-container">
            <img src="${avatar}" alt="avatar" class="channel">
                <p>${nameVideo}</p>
                <p>${channel}</p>
                <p>${views} views- ${date}</p>
            </div>
        </article>`;
});




const videoDescription = document.getElementById('container');
videoDescription.innerHTML = ""
    vidlist.forEach(function(value){
        const { avatar, channel, date, img, nameVideo, views, video  } = value
        videoDescription.innerHTML = `
        <video preload="auto" class="video" poster="${img}" controls>
        <source src="${video}">
    </video>
    <div class="description-container">
        <img src="${avatar}" alt="avatar" class="channel"></a>
        <p>${nameVideo}</p>
        <p>${channel}</p>
        <p>${views} vistas - ${date}</p>
    </div>`;
    });



    document.addEventListener('click', ({target}) =>{
        if (target.classList.contains('video')) {
            let idCarta = target.id;
            let carta = contenido.find(item => item.id == idCarta);
            localStorage.setItem('Reproduciendo', JSON.stringify([carta]))
            let indice = contenido.indexOf(carta);
            contenido.splice(indice, 1);
            mostrarContenido(rightVideos, contenido)
            localStorage.setItem('xd', JSON.stringify(contenido))
        }
    });
