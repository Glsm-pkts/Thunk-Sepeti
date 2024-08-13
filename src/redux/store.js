import {combineReducers, createStore, applyMiddleware} from "redux"
import restoranReducer from "./reducers/restoranReducer"
import { thunk } from "redux-thunk";
import productReducer from "./reducers/productsReducer";
import BasketReducer from "./reducers/BasketReducer";


const rootReducer = combineReducers({
    restaurants: restoranReducer,
    products: productReducer,
    card: BasketReducer,
})

const store = createStore(rootReducer,applyMiddleware(thunk));

export default store;