const initialSearchState = {
    type: '',
    restaurantsResults: [],
    eventsResults: [],
    currentSearchParams: {},
    loadingEvents: false,
    loadingRestaurants: false,
  }

const search = (state = initialSearchState, action) => {
  switch(action.type) {
    case 'START_ADDING_RESTAURANTS_REQUEST':
      return { ...state, loadingRestaurants: true }
    case 'ADD_RESTAURANTS':
      return { ...state, restaurantsResults: action.data.businesses, loadingRestaurants: false }
    case 'START_ADDING_EVENTS_REQUEST':
      return { ...state, loadingEvents: true }
    case 'ADD_EVENTS':
      return { ...state, eventsResults: action.data.events, loadingEvents: false }
    case 'SHUFFLE':
      return state
    default:
      return state;
  }
}

export default search
