import * as types from '../types.js'

const ROOT = `${process.env.REACT_APP_API_ENDPOINT}/api/v1`
const TOKEN = localStorage.getItem('jwt')

export const createUser = (params) => {
  return (dispatch) => {
    dispatch({ type: types.START_CREATE_USER_REQUEST })
    fetch(`${ROOT}/users`, {
        method: 'POST', headers: { "Content-Type": "application/json" },
        body: JSON.stringify({user: params})
    })
      .then(res => { if (res.ok) { return res.json() } else { throw res }})
      .then(jsonRes => {
        localStorage.setItem('jwt', jsonRes.jwt)
        dispatch({ type: types.SET_CURRENT_USER, user: jsonRes.user })
      })
      .catch(res => res.json()
        .then(jsonRes => 
          dispatch({ type: types.LOGIN_FAILURE, message: jsonRes.error })
        )
      )
  }
}


export const loginUser = (params) => {
  return (dispatch) => {
    dispatch({ type: types.LOGIN_REQUEST })
    fetch(`${ROOT}/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify({user: params})
    })
      .then(res => { if (res.ok) { return res.json() } else { throw res }})
      .then(jsonRes => {
        localStorage.setItem('jwt', jsonRes.jwt)
        dispatch({ type: types.SET_CURRENT_USER, user: jsonRes.user })
      })
      .catch(res =>
        dispatch({ type: types.LOGIN_FAILURE, message: res.statusText })
      )
  }
}


export const logout = () => {
  localStorage.removeItem('jwt')
  return { type: types.LOGOUT }
}


export const fetchCurrentUser = () => {
  return (dispatch) => {
    dispatch({ type: types.LOGIN_REQUEST })
    fetch(`${ROOT}/user`, {
      method: "GET",
      headers: { Authorization: `Bearer ${TOKEN}` }
    })
      .then(res => res.json())
      .then(jsonRes => {
        dispatch({ type: types.SET_CURRENT_USER, user: jsonRes.user })
      })
  }
}
