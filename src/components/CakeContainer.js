import React from 'react'
import { connect } from 'react-redux'
import { buyCake } from '../redux'

// function CakeContainer(props) {
function CakeContainer({ numOfCakes, buyCake} ) {
  
  return (
    <div>
      {/* <h2>Number of Cakes {props.numOfCakes}</h2>
      <button onClick={props.buyCake}>Buy Cake</button> */}
       <h2>Number of Cakes: {numOfCakes}</h2>
      <button onClick={buyCake}>Buy Cake</button>
    </div>
  )
}
// SELECTOR
// This function is needed in order to access the redux state
// It maps the redux state object ot the component Props
const mapStateProps = state => {
  return {
    numOfCakes: state.cake.numOfCakes
  }
}

// Thise one matches the action creators function 
const mapDispathToProps = dispatch => {
  return {
    buyCake: () => dispatch(buyCake())
  }
}

// connect function connects the react component to the redux store
// The redux store is created in store.js and
// passed as paramenter to { Provider } from 'react-redux'
// Provider is component in which the whole aplication is wrapped
export default connect(
  mapStateProps,
  mapDispathToProps
)(CakeContainer)
 