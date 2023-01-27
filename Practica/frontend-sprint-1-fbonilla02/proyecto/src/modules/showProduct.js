const ShowProductos = (data, container ) =>{
    container.innerHTML = ""
    data.forEach(element => {
        const {name, id,img, location,type, to, price, beds, baths, size} = element
    container.innerHTML += `

    <article class="bg-white relative " >
    <img class="w-full cursor-pointer show-modal" src="${img}" alt="imagen" id="${id} ">
    <p class="relative left-4 -top-56 px-2 w-20 text-center bg-color-green text-white">For ${to}</p>
    <p class="relative left-4 -top-20 w-36 text-2xl text-white">$${price}/mo</p>
    <div class="flex flex-col relative -top-10 px-8 ">
        <p class="text-color-green">${type}</p>
        <p class="text-xl py-3 ">${name}</p>
        <p><i class="fa-solid fa-location-dot"></i> ${location}</p>
        <div class="flex  justify-between pt-5">
            <p><i class="fa-solid fa-bed text-color-green pr-1"></i> Beds ${beds}</p>
            <p><i class="fa-solid fa-bath text-color-green pr-1"></i>Baths ${baths}</p>
            <p><i class="fa-solid fa-maximize text-color-green pr-1"></i>${size} Sqft</p>
        </div>
    </div>

</article>`;
    
    });
}

export default ShowProductos;