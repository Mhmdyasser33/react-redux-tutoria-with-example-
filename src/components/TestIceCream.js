import React from 'react'
import { connect } from 'react-redux'
import { buyIceCream } from '../redux/actions/actionCreators'
import { useSelector , useDispatch } from 'react-redux'
const TestIceCream = () => {
   const iceCreamSelector =  useSelector((state) => state.iceCream.numberOfIceCream) ;
   const dispatch = useDispatch()
  return (
    <div>
        <h1>Number of iceCream - {iceCreamSelector} </h1>
        <button onClick={() => dispatch(buyIceCream())}>buy a iceCream </button>
    </div>
  )
}
/* const mapStateToProps = (state)=>{
  return{
    numOfIceCream : state.iceCream.numberOfIceCream
  }
}

const mapDispatchToProps = (dispatch) =>{
    return {
        buyIceCream: () => dispatch(buyIceCream())
    }
} */
export default TestIceCream /* connect(mapStateToProps,mapDispatchToProps)(iceCream)  */;