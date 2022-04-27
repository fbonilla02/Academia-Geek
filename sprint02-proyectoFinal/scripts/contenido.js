export function mostrarContenido(content, contenido){
    content.innerHTML = ""

    contenido.forEach((value)=>{
        const { avatar, channel, date, img, nameVideo, views, id  } = value
        content.innerHTML += `<article class="video-container" >
        <a href="./pages/video.html"><img src="${img}" alt="video" class="video" id="${id}"></a>
        <div class="description-container">
            <img src="${avatar}" alt="avatar" class="channel">
            <p>${nameVideo}</p>
            <p>${channel}</p>
            <p>${views}- ${date}</p>
        </div>
    </article>`;
    
    });
}
