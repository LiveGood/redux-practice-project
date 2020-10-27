import axios from 'axios'
import { 
  FETCH_USERS_REQUESTS, 
  FETCH_USERS_SUCCESS, 
  FETCH_USERS_FAILURE,
  POST_NEW_POST
} from './userTypes'


export const fetchUsersRequest = () => {
  return {
    type: FETCH_USERS_REQUESTS,
    loading: true
  }
}

export const fetchUsersSuccess = (users) => {
  return {
    type: FETCH_USERS_SUCCESS,
    payload: users
  }
}

export const fetchUsersFailure = (error)=>  {
  return {
    type: FETCH_USERS_FAILURE,
    payload: error
  }
}

export const postNewPost = (post) => {
  return {
    type: POST_NEW_POST,
    payload: post
  }
}


export const fetchUsers = () => {
  return (dispatch) => {
    dispatch(fetchUsersRequest())
    axios.get('https://jsonplaceholder.typicode.com/users')
    .then(response => {
      const users = response.data;
      dispatch(fetchUsersSuccess(users))
    })
    .catch(error => {
      dispatch(fetchUsersFailure(error.message))
    })
  }
}
