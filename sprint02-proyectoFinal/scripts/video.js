
const vidlist = JSON.parse(localStorage.getItem('Reproduciendo'))
const xd = JSON.parse(localStorage.getItem('xd'))


const rightVideos = document.getElementById('right-videos')
rightVideos.innerHTML = ""
xd.forEach(function(value){

    const { avatar, channel, date, img, nameVideo, views, video  } = value
    rightVideos.innerHTML += `
    <article class="video-container">
            <img src="${img}" alt="video" class="video">
            <div class="description-container">
                <img src="${avatar}" alt="avatar" class="channel"></a>
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
