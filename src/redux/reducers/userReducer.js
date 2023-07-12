
import * as actions from '../actions/actionType'
const initialState = {
  loading: false,
  user: [],
  error: ''
};


const userReducer = (state = initialState , action)=>{
   switch(action.type){
      case actions.FETCH_USER_REQUEST:
        return{
          ...state ,
          loading : true
        }
        case actions.FETCH_USER_SUCCESS:
        return{
            ...state ,
           loading : false ,
          user : action.payload ,
          error : "" ,
        }
        case actions.FETCH_USER_FAILURE:
            return{
                ...state ,
                user : [] ,
                error : action.payload
            }
           default :
           return state
   }
}
export default userReducer ;