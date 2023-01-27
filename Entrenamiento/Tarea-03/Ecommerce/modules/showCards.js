export const showCards = (arr, cont) =>{
    cont.innerHTML = "";
    arr.forEach(element  => {
        const { name, correo, tarjeta, expiration, cvv, id} = element
        cont.innerHTML += `
        <div class="tarjetas-container">
            <p>${name}</p>
            <p>${correo}</p>
            <p>${tarjeta}</p>
            <p>fecha: ${expiration}</p>
            <p>cvv: ${cvv}</p>
            <button id="${id}" class="button">borrar</button>
        </div>`;
    });

}