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
    case 'START_ADDING_RESTAURANTS_REQUEST':
      return { ...state, loadingRestaurants: true }
    case 'ADD_RESTAURANTS':
      console.log( "ADD RESTAURANTS:", action.data.business)
      return { ...state, restaurantsResults: action.data.businesses, loadingRestaurants: false }
    case 'START_ADDING_EVENTS_REQUEST':
      return { ...state, loadingEvents: true }
    case 'ADD_EVENTS':
      console.log( "ADD EVENTS:", action.data.events)
      return { ...state, eventsResults: action.data.events, loadingEvents: false }
    case 'SELECT_EVENT':
      if (state.currentEvent === action.payload) {
        return { ...state, currentEvent: null }
      } else {
        return { ...state, currentEvent: action.payload }
      }
    case 'SELECT_RESTAURANT':
      if (state.currentRestaurant === action.payload) {
        return { ...state, currentRestaurant: null }
      } else {
        return { ...state, currentRestaurant: action.payload }
      }
    case 'SHUFFLE':
      return state
    case 'LOGOUT':
      return initialSearchState
    default:
      return state;
  }
}

export default search
