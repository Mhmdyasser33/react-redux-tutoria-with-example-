import { combineReducers } from "redux";
import CakeReducer from "./cakeReducer";
import iceCreamReducer from "./iceCreamReducer";
import UserReducer from "./userReducer";

const rootReducer = combineReducers({
   cake : CakeReducer ,
   iceCream :  iceCreamReducer ,
   user : UserReducer
})

export default rootReducer ;