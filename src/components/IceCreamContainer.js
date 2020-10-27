import React, { useState } from 'react'
import { connect } from 'react-redux'
import { buyIceCream, stockIceCream } from '../redux'

function IceCreamContainer({ numOfIceCreams, buyIceCream, stockIceCream} ) {
  const [number, setNumber] = useState(1);
  const [stockNumber, setStockNumber] = useState(1);

  return (
    <div>
      <h2>Number of icecrams: {numOfIceCreams}</h2>
     <div>
      <input 
          type='text' 
          value={number} 
          onChange={e => setNumber(e.target.value)}
        />
        <button onClick={() => buyIceCream(number)}>Buy {number} Icecream</button>
     </div>
     <div>
      <input 
          type='text' 
          value={stockNumber} 
          onChange={e => setStockNumber(e.target.value)}
        />
        <button onClick={() => stockIceCream(stockNumber)}>Stock Icream {stockNumber}</button>
     </div>
    </div>
  )
}

const mapStateProps = state => {
  return {
    numOfIceCreams: state.iceCream.numOfIceCreams
  }
}

const mapDispathToProps = dispatch => {
  return {
    buyIceCream: (number) => dispatch(buyIceCream(number)),
    stockIceCream: (number) => dispatch(stockIceCream(number))
  }
}

export default connect(
  mapStateProps,
  mapDispathToProps
)(IceCreamContainer)
 