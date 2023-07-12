import React from 'react'
import { buyCake } from '../redux/actions/actionCreators'
import { connect, useSelector ,  useDispatch } from 'react-redux'
const TestCake = (props) => {
    const cakeSelector = useSelector((state) => state.cake.numberOfCakes) ;
    const dispatch = useDispatch() ;
  return (
    <div>
        <h1>Number of cake - {cakeSelector} </h1>
        <button onClick={() => dispatch(buyCake())}>buy a cake </button>
    </div>
  )
}
/* const mapStateToProps = (state)=>{
  return{
    numOfCake : state.cake.numberOfCakes
  }
}

const mapDispatchToProps = (dispatch) =>{
    return {
        buyCake : () => dispatch(buyCake())
    }
} */
export default TestCake ;