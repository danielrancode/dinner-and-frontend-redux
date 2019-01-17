import * as types from '../types.js'

const ROOT = `${process.env.REACT_APP_API_ENDPOINT}/api/v1`

export const searchRestaurants = ({ params }) => {
  return (dispatch) => {
    dispatch({ type: types.START_ADDING_RESTAURANTS_REQUEST})
    fetch(`${ROOT}/restaurants/search?term=${params.foodType}&lat=${params.lat}&lon=${params.lon}`)
    .then(res => res.json())
    .then(data => dispatch({ type: types.ADD_RESTAURANTS, data }))
  }
}

export const searchEvents = ({ params }) => {
  return (dispatch) => {
    dispatch({ type: types.START_ADDING_EVENTS_REQUEST})
    fetch(`${ROOT}/events/search?lat=${params.lat}&lon=${params.lon}&q=${params.eventType}&datetime_utc=${params.dateParam}`)
    .then(res => res.json())
    .then(data => dispatch({ type: types.ADD_EVENTS, data }))
  }
}

export const selectRestaurant = (restaurant) => {
  return {
    type: types.SELECT_RESTAURANT,
    payload: restaurant,
  }
}

export const selectEvent = (event) => {
  return {
    type: types.SELECT_EVENT,
    payload: event,
  }
}
