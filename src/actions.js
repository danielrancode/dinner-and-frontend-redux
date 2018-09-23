// search restaurants
export const searchRestaurants = (searchParams) => {
  return (dispatch) => {
    dispatch({ type: 'START_ADDING_RESTAURANTS_REQUEST'})
    return fetch('http://localhost:3000/api/v1/restaurants/search?location=11238')
      .then(res => res.json())
      .then(data => dispatch({ type: 'ADD_RESTAURANTS', data }))
  }
}

// search events
export const searchEvents = (searchParams) => {
  return (dispatch) => {
    dispatch({ type: 'START_ADDING_EVENTS_REQUEST'})
    return fetch('http://localhost:3000/api/v1/events/search?lat=40.719389&lon=-74.046469')
      .then(res => res.json())
      .then(data => dispatch({ type: 'ADD_EVENTS', data }))
  }
}

export const fetchPrograms = () => {
  return (dispatch) => {
    dispatch({ type: 'START_ADDING_PROGRAMS_REQUEST'})
    return fetch('http://localhost:3000/api/v1/programs')
    .then(res => res.json())
    .then(data => dispatch({ type: 'ADD_PROGRAMS', data}))
    // .then(data => console.log(data))
  }
}

// select restaurant
export const selectRestaurant = (restaurant) => {
  return {
    type: 'SELECT_RESTAURANT',
    payload: restaurant,
  }
}

// select event
export const selectEvent = (event) => {
  return {
    type: 'SELECT_EVENT',
    payload: event,
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
export const createProgram = (data) => {
  return (dispatch) => {
    dispatch({ type: 'START_SAVING_PROGRAM_REQUEST'})
    return fetch('http://localhost:3000/api/v1/programs', {
        method: 'POST',
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({data: data})
      })
      .then(res => dispatch({ type: 'SAVE_SUCCESS_MESSAGE' }))
      // .then(data => console.log(data.json()))
  }
}

// export const saveSuccessMessage = () => {
//   return {
//     type: 'SAVE_SUCCESS_MESSAGE',
//   }
// }

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
