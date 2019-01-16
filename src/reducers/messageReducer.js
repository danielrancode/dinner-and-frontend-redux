import * as types from '../types.js'

const initialMessageState = {
  message: ''
}

export const message = (state = initialMessageState, action) => {
  switch(action.type) {
    case types.DISPLAY_MESSAGE:
      return { message: action.message }
    case types.HIDE_MESSAGE:
      return { message: ''}
    default:
      return state;
  }
}

export default message
