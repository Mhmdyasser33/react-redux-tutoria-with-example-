import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import  { fetchUser } from '../redux/actions/actionCreators'
const UserDate = ({userState , userAction }) => {
 // it is used to render data get from api
  useEffect(()=>{
  userAction() ;
  },[])
  return userState.loading ? (
    <h1>loading.....</h1>
  ) : userState.error ?(
    <h1>{userState.error}</h1>
  ) :
  <div>
    <h1>user lists : </h1>
    <div>
        {userState && userState.user && (
          userState.user.map((person)=><p>{person.name}</p>)
        )}
    </div>
  </div>

}


const mapStateToProps = (state) =>{
  return {
    userState : state.user
  }
}

const mapDispatchToProps = (dispatch) =>{
   return{
    userAction : ()=> dispatch(fetchUser())
   }
}
export default connect(mapStateToProps , mapDispatchToProps)(UserDate);