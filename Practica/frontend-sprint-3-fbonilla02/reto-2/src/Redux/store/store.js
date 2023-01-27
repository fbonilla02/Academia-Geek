
import { combineReducers, createStore } from "redux";
import { guardarDatos } from "../../LocalStorage";
import { ProductsReducers } from "../reducers/ProductsReducer";


const reducers = combineReducers({
    productoStore: ProductsReducers

})

export const store = createStore(
    reducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

store.subscribe(()=>{
    guardarDatos({
        guardarProducto: store.getState().productoStore
    })
})