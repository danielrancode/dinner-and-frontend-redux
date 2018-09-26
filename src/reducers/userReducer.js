import * as types from '../types.js'

const initialUserState = {
  loggingIn: false,
  failedLogin: false,
  loggedIn: false,
  currentUser: {}
}

const user = (state = initialUserState, action) => {
  switch(action.type) {
    case types.START_CREATE_USER_REQUEST:
      console.log("hit START_CREATE_USER_REQUEST")
      return state
    case types.LOGIN_REQUEST:
      return {
        ...state,
        loggingIn: true,
      }
    case types.SET_CURRENT_USER:
      return {
        ...state,
        loggingIn: false,
        loggedIn: true,
        currentUser: action.user
      }
    case types.LOGIN_FAILURE:
      return {
        ...state,
        loggingIn: false,
        failedLogin: true,
        loggedIn: false,
        currentUser: '',
        message: action.message
      }
    case types.LOGOUT:
      return initialUserState
    default:
      return state;
  }
}

export default user
