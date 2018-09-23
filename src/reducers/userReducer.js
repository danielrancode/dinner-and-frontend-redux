let currentUser = {name: 'daniel', password: "hello!", id: 100}

const initialUserState = currentUser ? { loggedIn: true, currentUser: currentUser } : { loggedIn: false }

const user = (state = initialUserState, action) => {
  switch(action.type) {
    case 'CREATE_USER':
      return state
    case 'LOGIN_REQUEST':
      return {
        loggingIn: true,
        user: action.user
      }
    case 'LOGIN_SUCCESS':
      return {
        loggedIn: true,
        user: action.user
      }
    case 'LOGIN_FAILURE':
      return {
        loggedIn: false
      }
    case 'LOGOUT':
      return {
        loggedIn: false
      }
    default:
      return state;
  }
}

export default user
