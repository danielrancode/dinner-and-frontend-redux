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







////////////////// OLD VERSION //////////////////////////////



// import locationData from './assets/locationData.js'
// import { combineReducers } from 'redux'
//
// // const initialState = {
// //   currentUser: {name: 'daniel', password: "hello!", id: 100},
// //   userPrograms: [],
// //   restaurantsResults: [],
// //   eventsResults: [],
// //   currentProgram: {},
// //   currentRestaurant: {},
// //   currentEvent: {},
// //   currentSearchParams: {},
// //   loadingEvents: false,
// //   loadingRestaurants: false,
// // }
//
// const initialUserState = {
//   currentUser: {name: 'daniel', password: "hello!", id: 100},
// }
//
// const initialSearchState = {
//   type: '',
//   restaurantsResults: [],
//   eventsResults: [],
//   currentSearchParams: {},
//   loadingEvents: false,
//   loadingRestaurants: false,
// }
//
// const initialEventState = {
//   currentEvent: null,
// }
//
// const initialRestaurantState = {
//   currentRestaurant: null,
// }
//
// const initialProgramState = {
//   programs: // 20180922124804
// // http://localhost:3000/api/v1/programs
// [],
//   currentProgram: null,
// }
//
// const search = (state = initialSearchState, action) => {
//   switch(action.type) {
//     case 'START_ADDING_RESTAURANTS_REQUEST':
//       return { ...state, loadingRestaurants: true }
//     case 'ADD_RESTAURANTS':
//       return { ...state, restaurantsResults: action.data.businesses, loadingRestaurants: false }
//     case 'START_ADDING_EVENTS_REQUEST':
//       return { ...state, loadingEvents: true }
//     case 'ADD_EVENTS':
//       return { ...state, eventsResults: action.data.events, loadingEvents: false }
//     case 'SHUFFLE':
//       return state
//     default:
//       return state;
//   }
// }
//
// const user = (state = initialUserState, action) => {
//   switch(action.type) {
//     case 'CREATE_USER':
//       return state
//     case 'LOG_IN':
//       return state
//     case 'LOG_OUT':
//       return state
//     default:
//       return state;
//   }
// }
//
// const program = (state = initialProgramState, action) => {
//   switch(action.type) {
//     // case 'SAVE_SUCCESS_MESSAGE':
//     //   return { ...state, message: 'Program Saved!'}
//     case 'SELECT_PROGRAM':
//       return { ...state, currentProgram: action.payload}
//     case 'CREATE_PROGRAM':
//       return state
//     case 'EDIT_PROGRAM':
//       return state
//     case 'UPDATE_PROGRAM':
//       return state
//     case 'DELETE_PROGRAM':
//       return state
//     default:
//       return state;
//   }
// }
//
// const event = (state = initialEventState, action) => {
//   switch(action.type) {
//     case 'SELECT_EVENT':
//       if (state.currentEvent === action.payload) {
//         return { ...state, currentEvent: null }
//       } else {
//         return { ...state, currentEvent: action.payload }
//       }
//     default:
//       return state;
//   }
// }
//
// const restaurant = (state = initialRestaurantState, action) => {
//   switch(action.type) {
//     case 'SELECT_RESTAURANT':
//       if (state.currentRestaurant === action.payload) {
//         return { ...state, currentRestaurant: null }
//       } else {
//         return { ...state, currentRestaurant: action.payload }
//       }
//     default:
//       return state;
//   }
// }
//
// export default combineReducers({
//   search,
//   user,
//   program,
//   restaurant,
//   event,
// })
