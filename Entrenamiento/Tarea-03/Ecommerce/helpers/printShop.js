export function printShop(data, container){
    container.innerHTML = ''
    data.forEach((element) => {
        const {id, name, img, price } = element
        const div = document.createElement("div")
        div.classList.add('productos')
        div.innerHTML = `<a href="../pages/detail.html"><img src="${img}" alt="" id="${id}"  class="video"></a>
        <p>${name}</p>
        <p>$ ${price}</p>`;
        container.appendChild(div);
    });
}
