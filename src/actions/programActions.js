import * as types from '../types.js'

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
    .then(data => {dispatch({ type: types.ADD_PROGRAMS, data })})
  }
}


// program CRUD actions
export const createProgram = (userId, data) => {
  return (dispatch) => {
    dispatch({ type: types.START_SAVING_PROGRAM_REQUEST})
    fetch(`${process.env.REACT_APP_API_ENDPOINT}/api/v1/users/${userId}/programs`, {
        method: 'POST',
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem('jwt')}`
        },
        body: JSON.stringify({data: data})
      })
    .then(res => {
      if (res.ok) {
        dispatch({ type: types.SAVE_SUCCESS })
        // dispatch(fetchPrograms(userId))
      } else {
        throw res
      }
    })
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
        dispatch({ type: types.DELETE_SUCCESS })
      } else {
        throw res
      }
    })
    .then(x => dispatch(fetchPrograms(program.user_id)))
  }
}

// export const editProgram = (program) => {
//   return {
//     type: types.EDIT_PROGRAM,
//     payload: program
//   }
// }
//
// export const updateProgram = (program) => {
//   return {
//     type: types.UPDATE_PROGRAM,
//     payload: program
//   }
// }
