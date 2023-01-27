import { typesLogin } from "../types/types";

export const registerReducer = (state={}, action)=>{
    switch (action.type){

        case typesLogin.register:
            return{
                nombre: action.payload.nombre,
                email: action.payload.email,
                password: action.payload.password
            }
        case typesLogin.login:
            return{
                nombre: action.payload.nombre,
                email: action.payload.email,
            }
        case typesLogin.logout:
            return{
                
            }
            default:
                return state
    }
}
