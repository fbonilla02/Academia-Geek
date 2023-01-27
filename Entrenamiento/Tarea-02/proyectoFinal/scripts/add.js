
const form = document.getElementById('form');

form.onsubmit = (e) =>{
    e.preventDefault();
const name = document.getElementById('name').value;
const publicado = document.getElementById('publisher').value;
const views = document.getElementById('views').value;
const date = document.getElementById('date').value;
const poster = document.getElementById('poster').value;
const categoria = document.getElementById('categoria').value;
const randomid = Math.floor(Math.random() * 100) + 31;




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

            const newContenido = {
                nameVideo: name,
                channel: publicado,
                views: views ,
                date: date,
                category: categoria,
                img: poster,
                avatar: "../img/Avatar.svg",
                id : randomid,
            }

            localStorage.setItem('newVideo', JSON.stringify(newContenido))
            }

}

