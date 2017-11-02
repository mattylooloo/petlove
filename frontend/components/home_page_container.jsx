import { connect } from 'react-redux';

import HomePage from './home_page';
import { getUsers } from '../actions/users_actions';

function mapStateToProps(state, ownProps) {
  let loggedIn;

  if (state.session.currentUser) {
    loggedIn = true
  } else {
    loggedIn = false
  }

  let users;
  if (Object.keys(state.entities.users).length > 1) {
    users = Object.values(state.entities.users)
  }


  let userMatches;
  let userId = state.session.currentUser.id
  if (state.entities.users[state.session.currentUser.id]) {
    (state.entities.users[state.session.currentUser.id]).compatibility_value
    let compatibility_value = ((state.entities.users[state.session.currentUser.id]).compatibility_value)
    userMatches = users.filter( (user) => {
      if (userId === user.id) {
      } else {
        return Math.abs(user.compatibility_value-compatibility_value) < 20;
      }
    })
    
  } else {
    userMatches = users
  }

  return {
    users: userMatches,
    loggedIn: loggedIn,
    errors: state.errors.session
  }
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    getUsers: () => dispatch(getUsers())
  }

}

export default connect(mapStateToProps,mapDispatchToProps)(HomePage)
