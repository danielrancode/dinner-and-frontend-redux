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
      console.log( "ADD RESTAURANTS:", action.data.business)
      return { ...state, restaurantsResults: action.data.businesses, loadingRestaurants: false }
    case 'START_ADDING_EVENTS_REQUEST':
      return { ...state, loadingEvents: true }
    case 'ADD_EVENTS':
      console.log( "ADD EVENTS:", action.data.events)
      return { ...state, eventsResults: action.data.events, loadingEvents: false }
    case 'SHUFFLE':
      return state
    default:
      return state;
  }
}

export default search
