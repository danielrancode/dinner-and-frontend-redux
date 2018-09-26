import * as types from '../types.js'

const initialUserState = {
  loggingIn: false,
  failedLogin: false,
  loggedIn: false,
  message: '',
  currentUser: {}
}

const user = (state = initialUserState, action) => {
  switch(action.type) {
    case types.LOGIN_REQUEST:
      return {
        ...state,
        loggingIn: true,
      }
    case types.LOGIN_SUCCESS:
      return {
        message: `Hello, ${action.user.name}!`,
        loggingIn: false,
        failedLogin: false,
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
