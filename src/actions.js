// restaurant actions
export const selectRestaurant = (restaurant) => {
  return {
    type: 'SELECT_RESTAURANT',
    payload: restaurant,
  }
}

// event actions
export const selectEvent = (event) => {
  return {
    type: 'SELECT_EVENT',
    payload: event,
  }
}

// search
export const searchRestaurantsAndEvents = (searchParams) => {
  return {
    type: 'SEARCH_RESTAURANTS_AND_EVENTS',
    payload: searchParams,
  }
}

// search with thunk
export const searchRestaurants = () => {
  return (dispatch) => {
    dispatch({ type: 'START_ADDING_RESTAURANTS_REQUEST'})
    return fetch('http://localhost:3000/api/v1/restaurants/search?location=11238')
      .then(res => res.json())
      .then(data => dispatch({ type: 'ADD_RESTAURANTS', data }))
  }
}

// shuffle
export const shuffle = (data) => {
  return {
    type: 'SHUFFLE',
    payload: data
  }
}

// program CRUD actions
export const createProgram = (program) => {
  return {
    type: 'CREATE_PROGRAM',
    payload: program
  }
}

export const editProgram = (program) => {
  return {
    type: 'EDIT_PROGRAM',
    payload: program
  }
}

export const updateProgram = (program) => {
  return {
    type: 'UPDATE_PROGRAM',
    payload: program
  }
}

export const deleteProgram = (program) => {
  return {
    type: 'DELETE_PROGRAM',
    payload: program
  }
}

// user
export const createUser = (params) => {
  return {
    type: 'CREATE_USER',
    payload: params
  }
}

export const logIn = (params) => {
  return {
    type: 'LOG_IN',
    payload: params
  }
}

export const logOut = () => {
  return {
    type: 'LOG_OUT',
  }
}
