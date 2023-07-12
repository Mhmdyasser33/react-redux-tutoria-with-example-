import React from 'react'
import { buyCake } from '../redux/actions/actionCreators'
import { connect } from 'react-redux'
const Cake = (props) => {
  return (
    <div>
        <h1>Number of cake - {props.numOfCake} </h1>
        <button onClick={props.buyCake}>buy a cake </button>
    </div>
  )
}
const mapStateToProps = (state)=>{
  return{
    numOfCake : state.cake.numberOfCakes
  }
}

const mapDispatchToProps = (dispatch) =>{
    return {
        buyCake : () => dispatch(buyCake())
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Cake) ;