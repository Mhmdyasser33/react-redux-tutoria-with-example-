import React from 'react'
import { connect } from 'react-redux'
import { buyCake, buyIceCream } from '../redux/actions/actionCreators'
// this component i want in here to show the difference between own props and state(get from redux)
const TestComp = (props) => {
  return (
    <>
    <div>item - {props.item}</div>
    <button onClick={props.buyCake}>but cake </button>
    </>
  )
}
// this to handle how to get state of redux and connect it with react
const mapStateToProps = (state , ownProps)=>{
  const date = ownProps.cake ? state.cake.numberOfCakes : state.iceCream.numberOfIceCream
  return {
     item : date
  }
  }
  const mapDispatchToProps = (dispatch , ownProps)=>{
    const initDispatch =  ownProps.cake ?
      () =>dispatch(buyCake(5))
      :()=> dispatch(buyIceCream())
    return {
        buyCake : initDispatch
    }
  }
export default  connect(mapStateToProps , mapDispatchToProps)(TestComp) ;