import React, { useState } from 'react'
import { buyCake } from '../redux/actions/actionCreators'
import { connect } from 'react-redux'
import { useRef } from 'react'
const DynamicCakeNumber = (props) => {
    const [cakeNumber , setCakeNumber] = useState(1) ;

  return (
    <div>
        <h1>Number of cake - {props.numOfCake} </h1>
        {/* and this using state and onChange function  */}
        <input type='text' value={cakeNumber}  onChange={(e)=>setCakeNumber(e.target.value)}/>
        <button onClick={()=> props.buyCake(cakeNumber)}> buy {cakeNumber} cake </button>
        {/* this way using useRef  */}
     {/*  <input type='text' /* value={cakeNumber}  onChange={(e)=>setCakeNumber(e.target.value)}  ref={cakeRef}/>}
      {/*  <button onClick={()=> props.buyCake(cakeRef.current.value)}> buy {cakeRef.current.value} cake </button> */}
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
        buyCake : (number) => dispatch(buyCake(number))
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(DynamicCakeNumber) ;