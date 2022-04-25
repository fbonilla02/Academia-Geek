export function mostrarContenido(content, contenido){
    content.innerHTML = ""
    contenido.forEach(function(value){
        const { avatar, channel, date, img, nameVideo, views  } = value
        content.innerHTML += `<article class="video-container" id="content">
        <a href="../pages/video.html"><img src="${img}" alt="video" class="video"></a>
        <div class="description-container">
            <img src="${avatar}" alt="avatar" class="channel">
            <p>${nameVideo}</p>
            <p>${channel}</p>
            <p>${views}- ${date}</p>
        </div>
    </article>`;
    });
    return false;
}
