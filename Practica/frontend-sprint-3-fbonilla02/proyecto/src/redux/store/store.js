import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import {  registerReducer } from "../reducer/reducers";
import thunk from "redux-thunk";
import { infoReducer } from "../reducer/info-reducers";

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;
const reducers = combineReducers({
    register: registerReducer,
    info: infoReducer
    
})

export const store = createStore(
    reducers,
    composeEnhancers(
        applyMiddleware(thunk)
    )
)
