const initialUserState = {
  loggingIn: false,
  failedLogin: false,
  loggedIn: false,
  message: '',
  currentUser: {}
}

const user = (state = initialUserState, action) => {
  switch(action.type) {
    case 'CREATE_USER':
      return state
    case 'LOGIN_REQUEST':
      return {
        ...state,
        loggingIn: true,
      }
    case 'LOGIN_SUCCESS':
      return {
        message: `Hello, ${action.user.name}!`,
        loggingIn: false,
        failedLogin: false,
        loggedIn: true,
        currentUser: action.user
      }
    case 'LOGIN_FAILURE':
      return {
        ...state,
        loggedIn: false,
        failedLogin: true,
        loggedIn: false,
        currentUser: '',
        message: action.message
      }
    case 'LOGOUT':
      return initialUserState
    default:
      return state;
  }
}

export default user
