import React from 'react'
import { connect } from 'react-redux'
import { buyIceCream } from '../redux/actions/actionCreators'
const iceCream = (props) => {
  return (
    <div>
        <h1>Number of cake - {props.numOfIceCream} </h1>
        <button onClick={props.buyIceCream}>buy a iceCream </button>
    </div>
  )
}
const mapStateToProps = (state)=>{
  return{
    numOfIceCream : state.iceCream.numberOfIceCream
  }
}

const mapDispatchToProps = (dispatch) =>{
    return {
        buyIceCream: () => dispatch(buyIceCream())
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(iceCream) ;