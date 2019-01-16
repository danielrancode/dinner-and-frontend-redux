import * as types from '../types.js'

// search restaurants
export const searchRestaurants = ({ params }) => {
  return (dispatch) => {
    dispatch({ type: types.START_ADDING_RESTAURANTS_REQUEST})
    fetch(`${process.env.REACT_APP_API_ENDPOINT}/api/v1/restaurants/search?term=${params.foodType}&lat=${params.lat}&lon=${params.lon}`)
    .then(res => res.json())
    .then(data => dispatch({ type: types.ADD_RESTAURANTS, data }))
  }
}

// search events
export const searchEvents = ({ params }) => {
  return (dispatch) => {
    dispatch({ type: types.START_ADDING_EVENTS_REQUEST})
    fetch(`${process.env.REACT_APP_API_ENDPOINT}/api/v1/events/search?lat=${params.lat}&lon=${params.lon}&q=${params.eventType}&datetime_utc=${params.dateParam}`)
    .then(res => res.json())
    .then(data => dispatch({ type: types.ADD_EVENTS, data }))
  }
}

// select restaurant
export const selectRestaurant = (restaurant) => {
  return {
    type: types.SELECT_RESTAURANT,
    payload: restaurant,
  }
}

// select event
export const selectEvent = (event) => {
  return {
    type: types.SELECT_EVENT,
    payload: event,
  }
}

// // shuffle
// export const shuffle = (data) => {
//   return {
//     type: types.SHUFFLE,
//     payload: data
//   }
// }
