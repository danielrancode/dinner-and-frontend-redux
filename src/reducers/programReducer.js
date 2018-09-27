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
    case types.START_SAVING_PROGRAM_REQUEST:
      return state
    case types.SAVE_SUCCESS:
      return { ...state, message: "Program saved!"}
    case types.START_DELETING_PROGRAM_REQUEST:
      return state
    case types.DELETE_SUCCESS:
      return { ...state, message: "Program deleted!"}
    case types.EDIT_PROGRAM:
      return state
    case types.START_UPDATING_PROGRAM_REQUEST:
      return state
    case types.UPDATE_SUCCESS:
      return { ...state, message: "Program updated!"}
    case types.LOGOUT:
      return initialProgramState
    default:
      return state;
  }
}

export default program
