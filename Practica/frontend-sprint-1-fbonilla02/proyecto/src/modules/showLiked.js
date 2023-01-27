const ShowLiked = (contains, data ) => {
    contains.innerHTML  = ''
    data.forEach(element => {
        const {name,id,img, location,type, to, price, beds, baths, size} = element
        contains.innerHTML += `
        <article class="bg-white border-b-2 justify-items-center pb-2 grid grid-cols-3 " >
            <div class=" flex flex-col items-center ">
            <p class="text-color-green">${type}</p>
            <img class="h-28 cursor-pointer" src="${img}" alt="imagen" >
            </div>
            <div class="flex flex-col justify-center  ">
            <p class=" px-2 w-24 text-center bg-color-green text-white">For ${to}  </p><span class="text-2xl inline">$${price}/mo</span>
            <p class=" w-36 text-2xl "></p>
              
              <p class="text-xl  ">${name}</p>
              <p><i class="fa-solid fa-location-dot"></i> ${location}</p>
            </div>
              
                <div class="flex items-center cursor-pointer hover:text-red-500 pt-2">
                <i class="fa-solid fa-trash-can fa-2xl" id="${id}"></i>
                </div>
            
    
          </article> `
    });
   

}

export default ShowLiked;