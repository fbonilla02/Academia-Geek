
export function leak(data, categoria){


    const unicoArray = data.map(element => element.category)
    const unico = [...new Set(unicoArray)];

    categoria.innerHTML = `<button id="todos">todos</button>`
    unico.forEach(element => {

        categoria.innerHTML += `
        <button id="${element}">${element}</button>`
    });

}

