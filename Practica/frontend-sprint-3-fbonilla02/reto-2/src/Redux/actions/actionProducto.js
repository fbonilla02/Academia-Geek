
import { typesProducto } from "../types/types"

export const actionAddSync =(producto)=>{
    return {
        type: typesProducto.add,
        payload: producto,
    }
}
export const actionDeleteSync = (id)=>{
    return{
        type: typesProducto.delete,
        payload: id

    }
}

export const actionCompletSync = (complete)=>{
    return{
        type: typesProducto.complete,
        payload: complete
    }
}
export const filtroCompletSync = (completeData)=>{
    return{
        type: typesProducto.completeData,
        payload: completeData
    }
}
export const filtroActiveSync = ()=>{
    return{
        type: typesProducto.activeData
    }
}
export const filtroAllSync = (producto) =>{
    return{
        type: typesProducto.allData,
        payload: producto
    }
}