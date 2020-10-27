// Action literal
const redux = require('redux');
const reduxLogger = require('redux-logger');

const createStore = redux.createStore;
const combineReducers = redux.combineReducers;
const applyMiddleware = redux.applyMiddleware;
const logger = reduxLogger.logger;

const BUY_CAKE = 'BUY_CAKE';
const BUY_ICECREAM = 'BUY_ICECREAM';


// Actions are returned as state from a function
// TODO: Why??? So that the state of a state is only at one place.
const buyCake = () => ({
  type: BUY_CAKE,
  info: 'First redux action cake.'
})

const buyIceCream = () => ({
  type: BUY_ICECREAM,
  info: 'First redux action icecream.'
})

// aplication state has to be represented by a single object
const initialCakeState = {
  numOfCakes: 10
}

const initialIcecreamState = {
  numOfIceCreams: 20
}

// (previousState, action) => newState
const cakeReducer = (state = initialCakeState, action) => {
  // IMPORTANT: We are not mutationg the state object, we are returning a new object;
  switch(action.type) {
    case BUY_CAKE: return {
      ...state, // Making a copy of the state object and then returning the number states
      numOfCakes: state.numOfCakes - 1
    }

    default: return state; 
  }
}

const iceCreamReducer = (state = initialIcecreamState, action) => {
  switch(action.type) {
    case BUY_ICECREAM: return {
      ...state, 
      numOfIceCreams: state.numOfIceCreams - 1
    }

    default: return state; 
  }
}

// Wrong way to use multiple reducerrs!!!
// Redux uses one store to keep all reducers for the application.

const rootReducer = combineReducers({
  cake: cakeReducer,
  icecream: iceCreamReducer
})

const store = createStore(rootReducer, applyMiddleware(logger));
// const unsubscribe = store.subscribe(() => console.log('Updated state', store.getState()))

console.log('Initial state',  store.getState());
store.dispatch(buyCake())

store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyIceCream())
store.dispatch(buyIceCream())
// unsubscribe();
