import { combineReducers } from 'redux'
import program from './reducers/programReducer'
import alert from './reducers/alertReducer'
import search from './reducers/searchReducer'
import user from './reducers/userReducer'

export default combineReducers({
  program,
  alert,
  search,
  user,
})
