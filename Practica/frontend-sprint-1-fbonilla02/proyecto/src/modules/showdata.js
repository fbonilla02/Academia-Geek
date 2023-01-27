
const ShowData = (data, container ) =>{

    container.innerHTML = ''
    data.forEach(element => {
        const { img, id, to, price, type, name, location, beds, baths, size, SmartHomes, ParkingSpeace, SwimmingSwimmingPool, PrivatSecurity, MedicalCenter, LibraryArea, KingSizeBeds, KidsPlayland} = element
        container.innerHTML += `<div class="mx-28 gap-3" id="Likes">
    <div class="containerCrud">
    <article class="bg-white border-b-2 justify-items-center gap-2 pb-2 grid grid-cols-3 " >
      <div class=" flex flex-col items-center ">
      <p class="text-color-green">${type}</p>
      <img class="h-28 cursor-pointer" src="${img}" alt="imagen" >
      </div>
      <div class="flex flex-col justify-center  ">
      <input class=" px-2 w-24 text-center bg-color-green text-white" disabled>For ${to}  </input><span class="text-2xl inline">$${price}/mo</span>
      <p class=" w-36 text-2xl "></p>
        
        <p class="text-xl  ">${name}</p>
        <p><i class="fa-solid fa-location-dot"></i> ${location}</p>
      </div>
            <div class="flex flex-col items-center  justify-evenly  pt-2">
            <button id="${id}" class="eliminar bg-red-600  text-white cursor-pointer px-5 mx-2 p-3"> Eliminar</button>
            <button id="${id}"  class="editarCrud bg-cyan-300  text-white cursor-pointer px-5 mx-2  py-3"> Editar </button>
            </div>
      

    </article>
</div>
  </div>`
    });
    
}

export default ShowData;