import * as types from './types.js'


// search restaurants
export const searchRestaurants = ({ params }) => {
  return (dispatch) => {
    dispatch({ type: types.START_ADDING_RESTAURANTS_REQUEST})
    return fetch(`${process.env.REACT_APP_API_ENDPOINT}/api/v1/restaurants/search?term=${params.foodType}&lat=${params.lat}&lon=${params.lon}`)
      .then(res => res.json())
      .then(data => dispatch({ type: types.ADD_RESTAURANTS, data }))
  }
}

// search events
export const searchEvents = ({ params }) => {
  return (dispatch) => {
    console.log('actions.js params.dateParam:', params.dateParam)
    dispatch({ type: types.START_ADDING_EVENTS_REQUEST})
    return fetch(`${process.env.REACT_APP_API_ENDPOINT}/api/v1/events/search?lat=${params.lat}&lon=${params.lon}&q=${params.eventType}&datetime_utc=${params.dateParam}`)
      .then(res => res.json())
      .then(data => dispatch({ type: types.ADD_EVENTS, data }))
  }
}

export const fetchPrograms = (userId) => {
  return (dispatch) => {
    dispatch({ type: types.START_ADDING_PROGRAMS_REQUEST})
    fetch(`${process.env.REACT_APP_API_ENDPOINT}/api/v1/users/${userId}/programs`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${localStorage.getItem('jwt')}`
      }
    })
    .then(res => res.json())
    .then(data => {
      dispatch({ type: types.ADD_PROGRAMS, data}
      )})
    // .then(data => console.log(data))
  }
}


// program CRUD actions
export const createProgram = (userId, data) => {
  return (dispatch) => {
    dispatch({ type: types.START_SAVING_PROGRAM_REQUEST})
    return fetch(`${process.env.REACT_APP_API_ENDPOINT}/api/v1/users/${userId}/programs`, {
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
          dispatch({ type: types.SAVE_SUCCESS })
          dispatch(fetchPrograms(userId))
      } else {
          throw res
        }}
      )
      // .then(jsonRes => {
      //   console.log("jsonRes:", jsonRes)
        // dispatch({ type: types.SAVE_SUCCESS' })
      // })
      // .catch(res => res.json()
      // .then(e => console.log(e)
        // dispatch({ type: types.LOGIN_FAILURE', message: e.message }))
      // ))
  }
}

export const deleteProgram = (program) => {
  return (dispatch) => {
    dispatch({ type: types.START_DELETING_PROGRAM_REQUEST})
    fetch(`${process.env.REACT_APP_API_ENDPOINT}/api/v1/users/${program.user_id}/programs/${program.id}`, {
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${localStorage.getItem('jwt')}`
        },
      })
      .then(res => {
        if (res.ok) {
          console.log(res)
          dispatch({ type: types.DELETE_SUCCESS })
      } else {
          throw res
        }}
      ).then(x => dispatch(fetchPrograms(program.user_id)))
      // .then(jsonRes => {
      //   console.log("jsonRes:", jsonRes)
        // dispatch({ type: types.SAVE_SUCCESS' })
      // })
      // .catch(res => res.json()
      // .then(e => console.log(e)
        // dispatch({ type: types.LOGIN_FAILURE', message: e.message }))
      // ))
  }
}

export const createUser = (params) => {
  return (dispatch) => {
    dispatch({ type: types.START_CREATE_USER_REQUEST})
    fetch(`${process.env.REACT_APP_API_ENDPOINT}/api/v1/users`, {
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
        localStorage.setItem('jwt', jsonRes.jwt)
        dispatch({ type: types.SET_CURRENT_USER, user: jsonRes.user})
      })
      .catch(res => res.json().then(jsonRes => {
        dispatch({ type: types.LOGIN_FAILURE, message: jsonRes.error })
      })
      )
  }
}


export const loginUser = (params) => {
  return (dispatch) => {
    dispatch({ type: types.LOGIN_REQUEST})
    fetch(`${process.env.REACT_APP_API_ENDPOINT}/api/v1/login`, {
      method: "POST",
      // mode: "cors",
      headers: {
        "Content-Type": "application/json",
      Accept: "application/json"
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
        localStorage.setItem('jwt', jsonRes.jwt)
        dispatch({ type: types.SET_CURRENT_USER, user: jsonRes.user})
        dispatch(fetchPrograms(jsonRes.user.id))
      })
      .catch(res => res.json().then(jsonRes => dispatch({ type: types.LOGIN_FAILURE, message: jsonRes.message })))
  }
}

export const logout = () => {
  localStorage.removeItem('jwt')
  return {
    type: types.LOGOUT,
  }
}

export const fetchCurrentUser = () => {
  return (dispatch) => {
    dispatch(() => ({ type: types.LOGIN_REQUEST}))
    fetch(`${process.env.REACT_APP_API_ENDPOINT}/api/v1/user`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${localStorage.getItem('jwt')}`
      }
    })
    .then(res => res.json())
    // .then(res => console.log("res:", res))
    .then(jsonRes => {
      dispatch({ type: types.SET_CURRENT_USER, user: jsonRes.user })
      dispatch(fetchPrograms(jsonRes.user.id))
    } )
  }
}

// export const saveSuccessMessage = () => {
//   return {
//     type: types.SAVE_SUCCESS_MESSAGE',
//   }
// }


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

// shuffle
export const shuffle = (data) => {
  return {
    type: types.SHUFFLE,
    payload: data
  }
}

export const editProgram = (program) => {
  return {
    type: types.EDIT_PROGRAM,
    payload: program
  }
}

export const updateProgram = (program) => {
  return {
    type: types.UPDATE_PROGRAM,
    payload: program
  }
}
