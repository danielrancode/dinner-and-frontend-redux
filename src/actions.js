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
export const searchRestaurantAndEvent = (searchParams) => {
  return {
    type: 'SEARCH_RESTAURANTS_AND_EVENTS',
    payload: searchParams,
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
