//tüm stateleri topladıgım yer

import { combineReducers } from "redux";
import cartReducer from "./reducers/cartReducer";


const rootReducer = combineReducers({
    cart :cartReducer
})

export default rootReducer;