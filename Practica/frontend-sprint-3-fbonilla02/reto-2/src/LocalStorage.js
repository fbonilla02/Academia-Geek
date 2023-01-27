export const guardarDatos = (stateProducto) =>{
    localStorage.setItem('todo', JSON.stringify(stateProducto))
}


export const obtenerDatos = ()=>{
    const productoLocalStorage = localStorage.getItem('todo')
    return JSON.parse(productoLocalStorage)
}