import * as types from '../types.js'

const ROOT = `${process.env.REACT_APP_API_ENDPOINT}/api/v1`
const TOKEN = localStorage.getItem('jwt')

export const fetchPrograms = (userId) => {
  return (dispatch) => {
    dispatch({ type: types.START_ADDING_PROGRAMS_REQUEST})
    fetch(`${ROOT}/users/${userId}/programs`, {
      method: 'GET',
      headers: { Authorization: `Bearer ${TOKEN}` }
    })
    .then(res => res.json())
    .then(data => {dispatch({ type: types.ADD_PROGRAMS, data })})
  }
}

export const createProgram = (userId, data) => {
  return (dispatch) => {
    dispatch({ type: types.START_SAVING_PROGRAM_REQUEST})
    fetch(`${ROOT}/users/${userId}/programs`, {
        method: 'POST',
        headers: { "Content-Type": "application/json", Authorization: `Bearer ${TOKEN}` },
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
    fetch(`${ROOT}/users/${program.user_id}/programs/${program.id}`, {
        method: 'DELETE',
        headers: { Authorization: `Bearer ${TOKEN}` },
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
