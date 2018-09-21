import locationData from './assets/locationData.js'

const initialState = {
  currentUser: {name: 'daniel', password: "hello!", id: 100},
  userPrograms: [],
  restaurantsResults: [],
  eventsResults: [],
  currentProgram: {},
  currentRestaurant: {},
  currentEvent: {},
  currentSearchParams: {},
  loadingEvents: false,
  loadingRestaurants: false,
}

export default function reducer(state = initialState, action) {
  console.log("Reducer was hit! action: ", action, "state: ", state)
  switch(action.type) {
    case 'SELECT_RESTAURANT':
      return { ...state, currentRestaurant: action.payload }
    case 'SELECT_EVENT':
      return { ...state, currentEvent: action.payload }
    case 'START_ADDING_RESTAURANTS_REQUEST':
      return { ...state, loadingRestaurants: true }
    case 'ADD_RESTAURANTS':
      return { ...state, restaurantsResults: action.data.businesses, loadingRestaurants: false }
    case 'START_ADDING_EVENTS_REQUEST':
      return { ...state, loadingEvents: true }
    case 'ADD_EVENTS':
      return { ...state, eventsResults: action.data.events, loadingEvents: false }
    case 'SELECT_PROGRAM':
      return { ...state, currentProgram: action.payload}
    case 'SHUFFLE':
      return state
    case 'CREATE_PROGRAM':
      return state
    case 'EDIT_PROGRAM':
      return state
    case 'UPDATE_PROGRAM':
      return state
    case 'DELETE_PROGRAM':
      return state
    case 'CREATE_USER':
      return state
    case 'LOG_IN':
      return state
    case 'LOG_OUT':
      return state
    default:
      return state;
  }
}
