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

export const fetchPrograms = (userId) => {
  return (dispatch) => {
    dispatch({ type: 'START_ADDING_PROGRAMS_REQUEST'})

    return fetch(`http://localhost:3000/api/v1/users/${userId}/programs`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${localStorage.getItem('jwt')}`
      }
    })
    .then(res => res.json())
    .then(data => dispatch({ type: 'ADD_PROGRAMS', data}))
    // .then(data => console.log(data))
  }
}


// program CRUD actions
export const createProgram = (userId, data) => {
  return (dispatch) => {
    dispatch({ type: 'START_SAVING_PROGRAM_REQUEST'})
    return fetch(`http://localhost:3000/api/v1/users/${userId}/programs`, {
        method: 'POST',
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem('jwt')}`
        },
        body: JSON.stringify({data: data})
      })
      .then(res => {
        if (res.ok) {
          console.log(res)
          dispatch({ type: 'SAVE_SUCCESS' })
      } else {
          throw res
        }}
      )
      // .then(jsonRes => {
      //   console.log("jsonRes:", jsonRes)
        // dispatch({ type: 'SAVE_SUCCESS' })
      // })
      // .catch(res => res.json()
      // .then(e => console.log(e)
        // dispatch({ type: 'LOGIN_FAILURE', message: e.message }))
      // ))
  }
}

export const createUser = (params) => {
  return (dispatch) => {
    dispatch({ type: 'START_CREATE_USER_REQUEST'})
    return fetch(`http://localhost:3000/api/v1/users`, {
        method: 'POST',
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({user: params})
      })
      .then(res => {
        if (res.ok) {
          return res.json()
        } else {
          throw res
        }}
      )
      .then(jsonRes => {
        console.log("jsonRes:", jsonRes)
        dispatch({ type: 'CREATE_USER_SUCCESS' })
      })
      .catch(res => res.json()
      .then(e => console.log(e)
        // dispatch({ type: 'LOGIN_FAILURE', message: e.message }))
      ))
  }
}


export const loginUser = (params) => {
  return (dispatch) => {
    dispatch({ type: 'LOGIN_REQUEST'})
    return fetch('http://localhost:3000/api/v1/login', {
      method: "POST",
      mode: "cors",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify( {user: params})})
      .then(res => {
        if (res.ok) {
          return res.json()
        } else {
          throw res
        }}
      )
      .then(jsonRes => {
        console.log("jsonRes:", jsonRes)
        localStorage.setItem('jwt', jsonRes.jwt)
        dispatch({ type: 'LOGIN_SUCCESS', user: jsonRes.user})
      })
      .catch(res => res.json()
      .then(e =>
        dispatch({ type: 'LOGIN_FAILURE', message: e.message }))
      )
  }
}

export const logout = () => {
  localStorage.removeItem('jwt')
  return {
    type: 'LOGOUT',
  }
}

// export const saveSuccessMessage = () => {
//   return {
//     type: 'SAVE_SUCCESS_MESSAGE',
//   }
// }


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
