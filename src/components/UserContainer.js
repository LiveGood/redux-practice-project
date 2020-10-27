import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchUsers } from '../redux'

import { 
  fetchUsersRequest,
  fetchUsersSuccess,
  fetchUsersFailure
} from '../redux'

function UserContainer({ userData, fetchUsers }) {
  useEffect(() => {
    fetchUsers();
  }, [])

  return userData.loading ? (
    <h2>Loading</h2>
  ) : userData.error ? (
    <h2>{userData.error}</h2>
  ) : (
    <div>
      <h2>User List</h2>
      {
        userData && userData.users && userData.users.map(user => {
          return <p>{user.name}</p>
        })
      }
    </div>
  )
}

const mapStateProps = state => {
  return {
    userData: state.user
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchUsers: () => dispatch(fetchUsers())
  }
}

export default connect(
  mapStateProps,
  mapDispatchToProps
)(UserContainer)
