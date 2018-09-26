import * as types from '../types.js'

const initialProgramState = {
  programs: [],
  loadingPrograms: false,
  currentProgram: null,
  currentEvent: null,
  currentRestaurant: null,
}

export const program = (state = initialProgramState, action) => {
  switch(action.type) {
    case types.START_ADDING_PROGRAMS_REQUEST:
      return { ...state, loadingPrograms: true }
    case types.ADD_PROGRAMS:
      return { ...state, programs: action.data, loadingprograms: false }
    case types.SELECT_PROGRAM:
      return { ...state, currentProgram: action.program}
    case types.SAVE_SUCCESS:
      return { ...state, message: "Program saved!"}
    case types.EDIT_PROGRAM:
      return state
    case types.UPDATE_PROGRAM:
      return state
    case types.DELETE_PROGRAM:
      return state
    case types.LOGOUT:
      return initialProgramState
    default:
      return state;
  }
}

export default program
