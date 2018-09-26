import * as types from '../types.js'

const initialSearchState = {
    type: '',
    currentSearchParams: {},
    restaurantsResults: [],
    eventsResults: [],
    currentEvent: null,
    currentRestaurant: null,
    loadingEvents: false,
    loadingRestaurants: false,
  }

const search = (state = initialSearchState, action) => {
  switch(action.type) {
    case types.START_ADDING_RESTAURANTS_REQUEST:
      return { ...state, currentRestaurant: null, restaurantsResults: [], currenloadingRestaurants: true }
    case types.ADD_RESTAURANTS:
      return { ...state, restaurantsResults: action.data.businesses, loadingRestaurants: false }
    case types.START_ADDING_EVENTS_REQUEST:
      return { ...state, currentEvent: null, eventsResults: [],loadingEvents: true }
    case types.ADD_EVENTS:
      return { ...state, eventsResults: action.data.events, loadingEvents: false }
    case types.SELECT_EVENT:
      if (state.currentEvent === action.payload) {
        return { ...state, currentEvent: null }
      } else {
        return { ...state, currentEvent: action.payload }
      }
    case types.SELECT_RESTAURANT:
      if (state.currentRestaurant === action.payload) {
        return { ...state, currentRestaurant: null }
      } else {
        return { ...state, currentRestaurant: action.payload }
      }
    case types.SHUFFLE:
      return state
    case types.LOGOUT:
      return initialSearchState
    default:
      return state;
  }
}

export default search
