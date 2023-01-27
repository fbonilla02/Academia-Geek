export const Getdata = function (data,container) {
    container.innerHTML = ""
    data.forEach(element => {
        const {comida, description, img, promedio} = element

    container.innerHTML += `
    <div class="">
    <img src="${img}" alt="">
        <div class="bgcolor">
        <div class="starts">
            <img src="./images/users.png" alt="">
            <i class="fa-solid fa-star  fa-2xl"></i>
            <p>(${promedio})</p>
        </div>
        <div class="kebac-text">
            <h3>${comida}</h3>
            <p>${description}</p>
        </div>
        <button>Order Now</button>
        </div>
    </div>
    `;
    });
}

