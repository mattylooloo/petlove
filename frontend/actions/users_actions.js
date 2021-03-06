import * as APIUtil from '../util/users_api_util';

export const RECEIVE_UPDATE_USER = "RECEIVE_UPDATE_USER"
export const RECEIVE_UPDATE_ERROR = "RECEIVE_UPDATE_ERROR"
export const FETCH_ALL_USERS = "FETCH_ALL_USERS"
export const FETCH_USER = "FETCH_USER"

export const fetchAllUsers = (users) => ({
  type: FETCH_ALL_USERS,
  users,
})

export const fetchUser = (user) => ({
  type: FETCH_USER,
  users: user,
})

export const getUsers = () => (dispatch) => {
  return APIUtil
  .getUsers()
  .then((users) => dispatch(fetchAllUsers(users)))
}

export const getUser = (userId) => (dispatch) => {
  return APIUtil
  .getUser(userId)
  .then((user) => dispatch(fetchUser(user)))
}

export const receiveUpdateUser = user => {
  return {
    type: RECEIVE_UPDATE_USER,
    user: user,
  }
}

export const receiveUpdatePicture = user => ({
  type: RECEIVE_UPDATE_USER,
  user: user,
})

export const receiveUpdateErrors = user => ({
  type: RECEIVE_UPDATE_ERROR,
  error: [error.responseText]
})

export const update = (user) => (dispatch) => {
  return APIUtil
    .update(user)
    .then(
      (user) => dispatch(receiveUpdateUser(user)),
      (error) => dispatch(receiveUpdateError(error))
    )
}

export const updatePic = (formData, userId) => (dispatch) => {
  return APIUtil
    .updatePic(formData, userId)
    .then(
      (user) => dispatch(receiveUpdatePicture(user)),
      (error) => dispatch(receiveUpdateError(error))
    )
}
