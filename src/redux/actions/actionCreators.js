import * as actions from './actionType'
import axios from 'axios'
// FIRST ACTION_CREATOR FOR CAKE
export const buyCake = (number)=>{
    return{
      type : actions.BUY_CAKE ,
      payload : number
    }
}
export const buyIceCream = ()=>{
    return{
        type : actions.BUY_ICE_CREAM
    }
}

export const fetchUserRequest = () =>{
    return{
      type : actions.FETCH_USER_REQUEST
    }
}

export const fetchUserSuccess = (users)=>{
  return {
    type : actions.FETCH_USER_SUCCESS ,
    payload : users
  }
}

export const fetchUserFailure = (error)=>{
  return {
    type : actions.FETCH_USER_FAILURE ,
     payload : error
  }
}
 // this action creator is used to implement more than one actionCreator and this is done by using redux-thunk middleWre
 export const fetchUser = ()=>{
 return (dispatch) =>{
    // to send a request to api
     dispatch(fetchUserRequest())
 axios.get("https://jsonplaceholder.typicode.com/users")
 .then((res)=>{
    const users = res.data ;
    // dispatch success users if status of api is 200
    dispatch(fetchUserSuccess(users))
 }).catch((error) =>{
    const errorMsg = error.message ;
    dispatch(fetchUserFailure(errorMsg))  ;
 })
 }
}

export default fetchUser ;