// Action literal
const redux = require('redux');
const createStore = redux.createStore;
const applyMiddleware = redux.applyMiddleware;
const thunkMiddleware = require('redux-thunk').default;
const axios = require('axios');

const initialState = {
  loading: false,
  users: [],
  error: ''
}

const FETCH_USERS_REQUESTS = 'FETCH_USERS_REQUESTS';
const FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS';
const FETCH_USERS_FAILURE = 'FETCH_USERS_FAILURE'

const fetchUsersRequest = () => {
  return {
    type: FETCH_USERS_REQUESTS
  }
}

const fetchUsersSuccess = (users) => {
  return {
    type: FETCH_USERS_SUCCESS,
    payload: users
  }
}

const fetchUsersFailure = (error) => {
  return {
    type: FETCH_USERS_FAILURE,
    payload: error
  }
}

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case FETCH_USERS_REQUESTS:
      return {
        ...state,
        loading: true
      }
    case FETCH_USERS_SUCCESS:
      return {
        ...state,
        loading: false,
        users: action.payload,
        erorr: ''
      }
    case FETCH_USERS_FAILURE: 
      return {
        loading: false,
        users: [],
        erorr: action.payload
      }

      default: return state
  }
}

// thunkMiddleware allows the return of action function
// to be another function rahter then an object {type: "abc"}
const fetchUsers = () => {
  return function(dispatch) {
    dispatch(fetchUsersRequest())
    axios.get('https://jsonplaceholder.typicode.com/users')
    .then(response => {
      const users = response.data.map(user => user.id);
      dispatch(fetchUsersSuccess(users))
    })
    .catch(error => {
      dispatch(fetchUsersFailure(error.message))
    })
  }
}

const store = createStore(reducer, applyMiddleware(thunkMiddleware));
store.subscribe(() => {console.log(store.getState())})
store.dispatch(fetchUsers());