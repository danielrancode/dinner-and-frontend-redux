// let currentUser = {name: 'Daniel', username: 'daniel', password: "rein", id: 1}
let currentUser = {}

const initialUserState = currentUser ? { loggingIn: false, failedLogin: false, message: '', loggedIn: true, currentUser: currentUser } : { loggedIn: false }

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
        ...state,
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
      return {
        ...state,
        loggedIn: false
      }
    default:
      return state;
  }
}

export default user
