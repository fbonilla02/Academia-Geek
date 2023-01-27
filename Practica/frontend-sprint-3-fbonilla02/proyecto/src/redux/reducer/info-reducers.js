import { typesInfo } from "../types/types"

const initalState = {
    info:[]
}

export const infoReducer = (state= initalState, action)=>{
    switch (action.type){
        case typesInfo.add:
            return{
                info: [...state.info, action.payload]
            }
        case typesInfo.listar:
            return{
                info: [...action.payload]
            }
            default:
                return state
    }
}