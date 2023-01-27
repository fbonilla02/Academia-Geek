import { typesProducto } from "../types/types"


const initialState ={
    producto:[]
}
export const ProductsReducers = (state = initialState, action) =>{
    switch (action.type) {
        case typesProducto.add:
            return{
                producto: [...state.producto, action.payload]
            }
        case typesProducto.delete:
            return{
                producto: state.producto.filter(c => c.id !== action.payload)
            }
        case typesProducto.complete:
            return{
                producto: state.producto.map((c) => c.id === action.payload ?  {...c,  complete:true } : c)
            }
        case typesProducto.completeData:
        return{
            producto: action.payload.filter(c =>  c.complete !== false )
        }
        case typesProducto.activeData:
            return{
                producto: state.producto.filter(c => c.complete === false)
            }
        case typesProducto.allData:
            return{
                producto:  state.producto.forEach(element => console.log(element))
            }
        default:
            return state
    }
}