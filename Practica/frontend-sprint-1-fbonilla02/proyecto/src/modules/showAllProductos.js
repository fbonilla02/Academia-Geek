export const ShowAllProductos = (data,container) =>{
    const { img, id, to, price, type, name, location, beds, baths, size, SmartHomes, ParkingSpeace, SwimmingSwimmingPool, PrivatSecurity, MedicalCenter, LibraryArea, KingSizeBeds, KidsPlayland} = data
        container.innerHTML = `
        <article class="bg-white relative  show-modal" >
        <img class="w-full cursor-pointer show-modal" src="${img}" alt="imagen" id="${id} ">
        <p class="relative left-4 -top-56 px-2 w-20 text-center bg-color-green text-white">For ${to}</p>
        <p class="relative left-4 -top-20 w-36 text-2xl text-white">$${price}/mo</p>
        <div class="flex flex-col relative -top-10 px-8 ">
            <p class="text-color-green">${type}</p>
            <p class="text-xl py-3 ">${name}</p>
            <p><i class="fa-solid fa-location-dot"></i> ${location}</p>
            <div>
            <p>Intellgence: ${SmartHomes} </p>
            <p>parking: ${ParkingSpeace} </p>
            <p>pool: ${SwimmingSwimmingPool} </p>
            <p>security: ${PrivatSecurity} </p>
            <p>medic: ${MedicalCenter} </p>
            <p>library: ${LibraryArea}</p>
            <p>King Size beth: ${KingSizeBeds} </p>
            <p>park: ${KidsPlayland}  </p>
            </div>
            <div class="flex  justify-between pt-5">
                <p><i class="fa-solid fa-bed text-color-green pr-1"></i> Beds ${beds}</p>
                <p><i class="fa-solid fa-bath text-color-green pr-1"></i>Baths ${baths}</p>
                <p><i class="fa-solid fa-maximize text-color-green pr-1"></i>${size} Sqft</p>
            </div>
        </div>
    
    </article>`
}