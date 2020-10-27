import { 
  FETCH_USERS_REQUESTS, 
  FETCH_USERS_SUCCESS, 
  FETCH_USERS_FAILURE
} from './userTypes'

const initialState = {
  loading: false,
  users: [],
  error: ''
}

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USERS_REQUESTS:
      return {
        ...state,
        loading: true
      }
    case FETCH_USERS_SUCCESS:
      return {
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

export default userReducer