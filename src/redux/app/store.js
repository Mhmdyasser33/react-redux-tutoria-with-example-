import { createStore } from "redux";
import rootReducer from "../reducers/combineReducer";
import {logger} from 'redux-logger'
import { applyMiddleware } from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension'
import reduxThunk from 'redux-thunk'
 const store = createStore(rootReducer , composeWithDevTools(applyMiddleware(logger , reduxThunk))) ;
export default store ;